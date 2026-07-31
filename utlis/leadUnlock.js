const LEAD_UNLOCK_KEY = "alvatech_lead_unlocked";

export function hasLeadAccess() {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(LEAD_UNLOCK_KEY) === "1";
  } catch {
    return false;
  }
}

export function markLeadSubmitted() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(LEAD_UNLOCK_KEY, "1");
  } catch {
    // Ignore quota / private mode failures.
  }
}
