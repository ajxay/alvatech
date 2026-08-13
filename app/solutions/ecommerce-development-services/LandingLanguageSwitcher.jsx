"use client";

import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";

/**
 * EN/SV toggle for the landing page.
 *
 * The site header uses a `uc-navbar-dropdown`, which depends on the main
 * site's CSS framework that this page doesn't load — so this is a plain
 * two-button toggle styled with the landing page's own tokens. It drives the
 * same shared i18n instance, so the choice persists across the site.
 */
export default function LandingLanguageSwitcher({ className = "" }) {
  const { i18n: instance } = useTranslation("common");
  const active = instance.language?.startsWith("sv") ? "sv" : "en";

  const pick = (lng) => {
    if (lng !== active) void i18n.changeLanguage(lng);
  };

  return (
    <div className={`lang-switch ${className}`.trim()} role="group" aria-label="Language">
      {["sv", "en"].map((lng) => (
        <button
          key={lng}
          type="button"
          className={`lang-switch__opt${active === lng ? " is-active" : ""}`}
          aria-pressed={active === lng}
          onClick={() => pick(lng)}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
