import React from "react";
import Image from "next/image";

const erpFeatures = [
  {
    imageSrc: "/assets/images/services/erp/cloud-based-erp.png",
    altText: "Cloud-Based ERP",
    title: "Cloud-Based ERP",
    description:
      "Access Business Central anytime, anywhere with secure cloud hosting, ensuring flexibility, scalability, and real-time collaboration for global teams.",
    linkText: "Go cloud",
    icon: "unicon-cloud-download",
    reverseOrder: false,
  },
  {
    imageSrc: "/assets/images/services/erp/global-operations.png",
    altText: "Global Operations",
    title: "Global Operations",
    description:
      "Operate seamlessly across regions with multi-currency, multi-language, and localization support for global financial and business management.",
    linkText: "Go global",
    icon: "unicon-earth",
    reverseOrder: true,
  },
  {
    imageSrc: "/assets/images/services/erp/smart-analytics.png",
    altText: "Smart Analytics",
    title: "Smart Analytics",
    description:
      "Empower teams with data-driven insights through interactive dashboards and reports that enable quick, informed decision-making.",
    linkText: "See insights",
    icon: "unicon-chart-line-data",
    reverseOrder: false,
  },
  {
    imageSrc: "/assets/images/services/erp/integration.png",
    altText: "Integration with Microsoft products",
    title: "Integration with Microsoft products",
    description:
      "Seamlessly connect with Microsoft 365, Power BI, and Teams to enhance collaboration and unify data across all applications.",
    linkText: "Explore integrations",
    icon: "unicon-volume-block-storage",
    reverseOrder: true,
  },
  {
    imageSrc: "/assets/images/services/erp/custom-workflows.png",
    altText: "Custom Workflows",
    title: "Custom Workflows",
    description:
      "Reduce manual effort by automating repetitive processes, improving accuracy, and allowing teams to focus on strategic initiatives.",
    linkText: "Automate now",
    icon: "unicon-flow-stream",
    reverseOrder: false,
  },
];

export default function ErpService() {
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
                Built for modern enterprises
              </span>
              <h2 className="h3 lg:h2 xl:h1 m-0">
                Everything your business needs in one place
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                From finance and supply chain to analytics and automation—our
                ERP unifies every workflow so your teams can do their best
                work.
              </p>
            </div>
            <div
              className="row child-cols-12 g-6 md:g-8 xl:g-6"
              data-uc-scrollspy="target: >*; delay: 500; cls: uc-animation-slide-bottom-medium"
            >
              {erpFeatures.map((elm, i) => (
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
