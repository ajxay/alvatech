"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "./Services.css";

const services = [
  // {
  //   id: "shopify",
  //   image: "/assets/images/home-13/services/shopify.png",
  //   href: "/services/custom-shopify-development-services",
  //   features: ["a", "b", "c", "d", "e"],
  // },
  {
    id: "ecommerce",
    image: "/assets/images/home-13/services/updated/ecom-development.png",
    href: "/services/custom-ecommerce-development-services",
    features: ["a", "b", "c", "d", "e"],
  },
  {
    id: "customDevelopment",
    image: "/assets/images/home-13/services/updated/Custom-Development-Alvatech.png",
    href: "/services/custom-ecommerce-development-services",
    features: ["a", "b", "c", "d", "e"],
  },

  {
    id: "crmErp",
    image: "/assets/images/home-13/services/updated/CRM-and-ERP-Solutions.png",
    href: "/services/crm-and-erp-solutions",
    features: ["a", "b", "c", "d", "e"],
  },
  {
    id: "salesforce",
    image: "/assets/images/home-13/services/updated/Salesforce-Alvatech.png",
    href: "/services/Salesforce-consulting-and-implementation",
    features: ["a", "b", "c", "d", "e"],
  },
  {
    id: "zoho",
    image: "/assets/images/home-13/services/updated/Zoho-Alvatech.png",
    href: "/services/zoho-consulting-and-implementation",
    features: ["a", "b", "c", "d", "e"],
  },
  {
    id: "marketing",
    image: "/assets/images/home-13/services/updated/Performance-marketing.png",
    href: "/services/digital-marketing-services",
    features: ["a", "b", "c", "d", "e"],
  },
];

function CheckIcon() {
  return (
    <svg
      className="home13-services__check"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8 1.33333C4.3181 1.33333 1.33333 4.3181 1.33333 8C1.33333 11.6819 4.3181 14.6667 8 14.6667Z"
        fill="none"
        stroke="#84BA41"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 8L7.33333 9.33333L10 6.66667"
        fill="none"
        stroke="#84BA41"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Services() {
  const { t } = useTranslation("common");

  return (
    <section className="home13-services">
      <div className="home13-services__inner">
        <header className="home13-header">
          <h2>{t("home13.services.title")}</h2>
          <p>{t("home13.services.subtitle")}</p>
        </header>

        <div className="home13-services__grid">
          {services.map((service) => {
            const title = t(`home13.services.items.${service.id}.title`);
            return (
              <article key={service.id} className="home13-services__card">
                <Link
                  href={service.href}
                  className="home13-services__media"
                  aria-label={title}
                >
                  <Image
                    src={service.image}
                    alt={title}
                    width={716}
                    height={478}
                  />
                </Link>
                <div className="home13-services__body">
                  <h3 className="home13-services__card-title">
                    <Link href={service.href}>{title}</Link>
                  </h3>
                  <p className="home13-services__card-text">
                    {t(`home13.services.items.${service.id}.text`)}
                  </p>
                  <ul className="home13-services__features">
                    {service.features.map((key) => (
                      <li key={key}>
                        <CheckIcon />
                        <span>
                          {t(
                            `home13.services.items.${service.id}.features.${key}`,
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="home13-services__cta">
                    <span>{t("home13.services.learnMore")}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M3 8H13M9 12L13 8L9 4"
                        fill="none"
                        stroke="#84BA41"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
