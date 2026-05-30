import { renderToBuffer } from "@react-pdf/renderer";
import type { DocumentProps } from "@react-pdf/renderer";
import type { ReactElement } from "react";
import { getPortfolioData } from "@/data";
import type { PortfolioLocale } from "@/data/types";
import { CvPdfDocument } from "@/lib/cv-pdf";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SUPPORTED_LOCALES: PortfolioLocale[] = ["vi", "en"];

function getLocale(request: Request): PortfolioLocale {
  const url = new URL(request.url);
  const locale = url.searchParams.get("locale");
  return SUPPORTED_LOCALES.includes(locale as PortfolioLocale)
    ? (locale as PortfolioLocale)
    : "vi";
}

export async function GET(request: Request) {
  const locale = getLocale(request);
  const data = getPortfolioData(locale);
  const buffer = await renderToBuffer(
    CvPdfDocument({ data, locale }) as ReactElement<DocumentProps>,
  );

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="Nguyen_Kim_Thi_PHP_Backend_CV_${locale}.pdf"`,
      "Cache-Control": "no-store",
    },
  });
}
