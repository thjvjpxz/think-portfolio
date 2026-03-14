export const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
export const RATE_LIMIT_MAX_REQUESTS = 5;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const MIN_NAME_LENGTH = 2;
export const MAX_NAME_LENGTH = 100;
export const MIN_MESSAGE_LENGTH = 10;
export const MAX_MESSAGE_LENGTH = 2000;

export const TELEGRAM_API_BASE_URL = "https://api.telegram.org";

export const HIRE_ME_RESPONSE_CODES = {
  invalidPayload: "INVALID_PAYLOAD",
  rateLimited: "RATE_LIMITED",
  serverNotConfigured: "SERVER_NOT_CONFIGURED",
  telegramSendFailed: "TELEGRAM_SEND_FAILED",
  spamDetected: "SPAM_DETECTED",
} as const;
