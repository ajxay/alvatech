import React from "react";
import Image from "next/image";

const developmentFeatures = [
  {
    imageSrc: "/assets/images/development/web-development.png",
    altText: "Custom Web Application Development",
    title: "Custom Web Application Development",
    description:
      "From concept to deployment, we build fully customized web applications using the MERN stack—designed to match your workflows, users, and business goals.",
    linkText: "Let's build",
    icon: "unicon-cloud-download",
    reverseOrder: false,
  },
  {
    imageSrc: "/assets/images/development/ui-ux.png",
    altText: "UI/UX Design & Frontend Development",
    title: "UI/UX Design & Frontend Development",
    description:
      "We design intuitive, high-performing interfaces using React to ensure seamless user experiences that drive engagement and conversions.",
    linkText: "Let's design",
    icon: "unicon-course",
    reverseOrder: true,
  },
  {
    imageSrc: "/assets/images/development/api-development.png",
    altText: "API Development & System Integration",
    title: "API Development & System Integration",
    description:
      "We build secure, scalable APIs and integrate third-party services to ensure your application works seamlessly across platforms.",
    linkText: "Let's integrate",
    icon: "unicon-volume-block-storage",
    reverseOrder: false,
  },
  {
    imageSrc: "/assets/images/development/migration.png",
    altText: "Application Migration & Modernization",
    title: "Application Migration & Modernization",
    description:
      "Still using outdated systems? We migrate your legacy applications to modern MERN stack architecture with zero downtime and improved performance.",
    linkText: "Let's upgrade",
    icon: "unicon-model",
    reverseOrder: true,
  },
];

export default function DevelopmentService() {
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 xl:h1 m-0">
                We build, scale, and optimize your digital products
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                From idea to deployment—we create robust, scalable applications
                tailored to your business goals.
              </p>
            </div>
            <div
              className="row child-cols-12 g-6 md:g-8 xl:g-6"
              data-uc-scrollspy="target: >*; delay: 500; cls: uc-animation-slide-bottom-medium"
            >
              {developmentFeatures.map((elm, i) => (
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
