"use client";
import Link from "next/link";
import Image from "next/image";

export default function DevelopmentHero() {
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
                    We
                    <br />
                    <span style={{ color: "#84BA41" }}>
                      build, launch, and scale{" "}
                    </span>
                    your custom web applications
                  </h1>
                  <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                    From scalable MERN stack applications to high-performance
                    systems—we help you build, optimize, and grow your digital
                    products with precision.
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="row child-cols g-1 mt-1 sm:mt-2"
                  >
                    <div>
                      <div className="form-icon-group inline-block">
                        <input
                          type="email"
                          className="form-control rounded-default h-48px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                          placeholder="Your email.."
                          required
                        />
                        <span className="form-icon text-gray dark:text-gray-300">
                          <i className="unicon-email icon-1" />
                        </span>
                      </div>
                    </div>
                    <div className="col-12 sm:col-auto">
                      <Link
                        href={`/page-pricing`}
                        className="btn btn-md btn-primary rounded-default h-48px w-100 lg:min-w-150px text-white"
                        style={{
                          backgroundColor: "#84BA41",
                          borderColor: "#84BA41",
                        }}
                      >
                        <span className="d-none md:d-block">Hear from us</span>
                        <span className="d-block md:d-none">Hear from us</span>
                      </Link>
                    </div>
                  </form>
                  <p className="fs-7 text-dark dark:text-white text-opacity-70">
                    We care about your data in our{" "}
                    <Link
                      href={`/page-privacy`}
                      className="uc-link text-underline dark:text-secondary"
                      style={{ color: "#84BA41" }}
                    >
                      privacy policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
              <div className="col-12 lg:col-6">
                <div
                  className="expand-container mt-0 lg:mt-4 ltr:ms-n2 rtl:me-n2"
                  data-anime="translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <Image
                    className="ltr:d-block rtl:d-none"
                    alt="development-hero-mockup"
                    src="/assets/images/services/custom/hero-custom-dev.png"
                    width="1492"
                    height="1250"
                  />
                  <Image
                    className="ltr:d-none rtl:d-block"
                    alt="development-hero-mockup-rtl"
                    src="/assets/images/services/custom/hero-custom-dev.png"
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
