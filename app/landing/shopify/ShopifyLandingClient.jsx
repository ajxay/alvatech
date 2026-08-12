"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ProcessStack from "./ProcessStack";
import TrustSignals from "./TrustSignals";
import MigrationShowcase from "./MigrationShowcase";
import WebsiteShowcase from "./WebsiteShowcase";
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

const services = [
  { tag: "Core Build", title: "Shopify Store Design & Development", text: "Custom Shopify stores with modern UI/UX, mobile-first design, and fast performance—built to reflect your brand and deliver a better shopping experience." },
  { tag: "Move Platforms", title: "Ecommerce Store Migration To Shopify", text: "Migrate your ecommerce website from WooCommerce, Magento, BigCommerce, OpenCart, PrestaShop, or custom platforms with minimal downtime." },
  { tag: "Design & Build", title: "Shopify Theme & App Development", text: "Create fast, responsive, and conversion-focused Shopify themes and apps that deliver exceptional shopping experiences." },
  { tag: "Integrate", title: "Third-Party Integration & Automation", text: "Integrate payment gateways, shipping providers, marketplaces, ERP, CRM, inventory systems, and marketing tools." },
  { tag: "B2B", title: "B2B Store Development", text: "Develop Shopify B2B stores with wholesale pricing, customer-specific catalogs, bulk ordering, custom pricing, account management, and other features." },
  { tag: "Ongoing", title: "Shopify Maintenance & Support", text: "Keep your store secure, optimized, and continuously improving with ongoing technical support and enhancements." },
];


// Exact data/markup reused from components/homes/home-13/Sections.jsx so this
// section matches the live homepage hub-and-spoke diagram pixel-for-pixel.
const marketplaceMigrationRows = [
  [
    { name: "Vendre", logo: "/assets/images/home-13/marketplaces/vendre.png", width: 16, height: 16 },
    { name: "Norce", logo: "/assets/images/home-13/marketplaces/norce.png", width: 49, height: 14 },
    { name: "Kodmyran", logo: "/assets/images/home-13/marketplaces/kodmyran.png", width: 50, height: 16 },
    { name: "Magento", logo: "/assets/images/home-13/marketplaces/magento.png", width: 16, height: 16 },
  ],
  [
    { name: "Centra", logo: "/assets/images/home-13/marketplaces/centra.png", width: 50, height: 16 },
    { name: "Abicart", logo: "/assets/images/home-13/marketplaces/abicart.png", width: 51, height: 16 },
    { name: "Woocommerce", logo: "/assets/images/home-13/marketplaces/woocommerce.png", width: 27, height: 16 },
  ],
];

const marketplacePayment = [
  { name: "Qliro", logo: "/assets/images/home-13/marketplaces/qliro.png", width: 26, height: 16 },
  { name: "Klarna", logo: "/assets/images/home-13/marketplaces/klarna.png", width: 18, height: 18 },
  { name: "Swish", logo: "/assets/images/home-13/marketplaces/swish.png", width: 18, height: 18 },
  { name: "Vipps", logo: "/assets/images/home-13/marketplaces/vipps.png", width: 16, height: 16 },
  { name: "Paypal", logo: "/assets/images/home-13/marketplaces/paypal.png", width: 16, height: 16 },
];

const marketplaceShipping = [
  { name: "PostNord", logo: "/assets/images/home-13/marketplaces/postnord.png", width: 16, height: 16 },
  { name: "DHL", logo: "/assets/images/home-13/marketplaces/dhl.png", width: 18, height: 18 },
  { name: "Budbee", logo: "/assets/images/home-13/marketplaces/budbee.png", width: 56, height: 14 },
  { name: "Instabox", logo: "/assets/images/home-13/marketplaces/instabox.png", width: 16, height: 16 },
  { name: "Nshift", logo: "/assets/images/home-13/marketplaces/nshift.png", width: 54, height: 14 },
];

const marketplaceRows = [
  [
    { name: "Zalando", logo: "/assets/images/home-13/marketplaces/zalando.png", width: 19, height: 20 },
    { name: "Amazon", logo: "/assets/images/home-13/marketplaces/amazon.png", width: 26, height: 20 },
    { name: "CDON", logo: "/assets/images/home-13/marketplaces/cdon.png", width: 40, height: 13 },
    { name: "ASOS", logo: "/assets/images/home-13/marketplaces/asos.png", width: 56, height: 16 },
  ],
  [
    { name: "Bol", logo: "/assets/images/home-13/marketplaces/bol.png", width: 42, height: 16 },
    { name: "Elkjop", logo: "/assets/images/home-13/marketplaces/elkjop.png", width: 44, height: 16 },
    { name: "Ellos", logo: "/assets/images/home-13/marketplaces/ellos.png", width: 36, height: 16 },
    { name: "Zalando", logo: "/assets/images/home-13/marketplaces/zalando.png", width: 19, height: 20 },
  ],
];

const smallCases = [
  {
    id: "geggamoja",
    image: "/assets/images/home-13/case-studies/geggamoja.png",
    tag: "Kids & Home",
    metric: "+30%",
    title: "Geggamoja average order value lift",
    text: "Redesigned product discovery and merchandising to increase average order value across the Geggamoja Shopify store.",
    tags: ["Shopify", "Merchandising", "AOV Growth"],
    href: "/assets/pdfs/Geggamoja English.pdf",
  },
  {
    id: "reirei",
    image: "/assets/images/home-13/case-studies/reirei.png",
    tag: "Beauty & Wellness",
    metric: "+210%",
    title: "ReiRei conversion rate breakthrough",
    text: "Rebuilt product pages and checkout flow around trust signals to more than triple ReiRei's on-site conversion rate.",
    tags: ["Conversion Design", "Checkout UX", "Shopify"],
    href: "/assets/pdfs/ReiRei English.pdf",
  },
];

const faqs = [
  { q: "How long does Shopify website development take?", a: "Most Shopify projects are completed within 4 to 8 weeks depending on complexity." },
  { q: "Can you redesign my existing Shopify store?", a: "Yes. We can redesign, optimize, and modernize your current Shopify website without disrupting your business." },
  { q: "Do you provide custom Shopify development?", a: "Absolutely. Every business has unique requirements, and we build custom solutions tailored to your goals." },
  { q: "Will my Shopify website be mobile responsive?", a: "Yes. Every Shopify website we develop is fully responsive and optimized for mobile shopping." },
  { q: "Can you migrate my existing ecommerce website?", a: "Yes. We migrate websites from WooCommerce, Magento, Wix, BigCommerce, OpenCart, and other ecommerce platforms." },
  { q: "Do you provide SEO services?", a: "Yes. We build SEO-friendly Shopify websites and also offer ongoing SEO optimization services." },
  { q: "Will I be able to manage the website myself?", a: "Definitely. Shopify's intuitive dashboard makes it easy to manage products, inventory, and orders." },
  { q: "Do you provide maintenance after launch?", a: "Yes. We offer ongoing support, maintenance, performance optimization, and feature enhancements." },
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

      {/* WHY CHOOSE */}
      <section id="why" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <div className="sec-head reveal" style={{ maxWidth: 780 }}>
            <span className="eyebrow">About Alva Tech</span>
            <h2>Custom Shopify Solutions for Ambitious Brands.</h2>
            <p>
              Our Shopify store development services are designed to help
              businesses launch, grow, and scale online. Whether you&apos;re
              starting a new store or migrating from another platform. Our
              Shopify development services include custom theme &amp; store
              development, migrating commerce store to shopify, theme and app
              development etc. Every store is built with clean code, mobile
              first design, SEO best practices, and a smooth shopping
              experience.
            </p>
            <p>
              We&apos;ve delivered Shopify websites for businesses across
              multiple industries, helping brands create a strong online
              presence and provide a seamless shopping experience for their
              customers.
            </p>
          </div>
          <div className="cta-row reveal">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Schedule A Consultation
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Our Shopify Services</span>
            <h2>Shopify Solutions That Alva Tech Offers</h2>
          </div>
          <div className="services-grid reveal">
            {services.map((svc) => (
              <div key={svc.title} className="svc">
                <div>
                  <span className="tag">{svc.tag}</span>
                  <h3>{svc.title}</h3>
                  <p>{svc.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cta-row reveal">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Schedule A Meeting
            </a>
          </div>
        </div>
      </section>

      {/* CONNECTED COMMERCE ECOSYSTEM — reused verbatim from home13 Sections.jsx */}
      <section style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div id="marketplaces" className="home13-marketplaces">
            <div className="home13-marketplaces__header">
              <h3>One Store. Endless Possibilities.</h3>
              <p>Integrate the systems you rely on and create a connected commerce ecosystem.</p>
            </div>
            <div className="home13-marketplaces__desktop">
              <article className="home13-marketplaces__block home13-marketplaces__block--top">
                <h4>Migrate From Existing Ecommerce Platforms</h4>
                <div className="home13-marketplaces__rows">
                  {marketplaceMigrationRows.map((row, rowIndex) => (
                    <div key={`migration-row-${rowIndex}`} className="home13-marketplaces__row">
                      {row.map((item) => (
                        <div key={item.name} className="home13-marketplaces__row-item">
                          <Image src={item.logo} alt="" width={item.width} height={item.height} aria-hidden="true" />
                          <span>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </article>

              <div className="home13-marketplaces__middle">
                <article className="home13-marketplaces__block home13-marketplaces__block--side">
                  <h4>Payment Gateway Integrations</h4>
                  <div className="home13-marketplaces__list">
                    {marketplacePayment.map((item) => (
                      <div key={item.name} className="home13-marketplaces__list-item">
                        <Image src={item.logo} alt="" width={item.width} height={item.height} aria-hidden="true" />
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </article>

                <div className="home13-marketplaces__hub">
                  <span className="home13-marketplaces__axis home13-marketplaces__axis--horizontal" aria-hidden="true" />
                  <span className="home13-marketplaces__axis home13-marketplaces__axis--vertical" aria-hidden="true" />
                  <span className="home13-marketplaces__dot home13-marketplaces__dot--left" aria-hidden="true" />
                  <span className="home13-marketplaces__dot home13-marketplaces__dot--top" aria-hidden="true" />
                  <span className="home13-marketplaces__dot home13-marketplaces__dot--right" aria-hidden="true" />
                  <span className="home13-marketplaces__dot home13-marketplaces__dot--bottom" aria-hidden="true" />
                  <div className="home13-marketplaces__hub-ring" />
                  <div className="home13-marketplaces__hub-core">
                    <Image src="/assets/images/home-13/marketplaces/shopify-center.png" alt="Shopify" width={64} height={64} />
                  </div>
                </div>

                <article className="home13-marketplaces__block home13-marketplaces__block--side">
                  <h4>Shipping Integrations</h4>
                  <div className="home13-marketplaces__list">
                    {marketplaceShipping.map((item) => (
                      <div key={item.name} className="home13-marketplaces__list-item">
                        <Image src={item.logo} alt="" width={item.width} height={item.height} aria-hidden="true" />
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </div>

              <article className="home13-marketplaces__block home13-marketplaces__block--bottom">
                <h4>Marketplace Integrations</h4>
                <div className="home13-marketplaces__rows">
                  {marketplaceRows.map((row, rowIndex) => (
                    <div key={`marketplace-row-${rowIndex}`} className="home13-marketplaces__row">
                      {row.map((item, itemIndex) => (
                        <div key={`${item.name}-${itemIndex}`} className="home13-marketplaces__row-item">
                          <Image src={item.logo} alt="" width={item.width} height={item.height} aria-hidden="true" />
                          <span>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <div className="home13-marketplaces__mobile">
              <article className="home13-marketplaces__block home13-marketplaces__block--top home13-mkt-card">
                <h4>Migrate From Existing Ecommerce Platforms</h4>
                <div className="home13-marketplaces__rows">
                  {marketplaceMigrationRows.map((row, rowIndex) => (
                    <div key={`migration-row-mobile-${rowIndex}`} className="home13-marketplaces__row">
                      {row.map((item) => (
                        <div key={item.name} className="home13-marketplaces__row-item">
                          <Image src={item.logo} alt="" width={item.width} height={item.height} aria-hidden="true" />
                          <span>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </article>

              <article className="home13-marketplaces__block home13-marketplaces__block--side home13-mkt-card">
                <h4>Payment Gateway Integrations</h4>
                <div className="home13-marketplaces__list">
                  {marketplacePayment.map((item) => (
                    <div key={item.name} className="home13-marketplaces__list-item">
                      <Image src={item.logo} alt="" width={item.width} height={item.height} aria-hidden="true" />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </article>

              <article className="home13-marketplaces__block home13-marketplaces__block--side home13-mkt-card">
                <h4>Shipping Integrations</h4>
                <div className="home13-marketplaces__list">
                  {marketplaceShipping.map((item) => (
                    <div key={item.name} className="home13-marketplaces__list-item">
                      <Image src={item.logo} alt="" width={item.width} height={item.height} aria-hidden="true" />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </article>

              <article className="home13-marketplaces__block home13-marketplaces__block--bottom home13-mkt-card">
                <h4>Marketplace Integrations</h4>
                <div className="home13-marketplaces__rows">
                  {marketplaceRows.map((row, rowIndex) => (
                    <div key={`marketplace-row-mobile-${rowIndex}`} className="home13-marketplaces__row">
                      {row.map((item, itemIndex) => (
                        <div key={`${item.name}-${itemIndex}`} className="home13-marketplaces__row-item">
                          <Image src={item.logo} alt="" width={item.width} height={item.height} aria-hidden="true" />
                          <span>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
          <div className="cta-row reveal">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <ProcessStack />

      {/* WHY US — trust signals (from Figma) */}
      <TrustSignals />

      {/* AUDIT BANNER */}
      <section>
        <div className="wrap">
          <div className="audit reveal">
            <h3>Get your FREE Shopify store audit today.</h3>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Claim Free Audit
            </a>
          </div>
        </div>
      </section>

      {/* MIGRATION */}
      <MigrationShowcase calendlyUrl={CALENDLY_URL} />

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

      {/* CASE STUDIES */}
      <section id="cases">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Case Studies</span>
            <h2>Every store has a story. Every story has results.</h2>
            <p>
              Behind every successful Shopify store is a strategy built around
              customer behavior, seamless experiences, and continuous
              optimization.
            </p>
          </div>

          <div className="case-featured reveal">
            <div className="photo">
              <Image
                src="/assets/images/home-13/case-studies/bonbelle.png"
                alt="Bonbelle Shopify storefront"
                width={618}
                height={394}
              />
            </div>
            <div className="cf-body">
              <span className="tag">Featured · Beauty &amp; Skincare</span>
              <h3>How Bonbelle grew organic traffic 105% and revenue 3.9x after a full Shopify redesign</h3>
              <p className="desc">
                Redesigned Bonbelle&apos;s B2B &amp; D2C Shopify experience
                end-to-end — new UX/UI, a rebuilt design system, and a
                streamlined checkout — to fix the visual hierarchy, discovery,
                and trust issues holding back conversion.
              </p>
              <div className="cf-stats">
                <div><b>+105%</b><span>Organic Traffic</span></div>
                <div><b>3.9x</b><span>Revenue Growth</span></div>
                <div><b>-68%</b><span>Cart Abandonment</span></div>
              </div>
              <p className="cf-quote">
                &quot;Since switching over, I&apos;ve noticed a huge
                difference in how easy it is to browse and buy. The whole
                experience feels seamless — I actually look forward to
                shopping here now.&quot;
              </p>
              <div className="cf-person">
                <span className="avatar" style={{ width: 40, height: 40, borderRadius: "50%", overflow: "hidden", display: "block", flex: "none" }}>
                  <Image src="/assets/images/case/bonbelle-en/avatar.png" alt="" width={40} height={40} />
                </span>
                <div className="who"><b>Mr. Albin Johansson</b><span>Bonbelle</span></div>
              </div>
              <a
                href={encodeURI("/assets/pdfs/Bonbelle English.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ alignSelf: "flex-start" }}
              >
                Download Case Study
              </a>
            </div>
          </div>

          <div className="cases reveal">
            {smallCases.map((item) => (
              <div key={item.id} className="case">
                <div className="case-top">
                  <Image src={item.image} alt={item.title} width={700} height={500} />
                  <span className="tag">{item.tag}</span>
                  <div className="case-metric">{item.metric}</div>
                </div>
                <div className="case-body">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                  <div className="case-tags">
                    {item.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <a href={encodeURI(item.href)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                    Download Case Study
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEBSITE SHOWCASE */}
      <WebsiteShowcase />

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
          <div className="final-cta reveal" style={{ textAlign: "center" }}>
            <span className="eyebrow center" style={{ justifyContent: "center" }}>Ready When You Are</span>
            <h2 style={{ margin: "16px auto 14px", maxWidth: 600 }}>
              Let&apos;s build a Shopify store customers actually trust.
            </h2>
            <p style={{ color: "rgba(255,255,255,.7)", maxWidth: 480, margin: "0 auto 34px" }}>
              Book a free, no-pressure consultation. We&apos;ll audit your
              current store or scope your new one — no obligation.
            </p>
            <div className="cta-row" style={{ gap: 14 }}>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-light">
                Get a Free Shopify Consultation
              </a>
              <a
                onClick={() => scrollToId("cases")}
                className="btn btn-ghost"
                style={{ borderColor: "rgba(255,255,255,.3)", color: "var(--paper)", cursor: "pointer" }}
              >
                View Our Portfolio
              </a>
            </div>
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
    </div>
  );
}
