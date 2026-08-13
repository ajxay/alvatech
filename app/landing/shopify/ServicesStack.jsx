"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const services = [
  {
    id: "custom-ecommerce",
    title: "Custom Ecommerce Development",
    text: "Custom ecommerce website development with modern UI/UX, mobile-first design, and fast performance, built to deliver a better shopping experience.",
    tags: ["Modern UI/UX", "Custom Tech Stack", "Mobile First Design"],
    image: "/assets/images/case/landing-services/service-1-custom-ecommerce.png",
  },
  {
    id: "shopify-design",
    title: "Shopify Store Design & Development",
    text: "Fully custom Shopify development services. We don't use templates or drag and drop shortcuts. Built for speed, engineered for revenue.",
    tags: ["Custom UI/UX", "Build From Scratch", "Mobile First Design"],
    image: "/assets/images/case/landing-services/service-2-shopify-design.png",
  },
  {
    id: "migration",
    title: "Ecommerce Store Migration To Shopify",
    text: "Migrate your ecommerce website from WooCommerce, Magento, Vendre, Norce, Centra, or custom platforms with minimal downtime.",
    tags: ["Full Data Migration", "Preserve On Page SEO", "Minimal Downtime"],
    image: "/assets/images/case/landing-services/service-3-migration.png",
  },
  {
    id: "functionality",
    title: "Functionality & Application Development",
    text: "Create fast, responsive, and conversion-focused functionality and application that deliver exceptional shopping experiences.",
    tags: ["Fully Scalable", "Lightning Fast", "Secure"],
    image: "/assets/images/case/landing-services/service-4-functionality.png",
  },
  {
    id: "integrations",
    title: "Third-Party Integration & Automation",
    text: "Integrate payment gateways, shipping providers, marketplaces, ERP, CRM, inventory systems, and marketing tools.",
    tags: ["API Integration", "Process Automation", "Sales Automation"],
    image: "/assets/images/case/landing-services/service-5-integrations.png",
  },
  {
    id: "b2b",
    title: "B2B Store Development",
    text: "Develop B2B stores with wholesale pricing, customer-specific catalogs, bulk ordering, custom pricing, account management, and other features.",
    tags: ["Data Migration", "Store Migration", "Custom Solutions"],
    image: "/assets/images/case/landing-services/service-6-b2b.png",
  },
  {
    id: "maintenance",
    title: "Website Maintenance & Support",
    text: "Keep your store secure, optimized, and continuously improving with ongoing technical support and enhancements.",
    tags: ["Minimal Downtime", "Dedicated Support", "Regular Monitoring"],
    image: "/assets/images/case/landing-services/service-7-maintenance.png",
  },
];

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function ServicesStack({ calendlyUrl }) {
  const stackRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const stack = stackRef.current;
    if (!stack) return undefined;

    const items = gsap.utils.toArray(stack.querySelectorAll(".services-stack__item"));
    if (!items.length) return undefined;

    const mm = gsap.matchMedia();

    const setupStack = (pinOffset, scaleTo, yTo, scrubStartExtra) => {
      const triggers = [];

      items.forEach((item, index) => {
        const card = item.querySelector(".services-stack__card");
        gsap.set(item, { zIndex: index + 1 });
        if (card) gsap.set(card, { clearProps: "scale,opacity,y" });

        const pin = ScrollTrigger.create({
          trigger: item,
          start: `top ${pinOffset}px`,
          endTrigger: items[items.length - 1],
          end: `top ${pinOffset}px`,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });
        triggers.push(pin);

        if (index < items.length - 1 && card) {
          const tween = gsap.to(card, {
            scale: scaleTo,
            opacity: 0.8,
            y: yTo,
            ease: "none",
            scrollTrigger: {
              trigger: items[index + 1],
              start: `top ${pinOffset + scrubStartExtra}px`,
              end: `top ${pinOffset}px`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
          triggers.push(tween.scrollTrigger);
        }
      });

      const refresh = () => ScrollTrigger.refresh();
      refresh();
      window.addEventListener("load", refresh);
      window.addEventListener("orientationchange", refresh);

      return () => {
        window.removeEventListener("load", refresh);
        window.removeEventListener("orientationchange", refresh);
        triggers.forEach((trigger) => trigger?.kill());
        items.forEach((item) => {
          const card = item.querySelector(".services-stack__card");
          if (card) gsap.set(card, { clearProps: "scale,opacity,y" });
        });
      };
    };

    mm.add("(min-width: 992px)", () => setupStack(96, 0.92, -18, 280));
    mm.add("(max-width: 991px)", () => setupStack(72, 0.94, -12, 180));

    return () => mm.revert();
  }, []);

  return (
    <section id="services" className="services-stack">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow">Our Development Services</span>
          <h2>Ecommerce Solutions That Alva Tech Offers</h2>
        </div>

        <div className="services-stack__list" ref={stackRef}>
          {services.map((service) => (
            <div key={service.id} className="services-stack__item">
              <article className="services-stack__card">
                <div className="services-stack__content">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul className="services-stack__tags">
                    {service.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary services-stack__cta"
                  >
                    Schedule Free Consultation
                    <ArrowIcon />
                  </a>
                </div>
                <div className="services-stack__media">
                  <Image
                    src={service.image}
                    alt=""
                    width={542}
                    height={396}
                    aria-hidden="true"
                  />
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
