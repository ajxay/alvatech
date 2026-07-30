"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "./AboutTechStack.css";

const techLogos = [
  { id: "shopify", src: "/assets/images/about/tech/shopify.png", label: "Shopify" },
  { id: "magento", src: "/assets/images/about/tech/magento.png", label: "Magento" },
  { id: "sap", src: "/assets/images/about/tech/sap.png", label: "SAP" },
  { id: "zoho", src: "/assets/images/about/tech/zoho-crm.png", label: "Zoho CRM" },
  { id: "dynamics", src: "/assets/images/about/tech/microsoft-dynamics.png", label: "Microsoft Dynamics" },
  { id: "woocommerce", src: "/assets/images/about/tech/woocommerce.png", label: "WooCommerce" },
  { id: "mailchimp", src: "/assets/images/about/tech/mailchimp.png", label: "Mailchimp" },
  { id: "netsuite", src: "/assets/images/about/tech/netsuite.png", label: "NetSuite" },
  { id: "quickbooks", src: "/assets/images/about/tech/quickbooks.png", label: "QuickBooks" },
  { id: "hubspot", src: "/assets/images/about/tech/hubspot.png", label: "Hubspot" },
  { id: "stripe", src: "/assets/images/about/tech/stripe.png", label: "Stripe" },
  { id: "googleWorkspace", src: "/assets/images/about/tech/google-workspace.png", label: "Google Workspace" },
  { id: "aws", src: "/assets/images/about/tech/aws.png", label: "AWS" },
  { id: "azure", src: "/assets/images/about/tech/azure.png", label: "Azure" },
];

export default function AboutTechStack() {
  const { t } = useTranslation("common");

  return (
    <div
      id="about_tech_stack"
      className="about-tech-stack section panel overflow-hidden"
    >
      <div className="about-tech-stack__inner">
        <header
          className="about-tech-stack__head"
          data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
        >
          <p className="about-tech-stack__eyebrow">
            {t("pages.about.techStack.eyebrow")}
          </p>
          <span className="about-tech-stack__rule" aria-hidden="true" />
          <h2 className="about-tech-stack__title">
            {t("pages.about.techStack.title")}
          </h2>
        </header>

        <div
          className="about-tech-stack__grid"
          data-anime="onview: -100; targets: >*; translateY: [24, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(60, {start: 200});"
        >
          {techLogos.map((logo) => (
            <div key={logo.id} className="about-tech-stack__card">
              <span className="about-tech-stack__logo">
                <Image src={logo.src} alt={logo.label} width={97} height={84} />
              </span>
              <span className="about-tech-stack__label">{logo.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
