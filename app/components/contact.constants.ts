export const CONTACT_FORM_FIELDS = ["name", "email", "message"] as const;

export const CONTACT_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const CONTACT_API_ENDPOINT = "/api/hire-me";

export const CONTACT_ERROR_CODES = {
  rateLimited: "RATE_LIMITED",
  serverNotConfigured: "SERVER_NOT_CONFIGURED",
  invalidPayload: "INVALID_PAYLOAD",
} as const;
