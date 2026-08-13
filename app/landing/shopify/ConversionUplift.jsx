"use client";

import { useTranslation } from "react-i18next";

import { BOOKING_ANCHOR, scrollToBooking } from "./scrollToBooking";

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function ConversionUplift() {
  const { t } = useTranslation("common");
  const L = (k) => t(`shopifyLanding.uplift.${k}`);

  return (
    <section className="uplift">
      <div className="wrap uplift__grid">
        <div className="uplift__copy reveal">
          <span className="eyebrow">{L("eyebrow")}</span>
          <h2>{L("title")}</h2>
          <p>{L("lead")}</p>
          <a
            href={BOOKING_ANCHOR}
            onClick={scrollToBooking}
            className="btn btn-primary uplift__cta"
          >
            {L("cta")}
            <ArrowIcon />
          </a>
        </div>

        <div className="uplift__chart reveal">
          <div className="uplift__figure">
            <span className="uplift__arrow" aria-hidden="true">↑</span>
            <span className="uplift__value">22%</span>
            <span className="uplift__caption">{L("caption")}</span>
          </div>

          <div className="uplift__bars">
            <div className="uplift__bar">
              <span className="uplift__bar-label">{L("before")}</span>
              <div className="uplift__track">
                <span className="uplift__fill uplift__fill--before" style={{ width: "45%" }} />
              </div>
            </div>
            <div className="uplift__bar">
              <span className="uplift__bar-label">{L("after")}</span>
              <div className="uplift__track">
                <span className="uplift__fill uplift__fill--after" style={{ width: "59%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
