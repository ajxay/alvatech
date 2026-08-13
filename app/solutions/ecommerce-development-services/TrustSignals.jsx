"use client";

import { useTranslation } from "react-i18next";

import Image from "next/image";

const flowSteps = [
  {
    id: "store",
    icon: "/assets/images/case/landing-trust/trust-icon-store.png",
  },
  {
    id: "trust",
    icon: "/assets/images/case/landing-trust/trust-icon-people.png",
  },
  {
    id: "experience",
    icon: "/assets/images/case/landing-trust/trust-icon-shield.png",
  },
];

const bentoCards = [
  {
    id: "mobile",
    modifier: "mobile",
    image: "/assets/images/case/landing-trust/card-mobile-shopping.png",
  },
  {
    id: "uiux",
    modifier: "uiux",
    image: "/assets/images/case/landing-trust/card-ui-ux-design.png",
  },
  {
    id: "brand",
    modifier: "brand",
    image: "/assets/images/case/landing-trust/card-brand-identity.png",
  },
  {
    id: "integrations",
    modifier: "integrations",
    image: "/assets/images/case/landing-trust/card-integrations.png",
  },
  {
    id: "checkout",
    modifier: "checkout",
    image: "/assets/images/case/landing-trust/card-checkout.png",
  },
];

export default function TrustSignals() {
  const { t } = useTranslation("common");
  const L = (k) => t(`shopifyLanding.trust.${k}`);

  return (
    <section className="trust-signals">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center" style={{ justifyContent: "center" }}>{L("eyebrow")}</span>
          <h2>{L("title")}</h2>
        </div>

        <div className="trust-signals__flow reveal">
          {flowSteps.map((step, index) => (
            <div key={step.id} className="trust-signals__flow-item">
              <div className="trust-signals__step">
                <span className="trust-signals__icon">
                  <Image src={step.icon} alt="" width={40} height={40} aria-hidden="true" />
                </span>
                <span className="trust-signals__divider" aria-hidden="true" />
                <p>{L(`flow.${step.id}`)}</p>
              </div>
              {index < flowSteps.length - 1 ? (
                <span className="trust-signals__connector" aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </div>

        <h3 className="trust-signals__subhead reveal">{L("subhead")}</h3>

        <div className="trust-signals__bento reveal">
          {bentoCards.map((card) => (
            <div key={card.id} className={`trust-signals__card trust-signals__card--${card.modifier}`}>
              <div className="trust-signals__card-image">
                <Image src={card.image} alt="" fill sizes="(max-width: 640px) 90vw, (max-width: 992px) 45vw, 22vw" style={{ objectFit: "cover" }} />
              </div>
              <p className="trust-signals__card-label">{L(`cards.${card.id}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
