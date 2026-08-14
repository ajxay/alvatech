"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import {
  COOKIE_SETTINGS_EVENT,
  acceptAllCookies,
  getCookieConsent,
  hasCookieConsentDecision,
  rejectOptionalCookies,
  saveCookieConsent,
} from "@/utlis/cookieConsent";
import "./CookieConsentBanner.css";

const brand = "#86BC40";

export default function CookieConsentBanner() {
  const { t } = useTranslation("common");
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    setMounted(true);

    const existing = getCookieConsent();
    if (existing) {
      setAnalytics(Boolean(existing.analytics));
      setMarketing(Boolean(existing.marketing));
    }

    if (!hasCookieConsentDecision()) {
      setVisible(true);
    }

    const openSettings = () => {
      const current = getCookieConsent();
      setAnalytics(Boolean(current?.analytics));
      setMarketing(Boolean(current?.marketing));
      setShowDetails(true);
      setVisible(true);
    };

    window.addEventListener(COOKIE_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  function handleAcceptAll() {
    acceptAllCookies();
    setVisible(false);
    setShowDetails(false);
  }

  function handleReject() {
    rejectOptionalCookies();
    setVisible(false);
    setShowDetails(false);
  }

  function handleSavePreferences() {
    saveCookieConsent({ analytics, marketing });
    setVisible(false);
    setShowDetails(false);
  }

  if (!mounted || !visible) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-live="polite"
      aria-label={t("cookies.title")}
      className="cookie-consent"
    >
      <div className="cookie-consent__panel bg-white dark:bg-gray-900 dark:text-white">
        <div className="cookie-consent__body">
          <div className="cookie-consent__copy">
            <h2 className="cookie-consent__title">{t("cookies.title")}</h2>
            <p className="cookie-consent__desc opacity-80">
              {t("cookies.description")}{" "}
              <Link href="/page-privacy" className="text-none fw-bold" style={{ color: brand }}>
                {t("cookies.privacyLink")}
              </Link>
              .
            </p>
          </div>

          {showDetails ? (
            <div className="cookie-consent__options">
              <label className="cookie-consent__option dark:bg-gray-800">
                <span className="cookie-consent__option-text">
                  <strong>{t("cookies.necessaryTitle")}</strong>
                  <span className="opacity-70">{t("cookies.necessaryDesc")}</span>
                </span>
                <input type="checkbox" checked disabled aria-label={t("cookies.necessaryTitle")} />
              </label>

              <label className="cookie-consent__option dark:bg-gray-800">
                <span className="cookie-consent__option-text">
                  <strong>{t("cookies.analyticsTitle")}</strong>
                  <span className="opacity-70">{t("cookies.analyticsDesc")}</span>
                </span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  aria-label={t("cookies.analyticsTitle")}
                />
              </label>

              <label className="cookie-consent__option dark:bg-gray-800">
                <span className="cookie-consent__option-text">
                  <strong>{t("cookies.marketingTitle")}</strong>
                  <span className="opacity-70">{t("cookies.marketingDesc")}</span>
                </span>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  aria-label={t("cookies.marketingTitle")}
                />
              </label>
            </div>
          ) : null}
        </div>

        <div
          className={`cookie-consent__actions${
            showDetails ? " cookie-consent__actions--two" : " cookie-consent__actions--three"
          }`}
        >
          {!showDetails ? (
            <button
              type="button"
              className="cookie-consent__btn cookie-consent__btn--secondary dark:text-white"
              onClick={() => setShowDetails(true)}
            >
              {t("cookies.customize")}
            </button>
          ) : null}
          <button
            type="button"
            className="cookie-consent__btn cookie-consent__btn--secondary dark:text-white"
            onClick={handleReject}
          >
            {t("cookies.reject")}
          </button>
          {showDetails ? (
            <button
              type="button"
              className="cookie-consent__btn cookie-consent__btn--primary"
              style={{ backgroundColor: brand, borderColor: brand }}
              onClick={handleSavePreferences}
            >
              {t("cookies.save")}
            </button>
          ) : (
            <button
              type="button"
              className="cookie-consent__btn cookie-consent__btn--primary"
              style={{ backgroundColor: brand, borderColor: brand }}
              onClick={handleAcceptAll}
            >
              {t("cookies.acceptAll")}
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
