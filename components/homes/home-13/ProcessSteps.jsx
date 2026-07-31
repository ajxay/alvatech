"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";
import "./ProcessSteps.css";

const steps = [
  { id: "discover", image: "/assets/images/home-13/process/discover.png" },
  { id: "strategy", image: "/assets/images/home-13/process/strategy.png" },
  { id: "design", image: "/assets/images/home-13/process/design.png", showNote: true },
  { id: "develop", image: "/assets/images/home-13/process/develop.png" },
  { id: "integrate", image: "/assets/images/home-13/process/integrate.png" },
  { id: "grow", image: "/assets/images/home-13/process/grow.png" },
];

export default function ProcessSteps() {
  const { t } = useTranslation("common");
  const stackRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const stack = stackRef.current;
    if (!stack) return undefined;

    const items = gsap.utils.toArray(
      stack.querySelectorAll(".home13-process__stack-item"),
    );
    if (!items.length) return undefined;

    const mm = gsap.matchMedia();

    const setupStack = (pinOffset, scaleTo, yTo, scrubStartExtra) => {
      const triggers = [];

      items.forEach((item, index) => {
        const card = item.querySelector(".home13-process__card");
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
          const card = item.querySelector(".home13-process__card");
          if (card) gsap.set(card, { clearProps: "scale,opacity,y" });
        });
      };
    };

    mm.add("(min-width: 992px)", () => setupStack(96, 0.92, -18, 280));
    mm.add("(max-width: 991px)", () => setupStack(72, 0.94, -12, 180));

    return () => mm.revert();
  }, []);

  return (
    <section className="home13-process">
      <div className="home13-process__inner">
        <header className="home13-process__header">
          <p className="home13-process__eyebrow">{t("home13.seamless.eyebrow")}</p>
          <h2 className="home13-process__title">{t("home13.seamless.title")}</h2>
        </header>

        <div className="home13-process__stack" ref={stackRef}>
          {steps.map((step, index) => {
            const number = String(index + 1).padStart(2, "0");
            return (
              <div key={step.id} className="home13-process__stack-item">
                <article className="home13-process__card">
                  <div className="home13-process__content">
                    <div className="home13-process__meta">
                      <span className="home13-process__badge">
                        {t("home13.process.stepLabel", { number })}
                      </span>
                      <span className="home13-process__number" aria-hidden="true">
                        {number}
                      </span>
                    </div>
                    <h3 className="home13-process__card-title">
                      {t(`home13.process.steps.${step.id}.title`)}
                    </h3>
                    <p className="home13-process__card-text">
                      {t(`home13.process.steps.${step.id}.text`)}
                    </p>
                    {step.showNote ? (
                      <span className="home13-process__note">
                        <Image
                          src="/assets/images/home-13/process/clock-icon.svg"
                          alt=""
                          width={16}
                          height={16}
                          aria-hidden="true"
                        />
                        {t("home13.process.takesLess")}
                      </span>
                    ) : null}
                  </div>
                  <div className="home13-process__media">
                    <Image
                      src={step.image}
                      alt=""
                      width={512}
                      height={512}
                      className="home13-process__image"
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
