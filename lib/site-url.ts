const DEFAULT_BASE_URL = "https://kimthi1708.id.vn";

/**
 * Returns a normalized site URL with no trailing slash.
 * This keeps canonical URLs and sitemap entries consistent.
 */
export function getBaseUrl(): string {
  const raw = process.env.NEXT_PUBLIC_BASE_URL?.trim();
  const candidate = raw && raw.length > 0 ? raw : DEFAULT_BASE_URL;
  return candidate.replace(/\/+$/, "");
}
