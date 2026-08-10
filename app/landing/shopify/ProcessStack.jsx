"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const steps = [
  {
    id: "discovery",
    title: "Discovery & Strategy",
    text: "We understand your business, products, customers, and goals to define the right Shopify solution.",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </>
    ),
  },
  {
    id: "design",
    title: "UI/UX Design",
    text: "We create wireframes and designs on Figma that reflect your brand and deliver a seamless shopping experience.",
    icon: (
      <path
        d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    id: "development",
    title: "Store Development",
    text: "Our developers build a fast, responsive, and scalable Shopify store with the features your business needs.",
    icon: (
      <>
        <path d="M8 6L2 12l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M16 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
  {
    id: "integrations",
    title: "Integrations & Migration",
    text: "We connect payment gateways, shipping, apps, ERP, CRM, and migrate your existing store if required.",
    icon: (
      <>
        <path d="M17 2l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M3 12V10a4 4 0 0 1 4-4h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M7 22l-4-4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M21 12v2a4 4 0 0 1-4 4H3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
  {
    id: "testing",
    title: "Testing & Quality Assurance",
    text: "Every page, feature, and checkout flow is thoroughly tested to ensure your store is ready for launch.",
    icon: (
      <>
        <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path
          d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </>
    ),
  },
  {
    id: "launch",
    title: "Launch & Ongoing Support",
    text: "We launch your store, monitor performance, and provide ongoing support as your business grows.",
    icon: (
      <>
        <path
          d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
];

export default function ProcessStack() {
  const stackRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const stack = stackRef.current;
    if (!stack) return undefined;

    const items = gsap.utils.toArray(stack.querySelectorAll(".process-stack__item"));
    if (!items.length) return undefined;

    const mm = gsap.matchMedia();

    const setupStack = (pinOffset, scaleTo, yTo, scrubStartExtra) => {
      const triggers = [];

      items.forEach((item, index) => {
        const card = item.querySelector(".process-stack__card");
        gsap.set(item, { zIndex: index + 1 });
        if (card) gsap.set(card, { clearProps: "scale,opacity,y" });

        const pin = ScrollTrigger.create({
          trigger: item,
          start: `top ${pinOffset}px`,
          endTrigger: items[items.length - 1],
          end: `top ${pinOffset}px`,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });
        triggers.push(pin);

        if (index < items.length - 1 && card) {
          const tween = gsap.to(card, {
            scale: scaleTo,
            opacity: 0.8,
            y: yTo,
            ease: "none",
            scrollTrigger: {
              trigger: items[index + 1],
              start: `top ${pinOffset + scrubStartExtra}px`,
              end: `top ${pinOffset}px`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
          triggers.push(tween.scrollTrigger);
        }
      });

      const refresh = () => ScrollTrigger.refresh();
      refresh();
      window.addEventListener("load", refresh);
      window.addEventListener("orientationchange", refresh);

      return () => {
        window.removeEventListener("load", refresh);
        window.removeEventListener("orientationchange", refresh);
        triggers.forEach((trigger) => trigger?.kill());
        items.forEach((item) => {
          const card = item.querySelector(".process-stack__card");
          if (card) gsap.set(card, { clearProps: "scale,opacity,y" });
        });
      };
    };

    mm.add("(min-width: 992px)", () => setupStack(96, 0.92, -18, 280));
    mm.add("(max-width: 991px)", () => setupStack(72, 0.94, -12, 180));

    return () => mm.revert();
  }, []);

  return (
    <section className="process-stack">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center" style={{ justifyContent: "center" }}>Our Process</span>
          <h2>Every Ecommerce Starts with a Clear Plan</h2>
          <p>
            We follow a structured ecommerce development process that keeps
            your project on schedule, your feedback involved, and your store
            ready for launch.
          </p>
        </div>

        <div className="process-stack__list" ref={stackRef}>
          {steps.map((step, index) => {
            const number = String(index + 1).padStart(2, "0");
            return (
              <div key={step.id} className="process-stack__item">
                <article className="process-stack__card">
                  <div className="process-stack__icon">
                    <svg viewBox="0 0 24 24" fill="none">{step.icon}</svg>
                  </div>
                  <div className="process-stack__content">
                    <span className="process-stack__number">{number}</span>
                    <h3 className="process-stack__title">{step.title}</h3>
                    <p className="process-stack__text">{step.text}</p>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
