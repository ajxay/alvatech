import Image from "next/image";
import Header3 from "@/components/headers/Header3";
import Footer1 from "@/components/footers/Footer1";
import "./bonbelle.css";

export const metadata = {
  title: "Bonbelle B2B & D2C webbutveckling | Alvatech",
  description:
    "Omdesign av den digitala upplevelsen för Sveriges främsta skönhets- och hudvårdsdestination.",
};

const meta = [
  { label: "Roll", value: "Design & Utveckling" },
  { label: "Tidsram", value: "6 månader" },
  { label: "Plattform", value: "Mobil & Dator" },
  { label: "År", value: "2025" },
];

const scope = [
  "Fullständig UX/UI-redesign av webb- och mobilplattformar",
  "Användarundersökning och personautveckling",
  "Skapande och implementering av designsystem",
  "Förbättrad produktupptäckt och kassaflöde",
];

const overviewStats = [
  { value: "245 %", label: "Ökning av konvertering" },
  { value: "4.2x", label: "Användarengagemang" },
];

const challenges = [
  {
    title: "Dålig visuell hierarki",
    text: "Designs visades i små miniatyrbilder med röriga layouter, vilket misslyckades med att visa upp deras skönhet och detaljer.",
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
    title: "Komplex upptäckt",
    text: "Användare hade svårt att hitta produkter som matchade deras smak på grund av ineffektiv filtrering och begränsad personalisering.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M21 21L16.65 16.65" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Förtroendehinder",
    text: "Begränsad information om produktens äkthet skapade tveksamhet vid köp av högt värderade varor.",
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
    label: "Första lösningen",
    image: "/assets/images/case/bonbelle/solution1.png",
    text: "En förenklad navigations- och rubrikstruktur utformad för att förbättra produktupptäckt och göra surfning av konstverk snabbare och mer intuitiv.",
  },
  {
    label: "Andra lösningen",
    image: "/assets/images/case/bonbelle/solution2.png",
    text: "Organiserade kategorier och smarta filtreringsalternativ utformade för att förenkla utforskningen och hjälpa användare att hitta rätt produkt snabbare.",
  },
  {
    label: "Tredje lösningen",
    image: "/assets/images/case/bonbelle/solution3.png",
    text: "En omdesignad produktdetaljsida med förbättrat avstånd, tydlig informationshierarki och betyg för att hjälpa användare att fatta säkra köpbeslut.",
  },
];

const resultStats = [
  { value: "105%", label: "Organisk trafiktillväxt" },
  { value: "3.9x", label: "Intäktstillväxt" },
  { value: "68%", label: "Lägre varukorgsövergivning" },
  { value: "3m 45s", label: "Genomsnittlig sessionslängd" },
];

const perf = [
  { value: "1.2s", label: "Snitt laddningstid" },
  { value: "99.9%", label: "Drifttid" },
  { value: "100", label: "Lighthouse-poäng" },
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

export default function BonbelleCaseStudyPage() {
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
              FALLSTUDIE
            </span>
            <h1 className="case-bonbelle__hero-title">
              Bonbelle B2B &amp; D2C webbutveckling
            </h1>
            <p className="case-bonbelle__hero-subtitle">
              Omdesign av den digitala upplevelsen för Sveriges främsta
              skönhets- och hudvårdsdestination
            </p>
          </div>
          <div className="case-bonbelle__hero-media">
            <Image
              src="/assets/images/case/bonbelle/hero-photo.png"
              alt="Bonbelle-produkt"
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
              src="/assets/images/case/bonbelle/preview1-phones.png"
              alt="Bonbelle mobilvy"
              width={620}
              height={550}
            />
          </div>
          <div className="case-bonbelle__preview-panel">
            <Image
              src="/assets/images/case/bonbelle/preview1-browser.png"
              alt="Bonbelle skrivbordsvy"
              width={720}
              height={550}
            />
          </div>
        </div>
      </section>

      <section className="case-bonbelle__section">
        <div className="case-bonbelle__inner">
          <header className="case-bonbelle__head">
            <h2 className="case-bonbelle__head-title">Projektöversikt</h2>
            <span className="case-bonbelle__head-rule" aria-hidden="true" />
            <p className="case-bonbelle__head-text">
              En fullständig varumärkesomvandling för Bonbelle Beauty — som
              spänner över visuell identitet, digital närvaro och
              kampanjmaterial över fem huvudproduktlinjer.
            </p>
          </header>

          <div className="case-bonbelle__overview-grid">
            <div className="case-bonbelle__panel case-bonbelle__panel--green">
              <h3 className="case-bonbelle__panel-title">Omfattning</h3>
              <ul className="case-bonbelle__bullets">
                {scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="case-bonbelle__panel case-bonbelle__panel--cream">
              <h3 className="case-bonbelle__panel-title">Effekt</h3>
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
            <h2 className="case-bonbelle__head-title">Utmaningarna</h2>
            <span className="case-bonbelle__head-rule" aria-hidden="true" />
            <p className="case-bonbelle__head-text">
              Den tidigare digitala upplevelsen lyckades inte fånga den
              sensoriska attraktionen och den premiumkänsla som våra
              skönhetsprodukter erbjuder, vilket ledde till lågt
              kundengagemang och dåliga konverteringsresultat.
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
            <h2 className="case-bonbelle__head-title">Lösningarna</h2>
            <span className="case-bonbelle__head-rule" aria-hidden="true" />
            <p className="case-bonbelle__head-text">
              Vår nytänkta digitala upplevelse fångar den sensoriska
              attraktionen och premiumkänslan hos våra skönhetsprodukter,
              vilket driver högre kundengagemang och förbättrade
              konverteringsresultat.
            </p>
          </header>

          <div className="case-bonbelle__solution-cards">
            {solutions.map((item) => (
              <article key={item.label} className="case-bonbelle__solution-card">
                <h3 className="case-bonbelle__solution-label">{item.label}</h3>
                <div className="case-bonbelle__solution-media">
                  <Image src={item.image} alt={item.label} width={352} height={182} />
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
              src="/assets/images/case/bonbelle/preview2-phones.png"
              alt="Bonbelle mobilvy"
              width={620}
              height={630}
            />
          </div>
          <div className="case-bonbelle__preview-panel">
            <Image
              src="/assets/images/case/bonbelle/preview2-browser.png"
              alt="Bonbelle skrivbordsvy"
              width={720}
              height={630}
            />
          </div>
        </div>
      </section>

      <section className="case-bonbelle__section">
        <div className="case-bonbelle__inner">
          <header className="case-bonbelle__head">
            <h2 className="case-bonbelle__head-title">Effekt &amp; Resultat</h2>
            <span className="case-bonbelle__head-rule" aria-hidden="true" />
            <p className="case-bonbelle__head-text">
              Den omdesignade plattformen överträffade alla förväntningar och
              drev betydande förbättringar över viktiga affärsmått.
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
                &quot;Sedan jag bytte har jag märkt en enorm skillnad i hur
                enkelt det är att bläddra och handla. Hela upplevelsen känns
                sömlös — jag ser faktiskt fram emot att handla här nu.&quot;
              </p>
              <div className="case-bonbelle__quote-author">
                <span className="case-bonbelle__quote-avatar">
                  <Image
                    src="/assets/images/case/bonbelle/avatar.png"
                    alt="Mr. Albin Johansson"
                    width={40}
                    height={40}
                  />
                </span>
                <p className="case-bonbelle__quote-name">Mr. Albin Johansson</p>
              </div>
            </div>

            <div className="case-bonbelle__perf-box">
              <h3 className="case-bonbelle__perf-title">Plattformsprestanda</h3>
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
              src="/assets/images/case/bonbelle/preview3-phones.png"
              alt="Bonbelle mobilvy"
              width={620}
              height={600}
            />
          </div>
          <div className="case-bonbelle__preview-panel">
            <Image
              src="/assets/images/case/bonbelle/preview3-browser.png"
              alt="Bonbelle skrivbordsvy"
              width={720}
              height={600}
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
