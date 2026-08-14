"use client";

import { useTranslation } from "react-i18next";

import Image from "next/image";

const steps = [
  { id: "discovery", num: "01", icon: "/assets/images/case/landing-process/step-1-discovery.png" },
  { id: "design", num: "02", icon: "/assets/images/case/landing-process/step-2-design.png" },
  { id: "integration", num: "03", icon: "/assets/images/case/landing-process/step-3-integration.png" },
  { id: "testing", num: "04", icon: "/assets/images/case/landing-process/step-4-testing.png" },
  { id: "launch", num: "05", icon: "/assets/images/case/landing-process/step-5-launch.png" },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h13M13 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProcessTimeline() {
  const { t } = useTranslation("common");
  const L = (k) => t(`shopifyLanding.process.${k}`);

  return (
    <section className="process-line">
      <div className="wrap">
        <div className="process-line__head reveal">
          <span className="process-line__eyebrow">{L("eyebrow")}</span>
          <h2>{L("title")}</h2>
          <p>{L("lead")}</p>
        </div>

        <ol className="process-line__steps reveal">
          {steps.map((step) => (
            <li key={step.id} className="process-line__step">
              <span className="process-line__marker">
                <span className="process-line__num">{step.num}</span>
              </span>

              <article className="process-line__card">
                <span className="process-line__icon">
                  <Image src={step.icon} alt="" width={64} height={64} aria-hidden="true" />
                </span>
                <div className="process-line__body">
                  <h3>{L(`steps.${step.id}.title`)}</h3>
                  <p>{L(`steps.${step.id}.text`)}</p>
                </div>
                {/* Decorative: the card is not a link, so this stays out of the
                    tab order rather than becoming a control that does nothing. */}
                <span className="process-line__go" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
