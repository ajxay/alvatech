"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function DevelopmentHero() {
  const { t } = useTranslation("common");

  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="position-cover bg-secondary dark:bg-gray-800" />
      <div className="section-outer panel pt-8">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="row child-cols justify-center lg:justify-between items-center g-0">
              <div className="col-12 sm:col-10 md:col-8 lg:col-5">
                <div
                  className="panel vstack gap-2 sm:text-center lg:text-start rtl:lg:text-end py-4"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <h1 className="h2 xl:display-5 mb-1 xl:mb-2">
                    {t("servicePages.customDevelopment.hero.titleWe")}
                    <br />
                    <span style={{ color: "#84BA41" }}>
                      {t("servicePages.customDevelopment.hero.titleHighlight")}
                    </span>
                    {t("servicePages.customDevelopment.hero.titleRest")}
                  </h1>
                  <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                    {t("servicePages.customDevelopment.hero.subtitle")}
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
                  <p className="fs-7 text-dark dark:text-white text-opacity-70"></p>
                </div>
              </div>
              <div className="col-12 lg:col-6">
                <div
                  className="expand-container mt-0 lg:mt-4 ltr:ms-n2 rtl:me-n2"
                  data-anime="translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <Image
                    className="ltr:d-block rtl:d-none"
                    alt="hero-mockup"
                    src="/assets/images/template/hero-mockup-custom.png"
                    width="1492"
                    height="1250"
                  />
                  <Image
                    className="ltr:d-none rtl:d-block"
                    alt="hero-mockup-rtl"
                    src="/assets/images/template/hero-mockup-custom.png"
                    width="1492"
                    height="1250"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
