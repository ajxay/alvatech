/* Every CTA on the page points at the inline Calendly embed in the final
   section rather than opening calendly.com in a new tab, so booking never
   takes the visitor off the page. */

export const BOOKING_ANCHOR = "#contact";

export function scrollToBooking(event) {
  event?.preventDefault();
  document.querySelector(BOOKING_ANCHOR)?.scrollIntoView({ behavior: "smooth" });
}
