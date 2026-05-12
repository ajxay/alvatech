"use client";

import Accordion from "@/components/common/Accordion";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Faq({ faqData, titleKey = "faq.defaultTitle" }) {
  const { t } = useTranslation("common");

  return (
    <div id="faq" className="section panel overflow-hidden">
      <div className="section-outer panel pb-6 xl:pb-9">
        <div className="container max-w-lg">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div
              className="panel"
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <h2 className="h4 sm:h3 lg:h2 m-0 text-center">
                {t(titleKey)}
              </h2>
              <div className="panel mt-4 sm:mt-6 lg:mt-8 p-3 sm:p-4 xl:p-6 lg:max-w-750px xl:w-auto m-auto rounded-2 bg-secondary dark:bg-gray-800">
                <ul
                  className="gap-4 uc-accordion"
                  data-uc-accordion="targets: > li;"
                >
                  <Accordion faqData={faqData} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
