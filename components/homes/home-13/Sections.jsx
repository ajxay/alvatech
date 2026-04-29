import Image from "next/image";
import Link from "next/link";
import "./Sections.css";

const trustedLogos = [
  { src: "/assets/images/home-13/trust/logo-smile.svg", alt: "Smile", width: 132, height: 29 },
  { src: "/assets/images/home-13/trust/logo-who.svg", alt: "World Health Organization", width: 129, height: 40 },
  { src: "/assets/images/home-13/trust/logo-geggamoja.svg", alt: "Geggamoja", width: 273, height: 24 },
  { src: "/assets/images/home-13/trust/logo-reirei.svg", alt: "reirei", width: 104, height: 36 },
  { src: "/assets/images/home-13/trust/logo-haier.svg", alt: "Haier", width: 104, height: 40 },
  { src: "/assets/images/home-13/trust/logo-smile-boutique.svg", alt: "Smile Boutique", width: 89, height: 40 },
  { src: "/assets/images/home-13/trust/logo-home-therapy.svg", alt: "Home Therapy", width: 91, height: 41 },
  { src: "/assets/images/home-13/trust/logo-cox-kings.svg", alt: "Cox and Kings", width: 154, height: 40 },
];

const integrationCards = [
  {
    title: "Shopify",
    tag: "Productivity",
    description:
      "Notify your teammates of the latest activities with instant Slack messages.",
    icon: "/assets/images/home-13/integrations/shopify.png",
    iconWidth: 100,
    iconHeight: 100,
  },
  {
    title: "Custom Development",
    tag: "CRM",
    description:
      "Leave a lasting impression all done inside Salesforce CPQ platform.",
    icon: "/assets/images/home-13/integrations/custom-development.png",
    iconWidth: 48,
    iconHeight: 48,
  },
  {
    title: "Marketing",
    tag: "Payment",
    description:
      "Collect credit card and ACH payments within your sales documents.",
    icon: "/assets/images/home-13/integrations/marketing.png",
    iconWidth: 67,
    iconHeight: 40,
  },
  {
    title: "Salesforce CRM",
    tag: "Payment",
    description:
      "Provide a world-class checkout experience for your customers.",
    icon: "/assets/images/home-13/integrations/salesforce-crm.png",
    iconWidth: 51,
    iconHeight: 36,
  },
  {
    title: "ERP Solutions",
    tag: "CRM",
    description: "Expand the ROI from your CRM and unlock easy generation and capabilities.",
    icon: "/assets/images/home-13/integrations/erp-solutions.png",
    iconWidth: 55,
    iconHeight: 55,
  },
  {
    title: "ZOHO CRM",
    tag: "Integration platforms",
    description: "Create custom, automated workflows using your favorite Zaps.",
    icon: "/assets/images/home-13/integrations/zoho-crm.png",
    iconWidth: 91,
    iconHeight: 40,
  },
];

const seamlessCards = [
  {
    step: "01",
    title: "Discover",
    text: "We understand your goals, audience, and requirements to build the right strategy.",
    iconOffsetX: -52,
    iconOffsetY: -95,
    iconBgDark: true,
    preview: "/assets/images/home-13/seamless/discover.png",
  },
  {
    step: "02",
    title: "Design",
    text: "We create wireframes and UI/UX designs that are intuitive, engaging, and on-brand.",
    iconOffsetX: -114,
    iconOffsetY: -95,
    iconShiftX: -4,
    iconShiftY: 3,
    preview: "/assets/images/home-13/seamless/design.png",
  },
  {
    step: "03",
    title: "Develop",
    text: "We build clean, scalable, and high-performance solutions with the latest technologies.",
    iconOffsetX: -184,
    iconOffsetY: -95,
    preview: "/assets/images/home-13/seamless/develop.png",
  },
  {
    step: "04",
    title: "Test & Launch",
    text: "We test thoroughly and launch seamlessly, ensuring everything works perfectly.",
    iconOffsetX: -250,
    iconOffsetY: -95,
    preview: "/assets/images/home-13/seamless/test-launch.png",
  },
];

const valueCards = [
  {
    title: "Make an impact",
    description:
      "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables. You can also customize your own dynamic versions.",
    icon: "/assets/images/home-13/values/impact.png",
    iconWidth: 100,
    iconHeight: 100,
  },
  {
    title: "Learn",
    description:
      "Teams are masters of their craft though we're all experts in our respective fields, we always make time to expand our minds.",
    icon: "/assets/images/home-13/values/learn.png",
    iconWidth: 73,
    iconHeight: 82,
  },
  {
    title: "Empathy",
    description:
      "We strive to be empathetic to every customer and colleague and by doing so we provide a better experience for all.",
    icon: "/assets/images/home-13/values/empathy.png",
    iconWidth: 80,
    iconHeight: 64,
  },
];

const stats = [
  { label: "Lexend founded", value: "2014" },
  { label: "Hardworking group", value: "50" },
  { label: "Document workflows", value: "4600" },
  { label: "Taux convertion", value: "17%" },
];

const blogPosts = [
  {
    title: "UX review presentations",
    excerpt:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    date: "April 26, 2026",
    author: "Mark Zellers",
    image: "/assets/images/home-13/posts/post-1.png",
  },
  {
    title: "Migrating to Linear 101",
    excerpt:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    date: "April 26, 2026",
    author: "Mark Zellers",
    image: "/assets/images/home-13/posts/post-2.png",
  },
  {
    title: "Building your API stack",
    excerpt:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, & managing them.",
    date: "April 26, 2026",
    author: "Mark Zellers",
    image: "/assets/images/home-13/posts/post-3.png",
  },
];

const testimonials = [
  {
    logo: "/assets/images/home-13/testimonials/logo-cox-kings.png",
    logoAlt: "Cox and Kings",
    quote:
      "\"We're looking for people who share our vision! Most of our time used to be taken up by alternate administrative work whereas now we can focus on building out to help our employees.\"",
    author: "Mark Zellers",
    date: "April 26, 2026",
    logoWidth: 128,
    logoHeight: 36,
  },
  {
    logo: "/assets/images/home-13/testimonials/logo-smile.png",
    logoAlt: "Smile",
    quote:
      "\"We're looking for people who share our vision! Most of our time used to be taken up by alternate administrative work whereas now we can focus on building out to help our employees.\"",
    author: "Mark Zellers",
    date: "April 26, 2026",
    logoWidth: 171,
    logoHeight: 37,
  },
  {
    logo: "/assets/images/home-13/testimonials/logo-haier-mask.png",
    logoAlt: "Haier",
    quote:
      "\"We're looking for people who share our vision! Most of our time used to be taken up by alternate administrative work whereas now we can focus on building out to help our employees.\"",
    author: "Mark Zellers",
    date: "April 26, 2026",
    logoWidth: 92,
    logoHeight: 36,
  },
];

const timeline = [
  { year: "2020", title: "Founded", icon: "/assets/images/template/walking.svg" },
  { year: "2022", title: "Expanded globally", icon: "/assets/images/template/globe.svg" },
  { year: "2024", title: "Platform partnerships", icon: "/assets/images/template/tool-hubspot.svg" },
  { year: "2026", title: "AI automation", icon: "/assets/images/template/fun.svg" },
];

const team = [
  { name: "MONICA LANDBERG", role: "CEO", image: "/assets/images/home-13/team/monica-landberg.png" },
  { name: "ANDRES LANDBERG", role: "COO", image: "/assets/images/home-13/team/andres-landberg.png" },
  { name: "NIKHIL KHETAN", role: "CTO", image: "/assets/images/home-13/team/nikhil-khetan.png" },
  { name: "ANDRE RANDAHL", role: "CFO", image: "/assets/images/home-13/team/andre-randahl.png" },
  { name: "MANISH KUMAR", role: "Tech Lead", image: "/assets/images/home-13/team/manish-kumar.png" },
  { name: "ASHISH RANJAN", role: "Marketing Lead", image: "/assets/images/home-13/team/ashish-ranjan.png" },
  { name: "LUICY", role: "Lead of Fun", image: "/assets/images/home-13/team/luicy.png" },
  { name: "MOOLY", role: "Director of Joy", image: "/assets/images/home-13/team/mooly.png" },
];

export default function Sections() {
  return (
    <>
      <section className="home13-trust">
        <p className="home13-trust__title">Trusted for overall simplicity</p>
        <div className="home13-trust__rating">
          <span className="home13-trust__stars" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Image
                key={i}
                src="/assets/images/home-13/trust/icon-star.svg"
                alt=""
                width={20}
                height={20}
              />
            ))}
          </span>
          <span>Based on 4,000+ reviews with customer satisfaction</span>
        </div>
        <div className="home13-trust__logos">
          {trustedLogos.map((logo) => (
            <div key={logo.alt} className="home13-trust__logo">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
        </div>
      </section>

      <section id="integrations" className="home13-section home13-integrations">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <header className="home13-header">
            <h2>Boost your efficiency with integrations</h2>
            <p>
              Connect every part of your business with integrations that will
              simplify your workflow.
            </p>
          </header>
          <div className="home13-grid">
            {integrationCards.map((item) => (
              <article key={item.title} className="home13-card">
                <div className="home13-card__head">
                  <div>
                    <h3>{item.title}</h3>
                    <span>{item.tag}</span>
                  </div>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={item.iconWidth}
                    height={item.iconHeight}
                    className="home13-card__logo"
                  />
                </div>
                <p>{item.description}</p>
                <Link href="/page-integrations" className="home13-card__explore">
                  <span>Explore</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home13-section home13-seamless">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <header className="home13-header">
            <h2>Seamless Integrations That Power Your Growth</h2>
            <p>
              Connect your tools, automate workflows, and create a unified
              system that scales effortlessly with your business.
            </p>
          </header>
          <div className="home13-seamless__grid">
            {seamlessCards.map((item) => (
              <article key={item.title} className="home13-seamless__card">
                <div className="home13-seamless__head">
                  <span className="home13-seamless__step">{item.step}</span>
                  <span
                    className={`home13-seamless__icon-wrap${
                      item.iconBgDark ? " is-dark" : ""
                    }`}
                  >
                    <span
                      className="home13-seamless__icon-sprite"
                      style={{
                        backgroundPosition: `${item.iconOffsetX}px ${item.iconOffsetY}px`,
                        transform: `translate(${item.iconShiftX || 0}px, ${item.iconShiftY || 0}px)`,
                      }}
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="home13-seamless__preview">
                  <Image src={item.preview} alt={`${item.title} preview`} width={262} height={126} />
                </div>
              </article>
            ))}
          </div>
          <div className="home13-app-strip">
            <h3>Alva Tech Partners</h3>
            <div className="home13-app-strip__logos">
              <Image
                src="/assets/images/home-13/seamless/partner-salesforce.png"
                alt="Salesforce"
                width={91}
                height={64}
                style={{
                  maxWidth: "100%",
                  height: "50px",     // Try forcing a specific height
                  width: "auto",      // Maintain aspect ratio
                  objectFit: "contain",
                  display: "block"
                }}
              />
              <Image
                src="/assets/images/home-13/seamless/partner-klaviyo.png"
                alt="Klaviyo"
                width={82}
                height={64}
                style={{
                  maxWidth: "100%",
                  height: "70px",     // Try forcing a specific height
                  width: "auto",      // Maintain aspect ratio
                  objectFit: "contain",
                  display: "block"
                }}
              />
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Image
                  src="/assets/images/home-13/seamless/partner-shopify-bag.png"
                  alt="Shopify"
                  width={180}
                  height={180}
                  style={{
                    maxWidth: "100%",
                    height: "90px",     // Try forcing a specific height
                    width: "auto",      // Maintain aspect ratio
                    objectFit: "contain",
                    display: "block"
                  }}
                />
              </div>
    
              <Image
                src="/assets/images/home-13/seamless/partner-zoho.png"
                alt="Zoho"
                width={146}
                height={64}
                style={{
                  maxWidth: "100%",
                  height: "50px",     // Try forcing a specific height
                  width: "auto",      // Maintain aspect ratio
                  objectFit: "contain",
                  display: "block"
                }}
              />
              <Image
                src="/assets/images/home-13/seamless/partner-shopify-plus.png"
                alt="Shopify Plus Partner"
                width={214}
                height={64}
                style={{
                  maxWidth: "100%",
                  height: "40px",     // Try forcing a specific height
                  width: "auto",      // Maintain aspect ratio
                  objectFit: "contain",
                  display: "block"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="home13-section home13-stats">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <header className="home13-header">
            <h2>Our Values it&apos;s Simple!</h2>
          </header>
          <div className="home13-values__grid">
            {valueCards.map((item) => (
              <article key={item.title} className="home13-values__card">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={item.iconWidth}
                  height={item.iconHeight}
                  className="home13-values__icon"
                />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <div className="home13-stats__grid">
            {stats.map((item, idx) => (
              <div key={item.label} className="home13-stats__item">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                {idx !== stats.length - 1 ? (
                  <span className="home13-stats__divider" aria-hidden="true" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home13-section home13-posts">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <header className="home13-header home13-posts__header">
            <h2>Latest posts and updates</h2>
          </header>
          <div className="home13-posts__grid">
            {blogPosts.map((post) => (
              <article key={post.title} className="home13-posts__card">
                <div
                  className="home13-posts__media"
                  style={{ backgroundImage: `url(${post.image})` }}
                  aria-hidden="true"
                />
                <div className="home13-posts__body">
                  <div className="home13-posts__title-row">
                    <h3>{post.title}</h3>
                    <Image
                      src="/assets/images/home-13/posts/post-arrow-icon.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                  <p className="home13-posts__excerpt">{post.excerpt}</p>
                  <div className="home13-posts__author">
                    <Image
                      src="/assets/images/home-13/posts/author-mark-zellers.png"
                      alt={post.author}
                      width={48}
                      height={48}
                    />
                    <div>
                      <span>{post.author}</span>
                      <small>{post.date}</small>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home13-section home13-testimonials">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <header className="home13-header">
            <h2>Don&apos;t just take our words</h2>
          </header>
          <div className="home13-testimonials__grid">
            {testimonials.map((item) => (
              <article key={item.logoAlt} className="home13-testimonials__card">
                <Image
                  src={item.logo}
                  alt={item.logoAlt}
                  width={item.logoWidth}
                  height={item.logoHeight}
                  className="home13-testimonials__logo"
                />
                <p className="home13-testimonials__quote">{item.quote}</p>
                <div className="home13-testimonials__author">
                  <Image
                    src="/assets/images/home-13/testimonials/author-mark-zellers.png"
                    alt={item.author}
                    width={48}
                    height={48}
                  />
                  <div>
                    <strong>{item.author}</strong>
                    <span>{item.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="home13-section">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <header className="home13-header">
            <h2>How we got here</h2>
          </header>
          <div className="home13-timeline">
            {timeline.map((item) => (
              <article key={item.year} className="home13-timeline__item">
                <Image src={item.icon} alt={item.title} width={44} height={44} />
                <h3>{item.year}</h3>
                <p>{item.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <section className="home13-section home13-team">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <header className="home13-header">
            <h2>Our Executive Team</h2>
          </header>
          <div className="home13-team__grid">
            {team.map((member) => (
              <article key={member.name} className="home13-team__card">
                <Image src={member.image} alt={member.name} width={180} height={180} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home13-section">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="home13-cta">
            <Image
              src="/assets/images/home-13/cta/left-figure.png"
              alt=""
              width={195}
              height={253}
              className="home13-cta__figure home13-cta__figure--left"
            />
            <Image
              src="/assets/images/home-13/cta/sparkle-left.png"
              alt=""
              width={29}
              height={29}
              className="home13-cta__sparkle home13-cta__sparkle--left"
            />
            <div className="home13-cta__content">
              <h2>Prevent costly mistakes</h2>
              <p>Lets build optimized solutions for your business.</p>
              <Link href="/page-contact" className="home13-cta__button">
                Reach Us Now
              </Link>
            </div>
            <Image
              src="/assets/images/home-13/cta/right-figure.png"
              alt=""
              width={278}
              height={309}
              className="home13-cta__figure home13-cta__figure--right"
            />
            <Image
              src="/assets/images/home-13/cta/sparkle-right.png"
              alt=""
              width={34}
              height={34}
              className="home13-cta__sparkle home13-cta__sparkle--right"
            />
          </div>
        </div>
      </section>
    </>
  );
}
