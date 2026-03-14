import { enPortfolioData } from "./en";
import { viPortfolioData } from "./vi";
import type { PortfolioData, PortfolioLocale } from "./types";

const portfolioDataByLocale: Record<PortfolioLocale, PortfolioData> = {
  vi: viPortfolioData,
  en: enPortfolioData,
};

export function getPortfolioData(locale: string): PortfolioData {
  return portfolioDataByLocale[locale as PortfolioLocale] ?? viPortfolioData;
}
