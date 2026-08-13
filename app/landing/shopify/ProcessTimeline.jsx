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
            <li key={step.num} className="process-line__step">
              <span className="process-line__icon">
                <Image src={step.icon} alt="" width={48} height={48} aria-hidden="true" />
              </span>
              <span className="process-line__num">{step.num}</span>
              <span className="process-line__label">{L(`steps.${step.id}`)}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
