"use client";

import Image from "next/image";

const platformLogos = [
  { name: "Vendre", src: "/assets/images/case/landing-migration/logo-vendre.png", width: 1000, height: 296 },
  { name: "Norce", src: "/assets/images/case/landing-migration/logo-norce.png", width: 1961, height: 561 },
  { name: "Abicart", src: "/assets/images/case/landing-migration/logo-abicart.png", width: 400, height: 200 },
  { name: "Litium", src: "/assets/images/case/landing-migration/logo-litium.png", width: 377, height: 213 },
];

const migrationFeatures = [
  {
    id: "data",
    icon: "/assets/images/case/landing-migration/icon-data-migration.png",
    width: 512,
    height: 410,
    title: "Complete Data Migration",
    text: "Transfer products, customers, orders, pages, blogs etc. Securely",
  },
  {
    id: "seo",
    icon: "/assets/images/case/landing-migration/icon-seo.png",
    width: 512,
    height: 418,
    title: "Keep Your SEO Intact",
    text: "Preserve your URLs, metadata, and search rankings",
  },
  {
    id: "integrations",
    icon: "/assets/images/case/landing-migration/icon-integrations.png",
    width: 505,
    height: 460,
    title: "Integrations Reconnected",
    text: "Reconnect payment gateways, shipping providers, ERP, CRM, and third-party apps",
  },
  {
    id: "downtime",
    icon: "/assets/images/case/landing-migration/icon-downtime.png",
    width: 512,
    height: 377,
    title: "Minimal Downtime",
    text: "Every migration is planned to minimise downtime, so your customers can continue shopping.",
  },
  {
    id: "support",
    icon: "/assets/images/case/landing-migration/icon-support.png",
    width: 450,
    height: 409,
    title: "Post Migration Assistance",
    text: "We monitor your store after launch, resolve issues quickly",
  },
];

export default function MigrationShowcase({ calendlyUrl }) {
  return (
    <section id="migration" className="migration-show">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center" style={{ justifyContent: "center" }}>Shopify Migration</span>
          <h2>Migrate Your ECommerce Store to Shopify</h2>
          <p>
            Migrate your store from any Ecommerce platform to Shopify while
            preserving store data, search rankings, integrations, and
            business continuity.
          </p>
        </div>

        <div className="migration-show__flow reveal">
          <div className="migration-show__flow-col">
            <span className="migration-show__flow-label">Platform We Migrated From</span>
            <div className="migration-show__logos">
              {platformLogos.map((logo) => (
                <div key={logo.name} className="migration-show__logo-box">
                  <Image src={logo.src} alt={logo.name} width={logo.width} height={logo.height} />
                </div>
              ))}
            </div>
          </div>

          <div className="migration-show__arrow" aria-hidden="true">
            <span className="migration-show__arrow-line" />
            <span className="migration-show__arrow-dot" />
            <span className="migration-show__arrow-line" />
          </div>

          <div className="migration-show__flow-col migration-show__flow-col--to">
            <span className="migration-show__flow-label">Your New Store</span>
            <div className="migration-show__shopify-box">
              <Image
                src="/assets/images/case/landing-migration/icon-shopify.png"
                alt="Shopify"
                width={82}
                height={91}
              />
            </div>
          </div>
        </div>

        <div className="migration-show__features reveal">
          {migrationFeatures.map((feat) => (
            <div key={feat.id} className="migration-show__feature">
              <span className="migration-show__feature-icon">
                <Image src={feat.icon} alt="" width={feat.width} height={feat.height} aria-hidden="true" />
              </span>
              <h4>{feat.title}</h4>
              <p>{feat.text}</p>
            </div>
          ))}
        </div>

        <div className="migration-show__cta reveal">
          <span className="migration-show__cta-icon">
            <Image
              src="/assets/images/case/landing-migration/icon-rocket.png"
              alt=""
              width={356}
              height={352}
              aria-hidden="true"
            />
          </span>
          <div className="migration-show__cta-copy">
            <h4>Ready to Make the Move</h4>
            <p>Migrate to Shopify and unlock a better way to grow</p>
          </div>
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Plan Your Migration Today
          </a>
        </div>
      </div>
    </section>
  );
}
