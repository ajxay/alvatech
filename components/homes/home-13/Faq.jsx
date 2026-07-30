"use client";

import Accordion from "@/components/common/Accordion";
import { home13Faq } from "@/data/faq";
import { useTranslation } from "react-i18next";
import "./Faq.css";

export default function Faq({
  faqData = home13Faq,
  titleKey = "home13.faq.title",
  id = "faq",
}) {
  const { t } = useTranslation("common");

  return (
    <section id={id} className="home13-faq section panel overflow-hidden">
      <div className="section-outer panel pt-6 sm:pt-8 xl:pt-9 pb-6 xl:pb-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div
            className="section-inner panel"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <h2 className="home13-faq__title m-0 text-center">
              {t(titleKey)}
            </h2>
            <div className="home13-faq__panel panel mt-4 sm:mt-6 lg:mt-8 p-3 sm:p-4 xl:p-6 m-auto rounded-2 bg-secondary dark:bg-gray-800">
              <ul
                className="home13-faq__list gap-4 uc-accordion"
                data-uc-accordion="targets: > li;"
              >
                <Accordion faqData={faqData} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
