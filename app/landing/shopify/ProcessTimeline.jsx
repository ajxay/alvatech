"use client";

import Image from "next/image";

const steps = [
  { num: "01", label: "Discovery & Strategy", icon: "/assets/images/case/landing-process/step-1-discovery.png" },
  { num: "02", label: "Design & Development", icon: "/assets/images/case/landing-process/step-2-design.png" },
  { num: "03", label: "Integration & Migration", icon: "/assets/images/case/landing-process/step-3-integration.png" },
  { num: "04", label: "Testing & QC", icon: "/assets/images/case/landing-process/step-4-testing.png" },
  { num: "05", label: "Launch & Support", icon: "/assets/images/case/landing-process/step-5-launch.png" },
];

export default function ProcessTimeline() {
  return (
    <section className="process-line">
      <div className="wrap">
        <div className="process-line__head reveal">
          <span className="process-line__eyebrow">Our Process</span>
          <h2>Every Ecommerce Starts with a Clear Plan</h2>
          <p>
            We follow a structured ecommerce development process that keeps your
            project on schedule, your feedback involved, and your store ready
            for launch.
          </p>
        </div>

        <ol className="process-line__steps reveal">
          {steps.map((step) => (
            <li key={step.num} className="process-line__step">
              <span className="process-line__icon">
                <Image src={step.icon} alt="" width={48} height={48} aria-hidden="true" />
              </span>
              <span className="process-line__num">{step.num}</span>
              <span className="process-line__label">{step.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
