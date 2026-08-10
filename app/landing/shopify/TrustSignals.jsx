"use client";

import Image from "next/image";

const flowSteps = [
  {
    id: "store",
    icon: "/assets/images/case/landing-trust/trust-icon-store.png",
    text: "People don't buy because you have a store",
  },
  {
    id: "trust",
    icon: "/assets/images/case/landing-trust/trust-icon-people.png",
    text: "People buy because they trust you.",
  },
  {
    id: "experience",
    icon: "/assets/images/case/landing-trust/trust-icon-shield.png",
    text: "Trust comes from the buying experience you provide",
  },
];

const bentoCards = [
  {
    id: "mobile",
    modifier: "mobile",
    image: "/assets/images/case/landing-trust/card-mobile-shopping.png",
    label: "Mobile Shopping Experience",
  },
  {
    id: "uiux",
    modifier: "uiux",
    image: "/assets/images/case/landing-trust/card-ui-ux-design.png",
    label: "Premium UI/UX Design",
  },
  {
    id: "brand",
    modifier: "brand",
    image: "/assets/images/case/landing-trust/card-brand-identity.png",
    label: "Consistent Brand Identity",
  },
  {
    id: "integrations",
    modifier: "integrations",
    image: "/assets/images/case/landing-trust/card-integrations.png",
    label: "Third-Party Integrations",
  },
  {
    id: "checkout",
    modifier: "checkout",
    image: "/assets/images/case/landing-trust/card-checkout.png",
    label: "Frictionless Checkout",
  },
];

export default function TrustSignals() {
  return (
    <section className="trust-signals">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center" style={{ justifyContent: "center" }}>Why Us</span>
          <h2>We Don&apos;t Just Build Ecommerce Stores. We Design Buying Decisions.</h2>
        </div>

        <div className="trust-signals__flow reveal">
          {flowSteps.map((step, index) => (
            <div key={step.id} className="trust-signals__flow-item">
              <div className="trust-signals__step">
                <span className="trust-signals__icon">
                  <Image src={step.icon} alt="" width={40} height={40} aria-hidden="true" />
                </span>
                <span className="trust-signals__divider" aria-hidden="true" />
                <p>{step.text}</p>
              </div>
              {index < flowSteps.length - 1 ? (
                <span className="trust-signals__connector" aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </div>

        <h3 className="trust-signals__subhead reveal">We Develop Those Trust Signals</h3>

        <div className="trust-signals__bento reveal">
          {bentoCards.map((card) => (
            <div key={card.id} className={`trust-signals__card trust-signals__card--${card.modifier}`}>
              <div className="trust-signals__card-image">
                <Image src={card.image} alt="" fill sizes="(max-width: 640px) 90vw, (max-width: 992px) 45vw, 22vw" style={{ objectFit: "cover" }} />
              </div>
              <p className="trust-signals__card-label">{card.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
