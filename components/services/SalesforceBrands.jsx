import React from "react";

const brands = [
  { src: "/assets/images/salesforce/brands/b01-reirei.png", alt: "reirei", width: 112 },
  { src: "/assets/images/salesforce/brands/b02-morning-owl.png", alt: "Morning Owl", width: 121 },
  { src: "/assets/images/salesforce/brands/b03-ekaan.png", alt: "ekaan", width: 118 },
  { src: "/assets/images/salesforce/brands/b04-ss.png", alt: "SS", width: 66 },
  { src: "/assets/images/salesforce/brands/b05-twrks.png", alt: "T-wrks", width: 63 },
  { src: "/assets/images/salesforce/brands/b06-meridian.png", alt: "Meridian", width: 130 },
];

export default function SalesforceBrands() {
  return (
    <div
      id="companies_sponsores"
      className="companies-sponsores section panel overflow-hidden"
    >
      <div className="section-outer panel py-4 md:py-6">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="brands panel"
              data-anime="onview: true; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
            >
              <ul className="salesforce-brand-list m-0 p-0">
                {brands.map((b) => (
                  <li key={b.alt} className="salesforce-brand-item">
                    <span
                      role="img"
                      aria-label={b.alt}
                      className="salesforce-brand-logo"
                      style={{
                        width: b.width,
                        WebkitMaskImage: `url(${b.src})`,
                        maskImage: `url(${b.src})`,
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .salesforce-brand-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 24px 32px;
          list-style: none;
        }
        .salesforce-brand-item {
          flex: 1 1 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 120px;
        }
        .salesforce-brand-logo {
          display: inline-block;
          height: 40px;
          background-color: #434243;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: center;
          mask-position: center;
          -webkit-mask-size: contain;
          mask-size: contain;
          transition: opacity 0.2s ease;
          opacity: 0.85;
        }
        .salesforce-brand-logo:hover {
          opacity: 1;
        }
        @media (max-width: 767px) {
          .salesforce-brand-list {
            justify-content: center;
            gap: 18px 24px;
          }
          .salesforce-brand-item {
            flex: 0 0 calc(33.333% - 24px);
            min-width: 0;
          }
          .salesforce-brand-logo {
            height: 28px;
            width: 100% !important;
            max-width: 110px;
          }
        }
      `}</style>
    </div>
  );
}
