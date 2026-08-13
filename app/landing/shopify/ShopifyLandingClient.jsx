"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import ServicesStack from "./ServicesStack";
import TrustSignals from "./TrustSignals";
import MigrationShowcase from "./MigrationShowcase";
import ProcessTimeline from "./ProcessTimeline";
import ConversionUplift from "./ConversionUplift";
import WebsiteShowcase from "./WebsiteShowcase";
import LandingCaseStudies from "./LandingCaseStudies";
import "./shopify-landing.css";

const CALENDLY_URL = "https://calendly.com/nikhil-k-alvatech/30min";

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

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".shopify-lp .reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useStickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

function useCounters() {
  useEffect(() => {
    const counters = document.querySelectorAll(".shopify-lp .result b");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseFloat(el.dataset.target);
          const prefix = el.dataset.prefix || "";
          const suffix = el.dataset.suffix || "";
          let cur = 0;
          const step = Math.max(target / 40, 0.5);
          const timer = setInterval(() => {
            cur += step;
            if (cur >= target) {
              cur = target;
              clearInterval(timer);
            }
            el.textContent = prefix + Math.round(cur) + suffix;
          }, 25);
          io.unobserve(el);
        });
      },
      { threshold: 0.4 },
    );
    counters.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);
}

const tickerItems = [
  "Custom Ecommerce Solutions",
  "Mobile - First Development",
  "UI/UX Design",
  "Timely Delivery",
  "Custom Features",
  "Post-Launch Support",
];

const faqs = [
  {
    q: "What is custom ecommerce development?",
    a: "Custom ecommerce development means building an online store specifically around your business model, customer journey, products and operational requirements. Unlike a standard template-based store, a custom ecommerce solution can include tailored features, integrations, workflows, APIs, product logic and user experiences. Alva Tech develops scalable, high-performance ecommerce solutions designed to support long-term business growth.",
  },
  {
    q: "How much does custom ecommerce development cost?",
    a: "The cost of custom ecommerce development depends on factors such as the number of products, required features, integrations, design complexity, payment and shipping systems, and whether you need a custom backend or API integrations. Alva Tech first evaluates your business requirements and technical needs before recommending the most suitable ecommerce architecture and development approach.",
  },
  {
    q: "How long does it take to develop a custom ecommerce website?",
    a: "A custom ecommerce website can take anywhere from several weeks to several months, depending on its complexity. A relatively straightforward store can be launched faster, while projects involving custom functionality, ERP/CRM integrations, marketplaces, advanced product configurations or complex workflows require more development time. Alva Tech follows a structured process covering discovery, design, development, testing and launch.",
  },
  {
    q: "Can you integrate a custom ecommerce website with ERP, CRM, payment and shipping systems?",
    a: "Yes. Custom ecommerce websites can be integrated with ERP, CRM, payment gateways, shipping platforms, marketing automation tools and other business systems. Alva Tech builds API-based and custom integrations to connect ecommerce operations with systems such as CRM, ERP, payment, logistics and marketing platforms, helping businesses reduce manual work and create connected workflows.",
  },
  {
    q: "What is custom Shopify development?",
    a: "Custom Shopify development involves creating and modifying a Shopify store beyond standard themes and apps. This can include custom Shopify themes, sections, features, integrations, product functionality, checkout-related solutions, APIs and automated workflows. Alva Tech helps businesses build and scale Shopify stores with conversion-focused experiences, optimized storefronts and business-specific integrations.",
  },
  {
    q: "Can you build a fully custom Shopify store?",
    a: "Yes. Shopify can be customized extensively to create a branded and highly optimized ecommerce experience. Alva Tech can develop custom Shopify storefronts, tailor the user experience, build custom functionality, integrate third-party systems and optimize the store for performance, mobile users and conversions.",
  },
  {
    q: "Can you integrate Shopify with ERP, CRM, payment and shipping systems?",
    a: "Yes. Shopify can be connected with a wide range of business and ecommerce systems. Alva Tech can integrate Shopify with ERP and CRM platforms, payment providers, shipping and logistics systems, marketing tools and other third-party applications. The goal is to synchronize relevant data and automate workflows across your ecommerce ecosystem.",
  },
  {
    q: "Is Shopify suitable for a growing or large ecommerce business?",
    a: "Yes. Shopify can support growing ecommerce businesses, while Shopify Plus provides additional capabilities for businesses with more complex requirements, higher volumes and multiple markets. The right Shopify setup depends on your catalogue, traffic, integrations, markets, workflows and growth plans. Alva Tech helps businesses select and build an architecture that can scale with their operations.",
  },
  {
    q: "Can you migrate my existing ecommerce website to Shopify?",
    a: "Yes. Alva Tech can help businesses migrate from existing ecommerce platforms to Shopify. This can include migrations from platforms such as WooCommerce, Magento, Vendre, Norce, Kodmyran, Centra and Abicart. The migration process can cover products, customer data, order history, content, SEO elements, redirects and integrations, depending on the source platform and requirements.",
  },
  {
    q: "Will I lose my SEO rankings when migrating from another ecommerce platform to Shopify?",
    a: "A properly planned Shopify migration should be designed to preserve your existing SEO value as much as possible. Alva Tech can plan URL redirects, metadata migration, sitemap handling and other SEO-critical elements as part of the migration process. The objective is to transition to Shopify without unnecessarily disrupting your organic search visibility.",
  },
  {
    q: "What ecommerce platform is best for my business: Shopify or custom development?",
    a: "The right platform depends on your business requirements. Shopify is often a strong choice for businesses that want a scalable, managed ecommerce platform with a broad ecosystem of integrations. Custom development may be more suitable when your business requires highly specialized workflows, unique functionality, custom architecture or complex integrations. Alva Tech can assess your requirements and recommend Shopify, Shopify Plus or a custom ecommerce solution based on your specific needs.",
  },
  {
    q: "How can Alva Tech help improve my ecommerce website's performance and conversions?",
    a: "Alva Tech combines ecommerce development, mobile-first UX, performance optimization, integrations and conversion-focused design to help businesses build better online stores. The approach focuses on creating fast, scalable and easy-to-use ecommerce experiences while connecting the store with the systems needed to operate and grow the business.",
  },
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function ShopifyLandingClient() {
  const scrolled = useStickyHeader();
  useReveal();
  useCounters();

  const [sessions, setSessions] = useState(579000);
  const [conv, setConv] = useState(4.2);
  const [aov, setAov] = useState(50);
  const [openFaq, setOpenFaq] = useState(null);

  const lift = Math.round(sessions * (conv / 100) * aov * 0.2);
  const fmt = (n) => Number(n).toLocaleString("en-US");

  return (
    <div className="shopify-lp">
      <header id="shopifyLpHeader" className={scrolled ? "scrolled" : ""}>
        <div className="wrap">
          <nav>
            <div className="logo">
              <Image src="/assets/images/common/main-logo.svg" alt="Alvatech" width={130} height={26} />
            </div>
            <div className="nav-links">
              <a onClick={() => scrollToId("why")}>Why Us</a>
              <a onClick={() => scrollToId("services")}>Services</a>
              <a onClick={() => scrollToId("migration")}>Migration</a>
              <a onClick={() => scrollToId("roi")}>ROI</a>
              <a onClick={() => scrollToId("cases")}>Case Studies</a>
              <a onClick={() => scrollToId("faq")}>FAQ</a>
            </div>
            <div className="nav-cta">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                Get Free Consultation
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-band">
          <div className="hero-collage" aria-hidden="true">
            <div className="hero-collage__blob hero-collage__blob--1">
              <Image src="/assets/images/case/landing-hero/hero-blob-1.png" alt="" fill sizes="70vw" />
            </div>
            <div className="hero-collage__blob hero-collage__blob--2">
              <Image src="/assets/images/case/landing-hero/hero-blob-2.png" alt="" fill sizes="70vw" />
            </div>
            {[
              { src: "hero-phone-4.png", mod: "p4" },
              { src: "hero-phone-3.png", mod: "p3" },
              { src: "hero-phone-2.png", mod: "p2" },
              { src: "hero-phone-6.png", mod: "p6" },
              { src: "hero-phone-5.png", mod: "p5" },
              { src: "hero-phone-7.png", mod: "p7" },
            ].map((phone) => (
              <div key={phone.mod} className={`hero-collage__phone hero-collage__phone--${phone.mod}`}>
                <Image src={`/assets/images/case/landing-hero/${phone.src}`} alt="" fill sizes="30vw" />
              </div>
            ))}
          </div>
          <div className="wrap">
            <div className="hero-copy">
              <span className="eyebrow">Ecommerce Store Development Services</span>
              <h1>
                Modern Commerce Stores Tailored for Your Business.
              </h1>
              <p className="lead">
                We design and build Ecommerce stores around customer psychology,
                so every page turns a visitor into a buyer, not just a browser.
              </p>
              <div className="hero-ctas">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Schedule a Free Consultation
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* RESULTS */}
      <section className="stats">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow">What Our Numbers Say</span>
            <h2>This Is What Our Experience Looks Like</h2>
          </div>
          <div className="results reveal">
            <div className="result"><b data-target="250" data-suffix="+">0</b><span>Ecommerce Websites Delivered</span></div>
            <div className="result"><b data-target="50" data-suffix="+">0</b><span>Ecommerce Store Migrated</span></div>
            <div className="result"><b data-target="100" data-suffix="+">0</b><span>Custom Shopify Stores Delivered</span></div>
            <div className="result"><b data-target="2" data-prefix="<" data-suffix="s">0</b><span>Average Page Load Time</span></div>
            <div className="result"><b data-target="22" data-prefix="↑" data-suffix="%">0</b><span>Increase in Conversion Rate</span></div>
          </div>
        </div>
      </section>

      {/* SCROLLING CAPABILITIES BAND */}
      <div className="ticker" aria-hidden="true">
        {/* Four copies so the track always outruns the viewport before the
            animation loops back to its start. */}
        <div className="ticker__track">
          {Array.from({ length: 4 }).flatMap((_, copy) =>
            tickerItems.map((label) => (
              <span key={`${copy}-${label}`} className="ticker__item">
                {label}
                <span className="ticker__dot" />
              </span>
            )),
          )}
        </div>
      </div>

      {/* WHY CHOOSE */}
      <section id="why" className="about">
        <div className="wrap about__grid">
          <div className="about__media reveal">
            <Image
              src="/assets/images/case/landing-about/about-showcase.png"
              alt="Mattress storefront and product-finder screens built by Alva Tech"
              width={428}
              height={524}
            />
          </div>
          <div className="about__copy reveal">
            <span className="eyebrow">About Alva Tech</span>
            <h2>Custom Ecommerce Solutions for Ambitious Brands.</h2>
            <p>
              Our Ecommerce store development services are designed to help
              businesses launch, grow, and scale online. Whether you&apos;re
              starting a new store or migrating from another platform. Our
              Ecommerce development services include custom theme &amp; store
              development, migrating commerce store to Shopify, theme and app
              development etc. Every store is built with clean code, mobile
              first design, SEO best practices, and a smooth shopping
              experience.
            </p>
            <p>
              We&apos;ve delivered Ecommerce websites for businesses across
              multiple industries, helping brands create a strong online
              presence and provide a seamless shopping experience for their
              customers.
            </p>
            <div className="about__cta">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Schedule a Free Consultation
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OUR DEVELOPMENT SERVICES (stacking cards) */}
      <ServicesStack calendlyUrl={CALENDLY_URL} />

      {/* MIGRATION */}
      <MigrationShowcase calendlyUrl={CALENDLY_URL} />

      {/* WEBSITE SHOWCASE */}
      <WebsiteShowcase />

      {/* OUR PROCESS timeline */}
      <ProcessTimeline />

      {/* WHY US — trust signals (from Figma) */}
      <TrustSignals />

      {/* CONVERSION UPLIFT BAND */}
      <ConversionUplift calendlyUrl={CALENDLY_URL} />

      {/* ROI CALCULATOR */}
      <section id="roi">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">You Do The Math</span>
            <h2>Your visitors are already there. What if more of them bought?</h2>
            <p>
              Our Shopify projects have delivered conversion rate increases of
              up to 210%. Plug in your numbers to see what even a conservative
              20% lift could mean for your store.
            </p>
          </div>
          <div className="ledger reveal">
            <div className="ledger-controls">
              <div className="slider-row">
                <label>Monthly sessions <output>{fmt(sessions)}</output></label>
                <input
                  type="range"
                  min={50000}
                  max={2000000}
                  step={1000}
                  value={sessions}
                  onChange={(e) => setSessions(Number(e.target.value))}
                />
              </div>
              <div className="slider-row">
                <label>Current conversion rate <output>{conv}%</output></label>
                <input
                  type="range"
                  min={0.5}
                  max={10}
                  step={0.1}
                  value={conv}
                  onChange={(e) => setConv(Number(e.target.value))}
                />
              </div>
              <div className="slider-row">
                <label>Average order value <output>${fmt(aov)}</output></label>
                <input
                  type="range"
                  min={10}
                  max={300}
                  step={1}
                  value={aov}
                  onChange={(e) => setAov(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="ledger-result">
              <span className="eyebrow">Estimated Monthly Revenue Lift</span>
              <div className="lift-val">${fmt(lift)}</div>
              <p className="fine">
                Based on a conservative 20% conversion rate lift applied to
                your current revenue. Actual results vary by industry, traffic
                quality, product offering, and implementation.
              </p>
              <div className="logic">Logic: Revenue = Visitors × Conversion Rate × AOV</div>
            </div>
          </div>
          <div className="cta-row">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Optimise Your Store Today
            </a>
          </div>
        </div>
      </section>

      {/* CASE STUDIES — reused from the homepage */}
      <div id="cases">
        <LandingCaseStudies />
      </div>

      {/* FAQ */}
      <section id="faq">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow">FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq reveal">
            {faqs.map((item, index) => (
              <div key={item.q} className={`faq-item${openFaq === index ? " open" : ""}`}>
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  {item.q}<span className="plus">+</span>
                </button>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="final-cta reveal">
            <span className="eyebrow center" style={{ justifyContent: "center" }}>Ready When You Are</span>
            <h2>Let&apos;s build a Shopify store customers actually trust.</h2>
            <p>
              Book a free, no-pressure consultation. We&apos;ll audit your
              current store or scope your new one — no obligation.
            </p>
            {/* Calendly inline widget */}
            <div
              className="calendly-inline-widget final-cta__calendly"
              data-url={CALENDLY_URL}
              style={{ minWidth: 320, height: 700 }}
            />
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="foot-top">
            <div>
              <div className="logo foot-logo">
                <Image src="/assets/images/common/main-logo.svg" alt="Alvatech" width={130} height={26} style={{ filter: "brightness(0) invert(1)" }} />
              </div>
              <p style={{ maxWidth: 260, fontSize: 13.5 }}>Shopify development partner for growing ecommerce brands.</p>
            </div>
            <div className="foot-cols">
              <div>
                <h6>Services</h6>
                <ul>
                  <li><a onClick={() => scrollToId("services")}>Store Development</a></li>
                  <li><a onClick={() => scrollToId("services")}>Shopify Plus</a></li>
                  <li><a onClick={() => scrollToId("migration")}>Migration</a></li>
                  <li><a href="/services/custom-ecommerce-shopify-development-services">Theme Development</a></li>
                </ul>
              </div>
              <div>
                <h6>Company</h6>
                <ul>
                  <li><a onClick={() => scrollToId("why")}>Why Us</a></li>
                  <li><a onClick={() => scrollToId("cases")}>Case Studies</a></li>
                  <li><a onClick={() => scrollToId("faq")}>FAQ</a></li>
                  <li><a href="/contact-us">Contact</a></li>
                </ul>
              </div>
              <div>
                <h6>Get Started</h6>
                <ul>
                  <li><a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Free Consultation</a></li>
                  <li><a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Free Store Audit</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Alvatech. All rights reserved.</span>
            <span>Norra Oskarsgatan 12, Linköping · +46 704964569</span>
          </div>
        </div>
      </footer>

      {/* Powers the inline Calendly embed in the final CTA */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
