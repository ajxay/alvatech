"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function SalesforceHero() {
  const { t } = useTranslation("common");

  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div
        className="position-cover"
        style={{
          background:
            "linear-gradient(180deg, rgba(132, 186, 65, 0.35) 0%, rgba(132, 186, 65, 0.10) 45%, #ffffff 100%)",
        }}
      />
      <div className="section-outer panel pb-4 md:pb-6 xl:pb-8 salesforce-hero-outer">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="row child-cols justify-center lg:justify-between items-center g-2 lg:g-4">
              <div className="col-12 sm:col-10 md:col-8 lg:col-6">
                <div
                  className="panel vstack gap-2 sm:text-center lg:text-start rtl:lg:text-end py-4"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <h1 className="h2 xl:display-5 mb-1 xl:mb-2 text-gray-900">
                    {t("servicePages.salesforce.hero.title")}
                    <span style={{ color: "#84BA41" }}>
                      {t("servicePages.salesforce.hero.titleHighlight")}
                    </span>
                  </h1>
                  <p className="fs-6 lg:fs-5 text-dark text-opacity-70">
                    {t("servicePages.salesforce.hero.subtitle")}
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="row child-cols g-1 mt-1 sm:mt-2"
                  >
                    <div className="col-12 sm:col-auto">
                      <a
                        href="https://calendly.com/nikhil-k-alvatech/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-hero__button"
                      >
                        {t("pages.about.heroButton")}
                      </a>
                    </div>
                  </form>
                  <p className="fs-7 text-dark text-opacity-70 mt-1"></p>
                </div>
              </div>
              <div className="col-12 lg:col-6">
                <div
                  className="panel mt-2 lg:mt-0 ltr:lg:ms-2 rtl:lg:me-2"
                  data-anime="translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <Image
                    className="w-100 h-auto d-block mx-auto"
                    alt="salesforce-hero"
                    src="/assets/images/salesforce/hero.png"
                    width={1428}
                    height={1142}
                    style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .salesforce-hero-outer {
          padding-top: calc(var(--uc-nav-height, 70px) + 24px);
        }
        @media (min-width: 992px) {
          .salesforce-hero-outer {
            padding-top: calc(var(--uc-nav-height, 180px) + 14px);
          }
        }
      `}</style>
    </div>
  );
}
