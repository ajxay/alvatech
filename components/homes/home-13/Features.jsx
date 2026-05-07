import React from "react";
import Image from "next/image";
import "./Features.css";

const cards = [
  {
    title: "Launch high-performing eCommerce stores",
    description:
      "We design and develop scalable, conversion-focused eCommerce experiences with seamless integrations, fast performance, and mobile-first UX to help you go live and grow faster.",
    image: "/assets/images/home-13/ecommerce-store.png",
    alt: "eCommerce store dashboard",
    mediaBg:
      "radial-gradient(circle at 50% 50%, rgba(220,234,206,1) 0%, rgba(243,248,239,1) 100%)",
  },
  {
    title: "Scale revenue with performance marketing",
    description:
      "Drive consistent growth through data-driven campaigns across Meta and Google, focusing on acquisition, conversion optimization, & maximizing ROAS with continuous testing and optimization.",
    image: "/assets/images/home-13/performance-marketing.png",
    alt: "Performance marketing dashboard",
    mediaBg:
      "radial-gradient(circle at 50% 50%, rgba(253,248,244,1) 0%, rgba(255,250,246,1) 100%)",
  },
  {
    title: "Streamline operations with smart systems",
    description:
      "Build and integrate CRM, ERP, and Salesforce solutions to automate workflows, centralize data, and improve efficiency across sales, marketing, and operations for long-term scalability.",
    image: "/assets/images/home-13/smart-systems.png",
    alt: "Smart systems dashboard",
    mediaBg:
      "radial-gradient(circle at 50% 50%, rgba(245,249,251,1) 0%, rgba(232,234,237,1) 100%)",
  },
];

export default function Features() {
  return (
    <section
      id="smart_features"
      className="features-thirteen section panel overflow-hidden"
    >
      <div className="features-thirteen__outer panel py-5 md:py-7 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="features-thirteen__inner panel">
            <header
              className="features-thirteen__header"
              data-anime="onview: -200; targets: >*; translateY: [32, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="features-thirteen__title m-0">
                Smart features for your business
              </h2>
              <p className="features-thirteen__subtitle m-0">
                We combine strategic consulting with advanced digital solutions to transform how modern enterprises operate and grow.
              </p>
            </header>

            <div
              className="features-thirteen__grid"
              data-uc-scrollspy="target: >*; delay: 200; cls: uc-animation-slide-bottom-medium"
            >
              {cards.map((card, idx) => (
                <article key={idx} className="features-thirteen__card">
                  <div
                    className="features-thirteen__media"
                    style={{ background: card.mediaBg,}}
                  >
                    <div className="features-thirteen__media-inner">
                      <Image
                        className="features-thirteen__image"
                        src={card.image}
                        alt={card.alt}
                        width={520}
                        height={520}
                      />
                    </div>
                  </div>
                  <div className="features-thirteen__body">
                    <h3 className="features-thirteen__card-title m-0">
                      {card.title}
                    </h3>
                    <p className="features-thirteen__card-desc m-0">
                      {card.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
