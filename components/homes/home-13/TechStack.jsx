"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "./TechStack.css";

const techLogos = [
  {
    id: "shopify",
    src: "/assets/images/home-13/tech/shopify.png",
    label: "Shopify",
  },
  {
    id: "shopifyPlus",
    src: "/assets/images/home-13/tech/shopify-plus.png",
    label: "Shopify Plus",
  },
  {
    id: "salesforce",
    src: "/assets/images/home-13/tech/salesforce.png",
    label: "Salesforce",
  },
  {
    id: "zoho",
    src: "/assets/images/home-13/tech/zoho-crm.png",
    label: "Zoho CRM",
  },
  {
    id: "dynamics",
    src: "/assets/images/home-13/tech/microsoft-dynamics.png",
    label: "Microsoft Dynamics",
  },
  {
    id: "woocommerce",
    src: "/assets/images/home-13/tech/woocommerce.png",
    label: "WooCommerce",
  },
  {
    id: "laravel",
    src: "/assets/images/home-13/tech/laravel.png",
    label: "Laravel",
  },
  {
    id: "nodejs",
    src: "/assets/images/home-13/tech/nodejs.png",
    label: "Node.js",
  },
  { id: "react", src: "/assets/images/home-13/tech/react.png", label: "React" },
  {
    id: "nextjs",
    src: "/assets/images/home-13/tech/nextjs.png",
    label: "Next.js",
  },
  {
    id: "aiAutomation",
    src: "/assets/images/home-13/tech/ai-automation.png",
    label: "AI Automation",
  },
  {
    id: "googleCloud",
    src: "/assets/images/home-13/tech/google-cloud.png",
    label: "Google Cloud",
  },
  { id: "aws", src: "/assets/images/home-13/tech/aws.png", label: "AWS" },
  { id: "azure", src: "/assets/images/home-13/tech/azure.png", label: "Azure" },
];

const marketingLogos = [
  {
    id: "googleAds",
    src: "/assets/images/home-13/marketing/google-ads.png",
    label: "Google Ads",
  },
  {
    id: "bingAds",
    src: "/assets/images/home-13/marketing/bing-ads.png",
    label: "Bing Ads",
  },
  {
    id: "metaAds",
    src: "/assets/images/home-13/marketing/meta-ads.png",
    label: "Meta Ads",
  },
  {
    id: "instagramAds",
    src: "/assets/images/home-13/marketing/instagram-ads.png",
    label: "Instagram Ads",
  },
  {
    id: "tiktokAds",
    src: "/assets/images/home-13/marketing/tiktok-ads.png",
    label: "Tiktok Ads",
  },
  {
    id: "linkedinAds",
    src: "/assets/images/home-13/marketing/linkedin-ads.png",
    label: "LinkedIn Ads",
  },
  {
    id: "snapchatAds",
    src: "/assets/images/home-13/marketing/snapchat-ads.png",
    label: "Snapchat Ads",
  },
];

/* Widths/heights are the Figma display sizes — each client logo is placed at
   its own optical size rather than a single normalised height. */

function LogoGrid({ items }) {
  return (
    <div className="home13-techstack__grid">
      {items.map((item) => (
        <div key={item.id} className="home13-techstack__card">
          <span className="home13-techstack__logo">
            <Image src={item.src} alt={item.label} width={97} height={84} />
          </span>
          <span className="home13-techstack__label">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function SectionHead({ eyebrow, title }) {
  return (
    <header className="home13-techstack__head">
      <p className="home13-techstack__eyebrow">{eyebrow}</p>
      <span className="home13-techstack__rule" aria-hidden="true" />
      <h2 className="home13-techstack__title">{title}</h2>
    </header>
  );
}

export default function TechStack() {
  const { t } = useTranslation("common");

  return (
    <section className="home13-techstack">
      <div className="home13-techstack__inner">
        <SectionHead
          eyebrow={t("home13.techStack.techEyebrow")}
          title={t("home13.techStack.techTitle")}
        />
        <LogoGrid items={techLogos} />

        <SectionHead
          eyebrow={t("home13.techStack.marketingEyebrow")}
          title={t("home13.techStack.marketingTitle")}
        />
        <LogoGrid items={marketingLogos} />
      </div>
    </section>
  );
}
