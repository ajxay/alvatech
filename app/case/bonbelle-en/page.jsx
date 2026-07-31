import Image from "next/image";
import Header3 from "@/components/headers/Header3";
import Footer1 from "@/components/footers/Footer1";
import "../bonbelle/bonbelle.css";

export const metadata = {
  title: "Bonbelle B2B & D2C Web Development | Alvatech",
  description:
    "Redesigning the digital experience for Sweden's premium beauty & skincare destination.",
};

const meta = [
  { label: "Role", value: "Design & Development" },
  { label: "Timeline", value: "6 Months" },
  { label: "Platform", value: "Mobile & Desktop" },
  { label: "Year", value: "2025" },
];

const scope = [
  "Complete UX/UI redesign of web and mobile platforms",
  "User research and persona development",
  "Design system creation and implementation",
  "Enhanced product discovery and checkout flow",
];

const overviewStats = [
  { value: "145 %", label: "Increase in Conversion" },
  { value: "4.2x", label: "User Engagement" },
];

const challenges = [
  {
    title: "Poor Visual Heirarchy",
    text: "Designs were displayed in small thumbnails with cluttered layouts, failing to showcase their beauty and detail.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M2 12C2 12 5.5 5 12 5C18.5 5 22 12 22 12C22 12 18.5 19 12 19C5.5 19 2 12 2 12Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Complex Discovery",
    text: "Users struggled to find product that matched their taste due to ineffective filtering and limited personalization.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M21 21L16.65 16.65" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Trust Barriers",
    text: "Limited information about product authenticity created hesitation in making high-value purchases.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 8V13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="16.2" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const solutions = [
  {
    label: "First Solution",
    image: "/assets/images/case/bonbelle-en/solution1.png",
    text: "A simplified navigation and header structure designed to improve product discovery and make browsing artworks faster and more intuitive.",
  },
  {
    label: "Second Solution",
    image: "/assets/images/case/bonbelle-en/solution2.png",
    text: "Organized categories and smart filtering options designed to simplify exploration and help users find the right product faster.",
  },
  {
    label: "Third Solution",
    image: "/assets/images/case/bonbelle-en/solution3.png",
    text: "A redesigned product detail page with improved spacing, clear information hierarchy, and ratings to help users make confident purchase decisions.",
  },
];

const resultStats = [
  { value: "105%", label: "Organic Traffic Growth" },
  { value: "3.9x", label: "Revenue Growth" },
  { value: "68%", label: "Lower Cart Abandonment" },
  { value: "3m 45s", label: "Average Session Duration" },
];

const perf = [
  { value: "1.2s", label: "Avg. Load Time" },
  { value: "99.9%", label: "Uptime" },
  { value: "100", label: "Lighthouse Score" },
];

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.7 3.7 5 6.4 6.4l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4.4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BonbelleCaseStudyEnPage() {
  return (
    <div className="case-bonbelle">
      <Header3 />

      <section className="case-bonbelle__hero">
        <div className="case-bonbelle__hero-inner">
          <div className="case-bonbelle__hero-content">
            <Image
              className="case-bonbelle__logo"
              src="/assets/images/common/main-logo.svg"
              alt="Alvatech"
              width={180}
              height={40}
            />
            <span className="case-bonbelle__badge">
              <span className="case-bonbelle__badge-dot" aria-hidden="true" />
              CASESTUDY
            </span>
            <h1 className="case-bonbelle__hero-title">
              Bonbelle B2B &amp; D2C web development
            </h1>
            <p className="case-bonbelle__hero-subtitle">
              Redesigning the digital experience for Sweden&apos;s premium
              beauty &amp; skincare destination
            </p>
          </div>
          <div className="case-bonbelle__hero-media">
            <Image
              src="/assets/images/case/bonbelle-en/hero-photo.png"
              alt="Bonbelle product"
              width={740}
              height={550}
              priority
            />
          </div>
        </div>
      </section>

      <section className="case-bonbelle__meta">
        <div className="case-bonbelle__meta-grid">
          {meta.map((item) => (
            <div key={item.label} className="case-bonbelle__meta-item">
              <p className="case-bonbelle__meta-label">{item.label}</p>
              <p className="case-bonbelle__meta-value">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="case-bonbelle__section">
        <div className="case-bonbelle__inner case-bonbelle__preview">
          <div className="case-bonbelle__preview-panel">
            <Image
              src="/assets/images/case/bonbelle-en/preview1-phones.png"
              alt="Bonbelle mobile view"
              width={620}
              height={570}
            />
          </div>
          <div className="case-bonbelle__preview-panel">
            <Image
              src="/assets/images/case/bonbelle-en/preview1-browser.png"
              alt="Bonbelle desktop view"
              width={720}
              height={570}
            />
          </div>
        </div>
      </section>

      <section className="case-bonbelle__section">
        <div className="case-bonbelle__inner">
          <header className="case-bonbelle__head">
            <h2 className="case-bonbelle__head-title">Project Overview</h2>
            <span className="case-bonbelle__head-rule" aria-hidden="true" />
            <p className="case-bonbelle__head-text">
              A complete brand transformation for Bonbelle Beauty — spanning
              visual identity, digital presence, and campaign creative across
              five hero product lines.
            </p>
          </header>

          <div className="case-bonbelle__overview-grid">
            <div className="case-bonbelle__panel case-bonbelle__panel--green">
              <h3 className="case-bonbelle__panel-title">Scope</h3>
              <ul className="case-bonbelle__bullets">
                {scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="case-bonbelle__panel case-bonbelle__panel--cream">
              <h3 className="case-bonbelle__panel-title">Impact</h3>
              <div className="case-bonbelle__stats-row">
                {overviewStats.map((stat) => (
                  <div key={stat.label} className="case-bonbelle__stat">
                    <p className="case-bonbelle__stat-value">{stat.value}</p>
                    <p className="case-bonbelle__stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-bonbelle__section">
        <div className="case-bonbelle__inner">
          <header className="case-bonbelle__head">
            <h2 className="case-bonbelle__head-title">The Challenges</h2>
            <span className="case-bonbelle__head-rule" aria-hidden="true" />
            <p className="case-bonbelle__head-text">
              The previous digital experience failed to capture the sensory
              appeal and premium essence of our beauty products, leading to
              low customer engagement and poor conversion rates.
            </p>
          </header>

          <div className="case-bonbelle__cards">
            {challenges.map((item) => (
              <article key={item.title} className="case-bonbelle__card">
                <span className="case-bonbelle__card-icon">{item.icon}</span>
                <h3 className="case-bonbelle__card-title">{item.title}</h3>
                <p className="case-bonbelle__card-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-bonbelle__section case-bonbelle__solutions-band">
        <div className="case-bonbelle__inner">
          <header className="case-bonbelle__head">
            <h2 className="case-bonbelle__head-title">The Solutions</h2>
            <span className="case-bonbelle__head-rule" aria-hidden="true" />
            <p className="case-bonbelle__head-text">
              Our reimagined digital experience captures the sensory appeal
              and premium essence of our beauty products, driving higher
              customer engagement and improved conversion rates.
            </p>
          </header>

          <div className="case-bonbelle__solution-cards">
            {solutions.map((item) => (
              <article key={item.label} className="case-bonbelle__solution-card">
                <h3 className="case-bonbelle__solution-label">{item.label}</h3>
                <div className="case-bonbelle__solution-media">
                  <Image src={item.image} alt={item.label} width={352} height={192} />
                </div>
                <p className="case-bonbelle__solution-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-bonbelle__section">
        <div className="case-bonbelle__inner case-bonbelle__preview">
          <div className="case-bonbelle__preview-panel">
            <Image
              src="/assets/images/case/bonbelle-en/preview2-phones.png"
              alt="Bonbelle mobile view"
              width={620}
              height={620}
            />
          </div>
          <div className="case-bonbelle__preview-panel">
            <Image
              src="/assets/images/case/bonbelle-en/preview2-browser.png"
              alt="Bonbelle desktop view"
              width={720}
              height={620}
            />
          </div>
        </div>
      </section>

      <section className="case-bonbelle__section">
        <div className="case-bonbelle__inner">
          <header className="case-bonbelle__head">
            <h2 className="case-bonbelle__head-title">Impact &amp; Results</h2>
            <span className="case-bonbelle__head-rule" aria-hidden="true" />
            <p className="case-bonbelle__head-text">
              The redesigned platform exceeded all expectations, driving
              significant improvements across key business metrics.
            </p>
          </header>

          <div className="case-bonbelle__stat-grid">
            {resultStats.map((stat) => (
              <div key={stat.label} className="case-bonbelle__stat-card">
                <p className="case-bonbelle__stat-card-value">{stat.value}</p>
                <p className="case-bonbelle__stat-card-label">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="case-bonbelle__result-grid">
            <div className="case-bonbelle__quote-box">
              <p className="case-bonbelle__quote-text">
                &quot;Since switching over, I&apos;ve noticed a huge
                difference in how easy it is to browse and buy. The whole
                experience feels seamless — I actually look forward to
                shopping here now.&quot;
              </p>
              <div className="case-bonbelle__quote-author">
                <span className="case-bonbelle__quote-avatar">
                  <Image
                    src="/assets/images/case/bonbelle-en/avatar.png"
                    alt="Mr. Albin Johansson"
                    width={40}
                    height={40}
                  />
                </span>
                <p className="case-bonbelle__quote-name">Mr. Albin Johansson</p>
              </div>
            </div>

            <div className="case-bonbelle__perf-box">
              <h3 className="case-bonbelle__perf-title">Platform Performances</h3>
              <div className="case-bonbelle__perf-row">
                {perf.map((item) => (
                  <div key={item.label} className="case-bonbelle__perf-item">
                    <p className="case-bonbelle__perf-value">{item.value}</p>
                    <p className="case-bonbelle__perf-label">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-bonbelle__section">
        <div className="case-bonbelle__inner case-bonbelle__preview">
          <div className="case-bonbelle__preview-panel">
            <Image
              src="/assets/images/case/bonbelle-en/preview3-phones.png"
              alt="Bonbelle mobile view"
              width={620}
              height={585}
            />
          </div>
          <div className="case-bonbelle__preview-panel">
            <Image
              src="/assets/images/case/bonbelle-en/preview3-browser.png"
              alt="Bonbelle desktop view"
              width={720}
              height={585}
            />
          </div>
        </div>
      </section>

      <section className="case-bonbelle__cta">
        <div className="case-bonbelle__cta-inner">
          <Image
            className="case-bonbelle__cta-logo"
            src="/assets/images/common/main-logo.svg"
            alt="Alvatech"
            width={220}
            height={48}
          />
          <div className="case-bonbelle__cta-tagline">
            <span className="case-bonbelle__cta-tagline-line" aria-hidden="true" />
            <span className="case-bonbelle__cta-tagline-dot" aria-hidden="true" />
            <h2 className="case-bonbelle__cta-title">Låt oss diskutera ditt projekt</h2>
            <span className="case-bonbelle__cta-tagline-dot" aria-hidden="true" />
            <span className="case-bonbelle__cta-tagline-line" aria-hidden="true" />
          </div>
          <div className="case-bonbelle__cta-contacts">
            <a className="case-bonbelle__cta-contact" href="/contact-us">
              <span className="case-bonbelle__cta-contact-icon">
                <PinIcon />
              </span>
              Norra Oskarsgatan 12, Linköping
            </a>
            <a className="case-bonbelle__cta-contact" href="tel:+46704964569">
              <span className="case-bonbelle__cta-contact-icon">
                <PhoneIcon />
              </span>
              +46 704964569
            </a>
          </div>
        </div>
      </section>

      <Footer1 />
    </div>
  );
}
