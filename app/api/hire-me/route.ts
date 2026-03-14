import { NextResponse } from "next/server";
import {
  EMAIL_REGEX,
  HIRE_ME_RESPONSE_CODES,
  MAX_MESSAGE_LENGTH,
  MAX_NAME_LENGTH,
  MIN_MESSAGE_LENGTH,
  MIN_NAME_LENGTH,
  RATE_LIMIT_MAX_REQUESTS,
  RATE_LIMIT_WINDOW_MS,
  TELEGRAM_API_BASE_URL,
} from "./constants";

type HireMePayload = {
  name: string;
  email: string;
  message: string;
  website?: string;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return false;
}

function validatePayload(payload: HireMePayload) {
  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";
  const website = payload.website?.trim() ?? "";

  if (website.length > 0) {
    return {
      valid: false as const,
      reason: HIRE_ME_RESPONSE_CODES.spamDetected,
    };
  }

  if (name.length < MIN_NAME_LENGTH || name.length > MAX_NAME_LENGTH) {
    return {
      valid: false as const,
      reason: HIRE_ME_RESPONSE_CODES.invalidPayload,
    };
  }

  if (!EMAIL_REGEX.test(email)) {
    return {
      valid: false as const,
      reason: HIRE_ME_RESPONSE_CODES.invalidPayload,
    };
  }

  if (
    message.length < MIN_MESSAGE_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return {
      valid: false as const,
      reason: HIRE_ME_RESPONSE_CODES.invalidPayload,
    };
  }

  return {
    valid: true as const,
    sanitized: {
      name,
      email,
      message,
    },
  };
}

function buildTelegramMessage(payload: {
  name: string;
  email: string;
  message: string;
}) {
  const normalizedMessage = payload.message.replace(/\r\n/g, "\n").trim();
  const submittedAt = new Date().toLocaleString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Ho_Chi_Minh",
  });

  const escapeForTelegramMarkdown = (value: string) =>
    value.replace(/\\/g, "\\\\").replace(/([_*\[\]()~`>#+\-=|{}.!])/g, "\\$1");

  const escapeForTelegramCode = (value: string) =>
    value.replace(/\\/g, "\\\\").replace(/`/g, "\\`");

  return [
    "*THÔNG BÁO LIÊN HỆ MỚI*",
    "",
    `*Họ tên:* \`${escapeForTelegramCode(payload.name)}\``,
    `*Email:* \`${escapeForTelegramCode(payload.email)}\``,
    `*Thời gian gửi:* ${escapeForTelegramMarkdown(submittedAt)}`,
    "",
    "*Nội dung:*",
    "\`",
    escapeForTelegramCode(normalizedMessage),
    "\`",
  ].join("\n");
}

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, code: HIRE_ME_RESPONSE_CODES.rateLimited },
      { status: 429 },
    );
  }

  let body: HireMePayload;
  try {
    body = (await request.json()) as HireMePayload;
  } catch {
    return NextResponse.json(
      { ok: false, code: HIRE_ME_RESPONSE_CODES.invalidPayload },
      { status: 400 },
    );
  }

  const validation = validatePayload(body);
  if (!validation.valid) {
    const status =
      validation.reason === HIRE_ME_RESPONSE_CODES.spamDetected ? 200 : 400;
    return NextResponse.json(
      {
        ok: validation.reason === HIRE_ME_RESPONSE_CODES.spamDetected,
        code: validation.reason,
      },
      { status },
    );
  }

  const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;

  if (!telegramBotToken || !telegramChatId) {
    return NextResponse.json(
      { ok: false, code: HIRE_ME_RESPONSE_CODES.serverNotConfigured },
      { status: 500 },
    );
  }

  try {
    const telegramResponse = await fetch(
      `${TELEGRAM_API_BASE_URL}/bot${telegramBotToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: buildTelegramMessage(validation.sanitized),
          parse_mode: "MarkdownV2",
        }),
      },
    );

    if (!telegramResponse.ok) {
      return NextResponse.json(
        { ok: false, code: HIRE_ME_RESPONSE_CODES.telegramSendFailed },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, code: HIRE_ME_RESPONSE_CODES.telegramSendFailed },
      { status: 502 },
    );
  }
}
