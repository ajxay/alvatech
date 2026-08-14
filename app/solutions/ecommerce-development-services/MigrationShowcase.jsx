"use client";

import { useTranslation } from "react-i18next";

import Image from "next/image";

import { BOOKING_ANCHOR, scrollToBooking } from "./scrollToBooking";

// Dimensions match each file's cropped ink box, so capping height in CSS gives
// every wordmark the same cap height rather than the same padded-canvas height.
const platformLogos = [
  { name: "Vendre", src: "/assets/images/case/landing-migration/logo-vendre.png", width: 1000, height: 296 },
  { name: "Norce", src: "/assets/images/case/landing-migration/logo-norce.png", width: 1932, height: 537 },
  { name: "Abicart", src: "/assets/images/case/landing-migration/logo-abicart.png", width: 400, height: 163 },
  { name: "Litium", src: "/assets/images/case/landing-migration/logo-litium.png", width: 296, height: 69 },
];

function DataMigrationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 12a9 9 0 11-3-6.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M21 3v5h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function SeoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
      <path d="M21 21l-5.2-5.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M7 10.5l1.8-1.8 1.7 1.7 2.6-2.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function IntegrationsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8.3 7.4L11 15.5M15.7 7.4L13 15.5M8.6 6.2h6.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <circle cx="6.5" cy="6" r="2.6" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <circle cx="17.5" cy="6" r="2.6" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <circle cx="12" cy="17.5" r="2.6" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </svg>
  );
}

function DowntimeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12.5" r="8.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
      <path d="M12 7.5v5l3.3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M9 2.5h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.5 13a7.5 7.5 0 0115 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <rect x="3" y="13" width="4" height="6" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <rect x="17" y="13" width="4" height="6" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M19 19v1a3 3 0 01-3 3h-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.5c3.1 2 5 5.8 5 9.5 0 2-.6 3.6-1.6 5.1l-1 3.2-2.4-2-2.4 2-1-3.2C7.6 15.6 7 14 7 12c0-3.7 1.9-7.5 5-9.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="12" cy="10.5" r="1.8" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M9 17.5l-1.6 3M15 17.5l1.6 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

const migrationFeatures = [
  {
    id: "data",
    Icon: DataMigrationIcon,
  },
  {
    id: "seo",
    Icon: SeoIcon,
  },
  {
    id: "integrations",
    Icon: IntegrationsIcon,
  },
  {
    id: "downtime",
    Icon: DowntimeIcon,
  },
  {
    id: "support",
    Icon: SupportIcon,
  },
];

export default function MigrationShowcase() {
  const { t } = useTranslation("common");
  const L = (k) => t(`shopifyLanding.migration.${k}`);

  return (
    <section id="migration" className="migration-show">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center" style={{ justifyContent: "center" }}>{L("eyebrow")}</span>
          <h2>{L("title")}</h2>
          <p>{L("lead")}</p>
        </div>

        <div className="migration-show__flow reveal">
          <div className="migration-show__flow-col">
            <span className="migration-show__flow-label">{L("fromLabel")}</span>
            <div className="migration-show__logos">
              {platformLogos.map((logo) => (
                <div key={logo.name} className="migration-show__logo-box">
                  <Image src={logo.src} alt={logo.name} width={logo.width} height={logo.height} />
                </div>
              ))}
            </div>
          </div>

          <div className="migration-show__arrow" aria-hidden="true">
            <span className="migration-show__arrow-line" />
            <span className="migration-show__arrow-dot" />
            <span className="migration-show__arrow-line" />
          </div>

          <div className="migration-show__flow-col migration-show__flow-col--to">
            <span className="migration-show__flow-label">{L("toLabel")}</span>
            <div className="migration-show__shopify-box">
              <Image
                src="/assets/images/case/landing-migration/icon-shopify.png"
                alt="Shopify"
                width={82}
                height={91}
              />
            </div>
          </div>
        </div>

        <div className="migration-show__features reveal">
          {migrationFeatures.map(({ id, Icon }) => (
            <div key={id} className="migration-show__feature">
              <span className="migration-show__feature-icon">
                <Icon />
              </span>
              <h4>{L(`features.${id}.title`)}</h4>
              <p>{L(`features.${id}.text`)}</p>
            </div>
          ))}
        </div>

        <div className="migration-show__cta reveal">
          <span className="migration-show__cta-icon">
            <RocketIcon />
          </span>
          <div className="migration-show__cta-copy">
            <h4>{L("ctaTitle")}</h4>
            <p>{L("ctaText")}</p>
          </div>
          <a href={BOOKING_ANCHOR} onClick={scrollToBooking} className="btn btn-primary">
            {L("ctaButton")}
          </a>
        </div>
      </div>
    </section>
  );
}
