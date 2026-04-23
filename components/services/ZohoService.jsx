import React from "react";
import Image from "next/image";

const zohoFeatures = [
  {
    imageSrc: "/assets/images/template/home-four-feature-01.png",
    altText: "Lead Management",
    title: "Lead Management",
    description:
      "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
    linkText: "Explore leads",
    icon: "unicon-user-multiple",
    reverseOrder: false,
  },
  {
    imageSrc: "/assets/images/template/home-four-feature-02.png",
    altText: "Workflow Automation",
    title: "Workflow Automation",
    description:
      "Every follow-up or field update requires significant manual work. Automate these repetitive tasks with intelligent workflows so your team moves faster.",
    linkText: "Automate now",
    icon: "unicon-flow-stream",
    reverseOrder: true,
  },
  {
    imageSrc: "/assets/images/template/home-four-feature-03.png",
    altText: "Sales Process Builder",
    title: "Sales Process Builder",
    description:
      "Bring your offline sales processes into your CRM and make sure every rep follows the same playbook at every stage of the deal.",
    linkText: "Build the process",
    icon: "unicon-model",
    reverseOrder: false,
  },
  {
    imageSrc: "/assets/images/template/home-four-feature-04.png",
    altText: "Analytics & Forecasting",
    title: "Analytics & Forecasting",
    description:
      "Create dashboards, analyze trends, stay on top of your KPIs, and predict future sales with accurate forecasting tools.",
    linkText: "See analytics",
    icon: "unicon-chart-line-data",
    reverseOrder: true,
  },
];

export default function ZohoService() {
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-700px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span
                className="fw-bold py-narrow px-2 border rounded-pill"
                style={{ color: "#84BA41" }}
              >
                Features that make selling easier
              </span>
              <h2 className="h3 lg:h2 xl:h1 m-0">
                Hyper-manage operations with rich analytics
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                Zoho CRM offers everything you need to increase leads,
                accelerate sales, and measure sales performance across every
                channel.
              </p>
            </div>
            <div
              className="row child-cols-12 g-6 md:g-8 xl:g-6"
              data-uc-scrollspy="target: >*; delay: 500; cls: uc-animation-slide-bottom-medium"
            >
              {zohoFeatures.map((elm, i) => (
                <div key={i}>
                  <div className="feature-item panel">
                    <div className="row child-cols items-center justify-between g-2 md:g-4">
                      <div
                        className={
                          elm.reverseOrder
                            ? "col-12 md:col-6 lg:col-5 md:order-2"
                            : "col-12 md:col-6 lg:col-5"
                        }
                      >
                        <div className="panel overflow-hidden rounded-1-5 lg:rounded-2">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <Image
                              className="media-cover image"
                              src={elm.imageSrc}
                              width={1400}
                              height={1412}
                              alt={elm.altText}
                            />
                          </figure>
                        </div>
                      </div>
                      <div
                        className={
                          elm.reverseOrder
                            ? "col-12 md:col-6 lg:col-6 md:order-1"
                            : "col-12 md:col-6 lg:col-6"
                        }
                      >
                        <div className="panel">
                          <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                            <div>
                              <div className="panel vstack gap-2">
                                <span
                                  className="cstack w-48px h-48px rounded-1-5 mb-2 d-none lg:d-inline-flex"
                                  style={{
                                    backgroundColor: "#84BA41",
                                    color: "#ffffff",
                                  }}
                                >
                                  <i className={`icon-1 ${elm.icon}`} />
                                </span>
                                <h3 className="h4 sm:h3 xl:h2 m-0">
                                  {elm.title}
                                </h3>
                                <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                  {elm.description}
                                </p>
                                <a
                                  href="#"
                                  className="uc-link dark:text-secondary fw-bold hstack gap-narrow sm:mt-1 lg:mt-2"
                                  style={{ color: "#84BA41" }}
                                >
                                  <span>{elm.linkText}</span>
                                  <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
