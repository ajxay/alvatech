"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const steps = [
  {
    id: "discovery",
    title: "Discovery & Strategy",
    text: "We understand your business, products, customers, and goals to define the right Shopify solution.",
    image: "/assets/images/home-13/process/discover.png",
  },
  {
    id: "design",
    title: "UI/UX Design",
    text: "We create wireframes and designs on Figma that reflect your brand and deliver a seamless shopping experience.",
    image: "/assets/images/home-13/process/strategy.png",
  },
  {
    id: "development",
    title: "Store Development",
    text: "Our developers build a fast, responsive, and scalable Shopify store with the features your business needs.",
    image: "/assets/images/home-13/process/design.png",
  },
  {
    id: "integrations",
    title: "Integrations & Migration",
    text: "We connect payment gateways, shipping, apps, ERP, CRM, and migrate your existing store if required.",
    image: "/assets/images/home-13/process/develop.png",
  },
  {
    id: "testing",
    title: "Testing & Quality Assurance",
    text: "Every page, feature, and checkout flow is thoroughly tested to ensure your store is ready for launch.",
    image: "/assets/images/home-13/process/integrate.png",
  },
  {
    id: "launch",
    title: "Launch & Ongoing Support",
    text: "We launch your store, monitor performance, and provide ongoing support as your business grows.",
    image: "/assets/images/home-13/process/grow.png",
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
                  <div className="process-stack__content">
                    <span className="process-stack__badge">{`STEP ${number}`}</span>
                    <h3 className="process-stack__title">{step.title}</h3>
                    <p className="process-stack__text">{step.text}</p>
                    <span className="process-stack__number" aria-hidden="true">{number}</span>
                  </div>
                  <div className="process-stack__media">
                    <Image
                      src={step.image}
                      alt=""
                      width={512}
                      height={512}
                      className="process-stack__image"
                      aria-hidden="true"
                    />
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
