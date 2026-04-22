import React from "react";
import Image from "next/image";

const marketingFeatures = [
  {
    title: "Social media advertising",
    description:
      "We create ad campaigns on platforms like Facebook and Google to boost your reach.",
    image: "/assets/images/marketing/card-1.png",
    points: ["PPC / SEM", "Display Advertising", "Facebook & Google Advertising"],
  },
  {
    title: "SEO optimization",
    description:
      "Our team improves search ranking through detailed audits and expert coaching.",
    image: "/assets/images/marketing/card-2.png",
    points: ["SEO Audits", "SEO Strategy & Coaching", "Page Speed Optimization"],
  },
  {
    title: "Advanced analytics",
    description:
      "We analyze user behavior with tools like heat maps and goal tracking to refine your strategy.",
    image: "/assets/images/marketing/card-3.png",
    points: ["Goals & Targets Setup", "User Analytics", "Heat Map Analytics"],
  },
  {
    title: "Funnel optimization",
    description:
      "We conduct thorough funnel audits and UX analysis to improve your conversion rates.",
    image: "/assets/images/marketing/card-4.png",
    points: ["UX Analysis", "Funnel Audit", "CR Optimization"],
  },
  {
    title: "Paid advertising",
    description:
      "Experts manage A/B testing, retargeting campaigns, and conversion optimization.",
    image: "/assets/images/marketing/card-5.png",
    points: ["Ads A/B Testing", "CR Optimization", "Retargeting"],
  },
  {
    title: "Content marketing",
    description:
      "We develop content plans and manage your community to build a loyal audience.",
    image: "/assets/images/marketing/card-6.png",
    points: ["Content Plan", "Content Creation", "Community Management"],
  },
];

export default function Features() {
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-1 sm:gap-2 mb-4 sm:mb-6 lg:mb-8 sm:max-w-700px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 sm:h2 m-0">Next-level business services</h2>
              <p className="fs-7 sm:fs-6 text-opacity-70 m-0">
                Our comprehensive services are designed to elevate your brand,
                from targeted advertising to data-driven SEO and compelling
                content.
              </p>
            </div>
            <div
              className="features-items row g-2 lg:g-3 col-match justify-center max-w-980px mx-auto"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
            >
              {marketingFeatures.map((item, index) => (
                <div key={index} className="col-12 sm:col-6 lg:col-4">
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
                        alt={item.title}
                        className="max-w-180px w-100 h-auto"
                      />
                    </div>
                    <div className="vstack gap-1 min-h-144px">
                      <h3 className="title h5 m-0 min-h-48px d-flex items-start">
                        {item.title}
                      </h3>
                      <p className="desc fs-7 text-opacity-70 m-0 min-h-88px">
                        {item.description}
                      </p>
                    </div>
                    <div className="vstack gap-1 mt-1 mt-auto">
                      {item.points.map((point, pointIndex) => (
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
                            alt="tick"
                            width={14}
                            height={14}
                            className="flex-none"
                          />
                          <span>{point}</span>
                        </div>
                      ))}
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
