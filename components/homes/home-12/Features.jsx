"use client";

import React from "react";

const PRIMARY = "#84BA41";

const smartFeatures = [
  {
    id: 1,
    title: "Launch high-performing eCommerce stores",
    description:
      "We design and develop scalable, conversion-focused eCommerce experiences with seamless integrations, fast performance, and mobile-first UX to help you go live and grow faster.",
    mockup: "store",
  },
  {
    id: 2,
    title: "Scale revenue with performance marketing",
    description:
      "Drive consistent growth through data-driven campaigns across Meta and Google, focusing on acquisition, conversion optimization, & maximizing ROAS with continuous testing and optimization.",
    mockup: "analytics",
  },
  {
    id: 3,
    title: "Streamline operations with smart systems",
    description:
      "Build and integrate CRM, ERP, and Salesforce solutions to automate workflows, centralize data, and improve efficiency across sales, marketing, and operations for long-term scalability.",
    mockup: "crm",
  },
];

function StoreMockup() {
  return (
    <div className="h12-mockup h12-mockup--store">
      <div className="h12-store-header">
        <span className="h12-store-menu" />
        <span className="h12-store-title">STORE</span>
        <span className="h12-store-cart">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 3h2l3 13h12l3-9H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="9" cy="20" r="1.5" fill="currentColor" />
            <circle cx="18" cy="20" r="1.5" fill="currentColor" />
          </svg>
        </span>
      </div>
      <div className="h12-store-body">
        <div className="h12-store-rail">
          <span className="h12-rail-btn active">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 12l9-8 9 8v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-9z" stroke="currentColor" strokeWidth="1.5"/></svg>
          </span>
          <span className="h12-rail-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l10 5-10 5L2 7l10-5zM2 12l10 5 10-5M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
          </span>
          <span className="h12-rail-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/></svg>
          </span>
          <span className="h12-rail-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M19 12a7 7 0 1 1-7-7" stroke="currentColor" strokeWidth="1.5"/></svg>
          </span>
        </div>
        <div className="h12-store-card">
          <div className="h12-store-chair" aria-hidden="true">
            <svg viewBox="0 0 120 120" width="100%" height="100%">
              <rect x="28" y="30" width="60" height="50" rx="14" fill="#7FA56B" />
              <rect x="22" y="70" width="72" height="18" rx="6" fill="#6F9459" />
              <rect x="34" y="85" width="6" height="22" fill="#5b3a1e" />
              <rect x="78" y="85" width="6" height="22" fill="#5b3a1e" />
            </svg>
          </div>
          <div className="h12-store-meta">
            <p className="h12-store-name">Modern Lounge Chair</p>
            <p className="h12-store-price">$199,00</p>
            <span className="h12-store-cta">Add to cart</span>
          </div>
        </div>
        <div className="h12-store-apps">
          {[
            { label: "Shopify", color: "#95BF47", letter: "S" },
            { label: "Payments", color: "#111", icon: "card" },
            { label: "Shipping", color: "#444", icon: "truck" },
            { label: "Apps", color: "#444", icon: "apps" },
          ].map((a) => (
            <div className="h12-store-app" key={a.label}>
              <span
                className="h12-app-ico"
                style={{ color: a.color, background: "#fff" }}
              >
                {a.letter ? (
                  <strong>{a.letter}</strong>
                ) : a.icon === "card" ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M3 10h18" stroke="currentColor" strokeWidth="1.5"/></svg>
                ) : a.icon === "truck" ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M2 7h11v9H2zM13 11h5l3 3v2h-8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="6" cy="18" r="1.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="17" cy="18" r="1.5" stroke="currentColor" strokeWidth="1.5"/></svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg>
                )}
              </span>
              <span className="h12-app-label">{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnalyticsMockup() {
  return (
    <div className="h12-mockup h12-mockup--analytics">
      <div className="h12-ana-head">
        <span className="h12-ana-pill">ROAS</span>
        <span className="h12-ana-pill">CTR</span>
        <span className="h12-ana-pill active">Revenue</span>
      </div>
      <div className="h12-ana-grid">
        <div className="h12-ana-stat">
          <span className="h12-ana-label">Spend</span>
          <span className="h12-ana-value">$12.4k</span>
          <span className="h12-ana-delta up">+18%</span>
        </div>
        <div className="h12-ana-stat">
          <span className="h12-ana-label">ROAS</span>
          <span className="h12-ana-value">4.6x</span>
          <span className="h12-ana-delta up">+0.8</span>
        </div>
      </div>
      <div className="h12-ana-chart">
        <svg viewBox="0 0 260 120" width="100%" height="100%" preserveAspectRatio="none">
          <defs>
            <linearGradient id="h12Grad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={PRIMARY} stopOpacity="0.45" />
              <stop offset="100%" stopColor={PRIMARY} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,90 L20,78 L40,82 L60,62 L80,68 L100,46 L120,52 L140,36 L160,44 L180,28 L200,34 L220,18 L240,24 L260,10 L260,120 L0,120 Z"
            fill="url(#h12Grad)"
          />
          <path
            d="M0,90 L20,78 L40,82 L60,62 L80,68 L100,46 L120,52 L140,36 L160,44 L180,28 L200,34 L220,18 L240,24 L260,10"
            stroke={PRIMARY}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="h12-ana-bars">
        {[30, 55, 42, 70, 85, 60, 75].map((h, i) => (
          <span
            key={i}
            className="h12-bar"
            style={{
              height: `${h}%`,
              backgroundColor: i === 4 ? PRIMARY : "#d9e4c9",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function CrmMockup() {
  return (
    <div className="h12-mockup h12-mockup--crm">
      <div className="h12-crm-head">
        <span className="h12-crm-title">Opportunities</span>
        <span className="h12-crm-dot" style={{ background: PRIMARY }} />
      </div>
      <div className="h12-crm-kanban">
        {[
          { title: "New", count: 12, tone: "#e8edf5" },
          { title: "Qualified", count: 8, tone: "#e8f3f9" },
          { title: "Won", count: 5, tone: "#e9f4da" },
        ].map((col) => (
          <div className="h12-crm-col" key={col.title}>
            <div className="h12-crm-col-head" style={{ background: col.tone }}>
              <span>{col.title}</span>
              <span className="h12-crm-count">{col.count}</span>
            </div>
            <div className="h12-crm-col-body">
              <div className="h12-crm-card">
                <span className="h12-crm-line long" />
                <span className="h12-crm-line short" />
              </div>
              <div className="h12-crm-card">
                <span className="h12-crm-line long" />
                <span className="h12-crm-line short" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="h12-crm-footer">
        <span className="h12-crm-avatar" />
        <span className="h12-crm-avatar" style={{ marginLeft: -8 }} />
        <span className="h12-crm-avatar" style={{ marginLeft: -8 }} />
        <span className="h12-crm-note">Synced with Salesforce</span>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <div id="smart_features" className="smart-features section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 max-w-700px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 xl:h1 m-0">
                Smart features for your business
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                We focus on helping you to make useful content more accessible
                with an ultimate goal for a good sharing profit as a content
                creator.
              </p>
            </div>
            <div className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2 lg:g-4">
              {smartFeatures.map((feat) => (
                <div key={feat.id}>
                  <div
                    className="h12-feature-card panel p-3 lg:p-4 rounded-2"
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e6e8ec",
                      boxShadow: "0 2px 0 rgba(16,24,40,0.02)",
                    }}
                    data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 450; delay: 100;"
                  >
                    <div className="vstack gap-3 h-100">
                      <div className="h12-feature-mockup">
                        {feat.mockup === "store" && <StoreMockup />}
                        {feat.mockup === "analytics" && <AnalyticsMockup />}
                        {feat.mockup === "crm" && <CrmMockup />}
                      </div>
                      <div className="panel vstack gap-2">
                        <h3 className="h5 lg:h4 m-0">{feat.title}</h3>
                        <p className="fs-6 opacity-70 dark:opacity-80 m-0">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .h12-feature-mockup {
          background: #eef5e3;
          border-radius: 16px;
          aspect-ratio: 1.08 / 1;
          padding: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .h12-mockup {
          width: 100%;
          height: 100%;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(16, 24, 40, 0.06);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* store mockup */
        .h12-mockup--store {
          padding: 10px;
        }
        .h12-store-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 4px 4px 8px;
          color: #111;
          font-size: 11px;
          letter-spacing: 0.08em;
        }
        .h12-store-menu {
          width: 14px;
          height: 10px;
          border-top: 2px solid #111;
          border-bottom: 2px solid #111;
          position: relative;
        }
        .h12-store-menu:before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 3px;
          height: 2px;
          background: #111;
        }
        .h12-store-title {
          font-weight: 700;
          flex: 1;
        }
        .h12-store-cart {
          display: inline-flex;
          color: #111;
        }
        .h12-store-body {
          position: relative;
          flex: 1;
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 8px;
          align-items: stretch;
        }
        .h12-store-rail {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding-top: 4px;
        }
        .h12-rail-btn {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: #fff;
          color: #8a8f98;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 1px 2px rgba(16, 24, 40, 0.08);
        }
        .h12-rail-btn.active {
          color: #111;
        }
        .h12-store-card {
          background: #f5f7fa;
          border-radius: 10px;
          padding: 8px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          align-items: center;
        }
        .h12-store-chair {
          background: #fff;
          border-radius: 8px;
          padding: 8px;
          aspect-ratio: 1 / 1;
        }
        .h12-store-meta {
          font-size: 10px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .h12-store-name {
          font-weight: 700;
          color: #111;
          margin: 0;
        }
        .h12-store-price {
          color: #6b7280;
          margin: 0;
        }
        .h12-store-cta {
          display: inline-block;
          margin-top: 4px;
          padding: 4px 8px;
          background: #111;
          color: #fff;
          border-radius: 999px;
          font-weight: 600;
          text-align: center;
          font-size: 9px;
        }
        .h12-store-apps {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 6px;
          margin-top: 8px;
        }
        .h12-store-app {
          background: #fff;
          border-radius: 8px;
          padding: 6px 4px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          box-shadow: 0 1px 2px rgba(16, 24, 40, 0.06);
          font-size: 9px;
        }
        .h12-app-ico {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .h12-app-ico strong {
          font-size: 12px;
        }

        /* analytics mockup */
        .h12-mockup--analytics {
          padding: 12px;
          gap: 10px;
        }
        .h12-ana-head {
          display: flex;
          gap: 6px;
        }
        .h12-ana-pill {
          font-size: 10px;
          padding: 4px 10px;
          background: #f2f4f7;
          color: #667085;
          border-radius: 999px;
        }
        .h12-ana-pill.active {
          background: ${PRIMARY};
          color: #fff;
        }
        .h12-ana-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .h12-ana-stat {
          background: #f9fafb;
          border-radius: 10px;
          padding: 8px 10px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .h12-ana-label {
          font-size: 10px;
          color: #98a2b3;
        }
        .h12-ana-value {
          font-weight: 700;
          color: #111;
          font-size: 14px;
        }
        .h12-ana-delta {
          font-size: 10px;
          color: ${PRIMARY};
          font-weight: 600;
        }
        .h12-ana-delta.up::before {
          content: "▲ ";
        }
        .h12-ana-chart {
          height: 70px;
          background: #f9fafb;
          border-radius: 10px;
          padding: 6px;
        }
        .h12-ana-bars {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
          align-items: end;
          height: 44px;
          padding: 0 4px;
        }
        .h12-bar {
          width: 100%;
          border-radius: 4px;
        }

        /* crm mockup */
        .h12-mockup--crm {
          padding: 10px;
          gap: 8px;
        }
        .h12-crm-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2px 2px 4px;
        }
        .h12-crm-title {
          font-weight: 700;
          color: #111;
          font-size: 12px;
        }
        .h12-crm-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .h12-crm-kanban {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          flex: 1;
        }
        .h12-crm-col {
          background: #f9fafb;
          border-radius: 10px;
          padding: 6px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .h12-crm-col-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 4px 6px;
          border-radius: 6px;
          font-size: 9px;
          font-weight: 700;
          color: #111;
        }
        .h12-crm-count {
          font-size: 9px;
          color: #667085;
        }
        .h12-crm-col-body {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .h12-crm-card {
          background: #fff;
          border-radius: 6px;
          padding: 6px;
          display: flex;
          flex-direction: column;
          gap: 3px;
          box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
        }
        .h12-crm-line {
          height: 5px;
          border-radius: 3px;
          background: #e5e7eb;
        }
        .h12-crm-line.long {
          width: 85%;
        }
        .h12-crm-line.short {
          width: 50%;
        }
        .h12-crm-footer {
          display: flex;
          align-items: center;
          padding: 2px 4px;
        }
        .h12-crm-avatar {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, #cfe3ab, ${PRIMARY});
          border: 2px solid #fff;
        }
        .h12-crm-note {
          margin-left: 10px;
          font-size: 10px;
          color: #667085;
        }
      `}</style>
    </div>
  );
}
