/** Lightweight GA4 / analytics event helpers (no-op without NEXT_PUBLIC_GA_MEASUREMENT_ID). */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean | undefined>,
) {
  if (typeof window === "undefined") return;
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!id || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

export function trackFormSubmit(service: string) {
  trackEvent("form_submit", { service, form_id: "lead" });
}

export function trackPhoneClick() {
  trackEvent("click_phone", { link_url: "tel:+919128666005" });
}

export function trackWhatsAppClick() {
  trackEvent("click_whatsapp", { link_url: "https://wa.me/919128666005" });
}

export function trackCtaClick(label: string, href: string) {
  trackEvent("cta_click", { cta_label: label, link_url: href });
}

export function getBookingUrl(): string | undefined {
  const url = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
  return url || undefined;
}
