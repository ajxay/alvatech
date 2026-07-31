"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const marketingFeatures = [
  { id: "social", image: "/assets/images/marketing/card-1.png" },
  { id: "seo", image: "/assets/images/marketing/card-2.png" },
  { id: "analytics", image: "/assets/images/marketing/card-3.png" },
  { id: "funnel", image: "/assets/images/marketing/card-4.png" },
  { id: "paid", image: "/assets/images/marketing/card-5.png" },
  { id: "content", image: "/assets/images/marketing/card-6.png" },
];

export default function Features() {
  const { t } = useTranslation("common");
  const sec = "servicePages.marketing";

  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel pt-3 md:pt-4 xl:pt-5 pb-4 md:pb-6 xl:pb-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-1 sm:gap-2 mb-4 sm:mb-6 lg:mb-8 sm:max-w-700px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 sm:h2 m-0">{t(`${sec}.featuresSection.title`)}</h2>
              <p className="fs-7 sm:fs-6 text-opacity-70 m-0">
                {t(`${sec}.featuresSection.subtitle`)}
              </p>
            </div>
            <div
              className="features-items row g-2 lg:g-3 col-match justify-center max-w-980px mx-auto"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
            >
              {marketingFeatures.map((item, index) => {
                const base = `${sec}.features.${item.id}`;
                const title = t(`${base}.title`);
                return (
                  <div key={item.id} className="col-12 sm:col-6 lg:col-4">
                    <div
                      className="features-item vstack gap-2 p-2 lg:p-3 rounded-2 bg-white h-100 min-h-460px"
                      style={{ boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.06)" }}
                    >
                      <div
                        className="overflow-hidden rounded-1-5 h-170px d-flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(248, 170, 191, 0.12) 0%, rgba(255, 255, 255, 0.9) 100%)",
                        }}
                      >
                        <Image
                          src={item.image}
                          width={430}
                          height={260}
                          alt={title}
                          className="max-w-180px w-100 h-auto"
                        />
                      </div>
                      <div className="vstack gap-1 min-h-144px">
                        <h3 className="title h5 m-0 min-h-48px d-flex items-start">
                          {title}
                        </h3>
                        <p className="desc fs-7 text-opacity-70 m-0 min-h-88px">
                          {t(`${base}.description`)}
                        </p>
                      </div>
                      <div className="vstack gap-1 mt-1 mt-auto">
                        {[0, 1, 2].map((pointIndex) => (
                          <div
                            key={pointIndex}
                            className="hstack items-center gap-narrow py-1 border-top fs-7"
                            style={{ borderColor: "#ececec" }}
                          >
                            <Image
                              src={
                                index % 2 === 0
                                  ? "/assets/images/marketing/tick-red.svg"
                                  : "/assets/images/marketing/tick-green.svg"
                              }
                              alt=""
                              width={14}
                              height={14}
                              className="flex-none"
                            />
                            <span>{t(`${base}.p${pointIndex}`)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
