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
import CaseStudies from "@/components/homes/home-13/CaseStudies";
import { useTranslation } from "react-i18next";
import { openCookieSettings } from "@/utlis/cookieConsent";
import LandingLanguageSwitcher from "./LandingLanguageSwitcher";
import { BOOKING_ANCHOR, scrollToBooking } from "./scrollToBooking";
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

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function ShopifyLandingClient() {
  const scrolled = useStickyHeader();
  useReveal();
  useCounters();

  const { t } = useTranslation("common");
  const [openFaq, setOpenFaq] = useState(null);

  const L = (k, opts) => t(`shopifyLanding.${k}`, opts);
  const tickerItems = L("ticker.items", { returnObjects: true });
  const faqs = L("faq.items", { returnObjects: true });

  return (
    <div className="shopify-lp">
      <header id="shopifyLpHeader" className={scrolled ? "scrolled" : ""}>
        <div className="wrap">
          <nav>
            <div className="logo">
              <Image src="/assets/images/common/main-logo.svg" alt="Alvatech" width={130} height={26} />
            </div>
            <div className="nav-links">
              <a onClick={() => scrollToId("why")}>{L("nav.whyUs")}</a>
              <a onClick={() => scrollToId("services")}>{L("nav.services")}</a>
              <a onClick={() => scrollToId("migration")}>{L("nav.migration")}</a>
              <a onClick={() => scrollToId("cases")}>{L("nav.caseStudies")}</a>
              <a onClick={() => scrollToId("faq")}>{L("nav.faq")}</a>
            </div>
            <div className="nav-cta">
              <LandingLanguageSwitcher />
              <a
                href={BOOKING_ANCHOR}
                onClick={scrollToBooking}
                className="btn btn-primary btn-sm"
              >
                {L("nav.cta")}
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
              { src: "hero-phone-1.png", mod: "p1" },
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
              <span className="eyebrow">{L("hero.eyebrow")}</span>
              <h1>{L("hero.title")}</h1>
              <p className="lead">{L("hero.lead")}</p>
              <div className="hero-ctas">
                <a href={BOOKING_ANCHOR} onClick={scrollToBooking} className="btn btn-primary">
                  {L("hero.cta")}
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
            <span className="eyebrow">{L("stats.eyebrow")}</span>
            <h2>{L("stats.title")}</h2>
          </div>
          <div className="results reveal">
            <div className="result"><b data-target="250" data-suffix="+">0</b><span>{L("stats.websites")}</span></div>
            <div className="result"><b data-target="50" data-suffix="+">0</b><span>{L("stats.migrated")}</span></div>
            <div className="result"><b data-target="100" data-suffix="+">0</b><span>{L("stats.customStores")}</span></div>
            <div className="result"><b data-target="2" data-prefix="<" data-suffix="s">0</b><span>{L("stats.loadTime")}</span></div>
            <div className="result"><b data-target="22" data-prefix="↑" data-suffix="%">0</b><span>{L("stats.conversion")}</span></div>
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
              alt={L("about.imageAlt")}
              width={428}
              height={524}
            />
          </div>
          <div className="about__copy reveal">
            <span className="eyebrow">{L("about.eyebrow")}</span>
            <h2>{L("about.title")}</h2>
            <p>{L("about.p1")}</p>
            <p>{L("about.p2")}</p>
            <div className="about__cta">
              <a href={BOOKING_ANCHOR} onClick={scrollToBooking} className="btn btn-primary">
                {L("about.cta")}
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OUR DEVELOPMENT SERVICES (stacking cards) */}
      <ServicesStack />

      {/* MIGRATION */}
      <MigrationShowcase />

      {/* WEBSITE SHOWCASE */}
      <WebsiteShowcase />

      {/* OUR PROCESS timeline */}
      <ProcessTimeline />

      {/* WHY US — trust signals (from Figma) */}
      <TrustSignals />

      {/* CONVERSION UPLIFT BAND */}
      <ConversionUplift />

      {/* CASE STUDIES — reused from the homepage */}
      <div id="cases">
        <CaseStudies />
      </div>

      {/* FAQ */}
      <section id="faq">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow">{L("faq.eyebrow")}</span>
            <h2>{L("faq.title")}</h2>
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
            <span className="eyebrow center" style={{ justifyContent: "center" }}>{L("finalCta.eyebrow")}</span>
            <h2>{L("finalCta.title")}</h2>
            <p>{L("finalCta.lead")}</p>
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
              <p style={{ maxWidth: 260, fontSize: 13.5 }}>{L("footer.tagline")}</p>
            </div>
            <div className="foot-cols">
              <div>
                <h6>{L("footer.legal")}</h6>
                <ul>
                  <li><a href="/page-privacy" target="_blank" rel="noopener noreferrer">{L("footer.privacy")}</a></li>
                  <li><a href="/page-terms" target="_blank" rel="noopener noreferrer">{L("footer.terms")}</a></li>
                  <li>
                    <button type="button" className="foot-linkbtn" onClick={openCookieSettings}>
                      {L("footer.cookies")}
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h6>{L("footer.company")}</h6>
                <ul>
                  <li><a onClick={() => scrollToId("why")}>{L("footer.whyUs")}</a></li>
                  <li><a onClick={() => scrollToId("cases")}>{L("footer.caseStudies")}</a></li>
                  <li><a onClick={() => scrollToId("faq")}>{L("footer.faq")}</a></li>
                  <li><a href="/contact-us" target="_blank" rel="noopener noreferrer">{L("footer.contact")}</a></li>
                </ul>
              </div>
              <div>
                <h6>{L("footer.getStarted")}</h6>
                <ul>
                  <li><a href={BOOKING_ANCHOR} onClick={scrollToBooking}>{L("footer.freeConsultation")}</a></li>
                  <li><a href={BOOKING_ANCHOR} onClick={scrollToBooking}>{L("footer.freeAudit")}</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="foot-bottom">
            <LandingLanguageSwitcher className="lang-switch--dark" />
            <span>{L("footer.rights")}</span>
            <span>{L("footer.address")}</span>
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
