"use client";

import Accordion from "@/components/common/Accordion";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Faq({
  faqData,
  titleKey = "faq.defaultTitle",
  introKey = "servicePages.marketing.faqIntro",
}) {
  const { t } = useTranslation("common");

  return (
    <div id="faq" className="faq section panel overflow-hidden mt-8">
      <div className="section-outer panel">
        <div className="container max-w-md">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div className="panel vstack gap-6 xl:gap-8">
              <div className="vstack gap-2 text-center">
                <span className="fw-bold " style={{ color: "#84BA41" }}>
                  {/* FAQ */}
                </span>
                <h2 className="h4 sm:h3 xl:h2 m-0 text-center">
                  {t(titleKey)}
                </h2>
                <p className="fs-6 xl:fs-5">
                  {t(introKey)}
                </p>
              </div>
              <div className="panel">
                <ul
                  className="uc-accordion-divider gap-5 uc-accordion"
                  data-uc-accordion="targets: > li;"
                  style={{ "--divider-gap": "40px" }}
                >
                  <Accordion faqData={faqData} parentClass="panel" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
