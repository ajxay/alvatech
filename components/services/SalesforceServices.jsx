import React from "react";

const GREEN = "#84BA41";
const GREEN_DARK = "#12715b";
const INK = "#0e0e0f";
const INK_MUTED = "rgba(33, 37, 41, 0.7)";
const CARD_SHADOW = "0 10px 30px rgba(15, 23, 42, 0.08)";
const CARD_BORDER = "1px solid rgba(15, 23, 42, 0.06)";

function FeatureText({ icon, title, description }) {
  return (
    <div className="panel vstack gap-2 max-w-420px">
      <span
        className="cstack rounded-1-5"
        style={{
          width: 44,
          height: 44,
          backgroundColor: GREEN,
          color: "#fff",
        }}
      >
        {icon}
      </span>
      <h3
        className="h4 lg:h3 m-0"
        style={{ color: INK, letterSpacing: "-0.3px" }}
      >
        {title}
      </h3>
      <p className="fs-6 m-0" style={{ color: INK_MUTED, lineHeight: 1.6 }}>
        {description}
      </p>
      <a
        href="#"
        className="d-inline-flex items-center fw-bold gap-narrow text-decoration-none"
        style={{ color: GREEN_DARK }}
      >
        Let&apos;s find out <span aria-hidden>→</span>
      </a>
    </div>
  );
}

function Chip({ label, children, color = GREEN }) {
  return (
    <div
      className="hstack items-center gap-narrow"
      style={{ fontSize: 12, color: "#434243" }}
    >
      <span
        className="d-inline-block rounded-circle"
        style={{ width: 8, height: 8, backgroundColor: color }}
      />
      <span>{label}</span>
      {children}
    </div>
  );
}

function SalesforceLogo() {
  return (
    <div className="hstack items-center gap-narrow">
      <span
        className="cstack rounded-circle"
        style={{ width: 22, height: 22, backgroundColor: GREEN }}
      >
        <span
          style={{
            width: 12,
            height: 8,
            borderRadius: 8,
            background: "#fff",
          }}
        />
      </span>
      <span style={{ fontWeight: 700, fontSize: 14, color: INK }}>
        Salesforce
      </span>
    </div>
  );
}

function LeadsMockup() {
  const rows = [
    { label: "New Lead", active: true },
    { label: "Contacted" },
    { label: "Qualified" },
    { label: "Converted" },
  ];
  const bars = [30, 38, 28, 44, 52, 40, 60, 70, 58, 76, 85];
  return (
    <div
      className="panel position-relative"
      style={{
        backgroundColor: "#fff",
        borderRadius: 14,
        boxShadow: CARD_SHADOW,
        border: CARD_BORDER,
        padding: 18,
        maxWidth: 430,
      }}
    >
      <div
        className="hstack items-center justify-between mb-2"
        style={{ paddingBottom: 10, borderBottom: "1px solid #f1f3f5" }}
      >
        <SalesforceLogo />
        <span style={{ color: "#a9adb4", letterSpacing: 2 }}>•••</span>
      </div>

      <div className="hstack items-start gap-2">
        <div className="vstack gap-1" style={{ flex: "0 0 42%", fontSize: 12 }}>
          {rows.map((r) => (
            <div
              key={r.label}
              className="hstack items-center gap-narrow py-1"
              style={{ color: r.active ? INK : "#6b7280" }}
            >
              <span
                className="d-inline-block rounded-circle"
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: r.active ? GREEN : "#d7dbe0",
                }}
              />
              {r.label}
            </div>
          ))}
        </div>

        <div
          className="vstack gap-1 p-2"
          style={{
            flex: 1,
            backgroundColor: "#fafbfc",
            borderRadius: 10,
            border: "1px solid #eef0f2",
          }}
        >
          <div className="hstack items-center gap-narrow">
            <span
              className="cstack rounded-circle"
              style={{
                width: 34,
                height: 34,
                backgroundColor: "#e7f0d9",
                fontSize: 16,
              }}
            >
              👤
            </span>
            <div className="vstack" style={{ lineHeight: 1.15 }}>
              <strong style={{ fontSize: 12, color: INK }}>John Smith</strong>
              <span style={{ fontSize: 10, color: "#6b7280" }}>
                Acme Corporation
              </span>
              <span
                className="d-inline-block mt-narrow px-1"
                style={{
                  alignSelf: "flex-start",
                  backgroundColor: GREEN,
                  color: "#fff",
                  fontSize: 9,
                  borderRadius: 4,
                }}
              >
                New Lead
              </span>
            </div>
          </div>
          <div
            className="vstack"
            style={{ fontSize: 10, color: "#6b7280", lineHeight: 1.5 }}
          >
            <div>
              <span style={{ color: "#9aa0a6" }}>Email</span> · john.smith@acme.com
            </div>
            <div>
              <span style={{ color: "#9aa0a6" }}>Phone</span> · (555) 123-4567
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-2 p-2"
        style={{
          backgroundColor: "#fafbfc",
          borderRadius: 10,
          border: "1px solid #eef0f2",
        }}
      >
        <div
          className="hstack items-center justify-between mb-1"
          style={{ fontSize: 11 }}
        >
          <span style={{ color: "#6b7280" }}>Leads This Month</span>
          <span style={{ color: GREEN_DARK, fontWeight: 700 }}>↑ 28%</span>
        </div>
        <div
          className="hstack items-end gap-narrow"
          style={{ height: 64 }}
          aria-hidden
        >
          {bars.map((h, i) => (
            <span
              key={i}
              style={{
                flex: 1,
                height: `${h}%`,
                backgroundColor: i === bars.length - 1 ? GREEN : "#c7e0b9",
                borderRadius: 3,
              }}
            />
          ))}
        </div>
      </div>

      <span
        className="position-absolute cstack rounded-circle"
        style={{
          width: 44,
          height: 44,
          backgroundColor: GREEN,
          color: "#fff",
          left: -16,
          bottom: -16,
          boxShadow: CARD_SHADOW,
          fontSize: 20,
        }}
      >
        👤
      </span>
    </div>
  );
}

function PipelineMockup() {
  const stages = [
    { name: "Prospecting", value: "$50K", bar: 55, count: 6 },
    { name: "Qualification", value: "$75K", bar: 72, count: 6 },
    { name: "Proposal", value: "$40K", bar: 45, count: 4 },
    { name: "Closed Won", value: "$120K", bar: 90, count: 3 },
  ];
  return (
    <div className="panel position-relative" style={{ maxWidth: 460 }}>
      <div
        className="panel"
        style={{
          backgroundColor: "#fff",
          borderRadius: 14,
          boxShadow: CARD_SHADOW,
          border: CARD_BORDER,
          padding: 18,
        }}
      >
        <div
          className="hstack items-center justify-between mb-2"
          style={{ fontSize: 13 }}
        >
          <strong style={{ color: INK }}>Sales Pipeline</strong>
          <span style={{ color: "#a9adb4", letterSpacing: 2 }}>•••</span>
        </div>
        <div className="row child-cols col-4 g-1">
          {stages.map((s) => (
            <div key={s.name}>
              <div className="vstack gap-narrow" style={{ fontSize: 11 }}>
                <span style={{ color: "#6b7280" }}>{s.name}</span>
                <strong style={{ fontSize: 13, color: INK }}>{s.value}</strong>
                <div
                  style={{
                    height: 4,
                    backgroundColor: "#eef0f2",
                    borderRadius: 4,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${s.bar}%`,
                      height: "100%",
                      backgroundColor: GREEN,
                    }}
                  />
                </div>
                <span style={{ color: "#6b7280" }}>{s.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="panel position-absolute"
        style={{
          backgroundColor: "#fff",
          borderRadius: 14,
          boxShadow: CARD_SHADOW,
          border: CARD_BORDER,
          padding: 14,
          right: -8,
          bottom: -60,
          width: 240,
        }}
      >
        <div style={{ fontSize: 11, color: "#6b7280" }}>Total Pipeline Value</div>
        <div
          className="hstack items-center justify-between mb-1"
          style={{ color: INK }}
        >
          <strong style={{ fontSize: 18 }}>$285K</strong>
          <span
            style={{ color: GREEN_DARK, fontSize: 11, fontWeight: 700 }}
          >
            ↑ 18%
          </span>
        </div>
        <svg viewBox="0 0 240 70" width="100%" height="56" aria-hidden>
          <defs>
            <linearGradient id="pipeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={GREEN} stopOpacity="0.35" />
              <stop offset="100%" stopColor={GREEN} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,55 L30,48 L60,50 L90,40 L120,32 L150,36 L180,22 L210,18 L240,8 L240,70 L0,70 Z"
            fill="url(#pipeGrad)"
          />
          <path
            d="M0,55 L30,48 L60,50 L90,40 L120,32 L150,36 L180,22 L210,18 L240,8"
            fill="none"
            stroke={GREEN}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <span
        className="position-absolute cstack rounded-circle"
        style={{
          width: 44,
          height: 44,
          backgroundColor: GREEN,
          color: "#fff",
          left: -10,
          top: "55%",
          boxShadow: CARD_SHADOW,
          fontSize: 16,
        }}
        aria-hidden
      >
        ▽
      </span>
    </div>
  );
}

function ReportsMockup() {
  const stats = [
    { label: "Total Sales", value: "$450K", change: "+15%" },
    { label: "New Opportunities", value: "32", change: "+12%" },
    { label: "Win Rate", value: "26%", change: "+8%" },
  ];
  return (
    <div className="panel position-relative" style={{ maxWidth: 430 }}>
      <div
        className="panel"
        style={{
          backgroundColor: "#fff",
          borderRadius: 14,
          boxShadow: CARD_SHADOW,
          border: CARD_BORDER,
          padding: 18,
        }}
      >
        <div
          className="hstack items-center justify-between mb-2"
          style={{ paddingBottom: 10, borderBottom: "1px solid #f1f3f5" }}
        >
          <SalesforceLogo />
          <span style={{ color: "#a9adb4", letterSpacing: 2 }}>•••</span>
        </div>

        <div
          className="hstack items-center gap-narrow mb-1"
          style={{ fontSize: 12, color: INK }}
        >
          <strong>Dashboard</strong>
        </div>

        <div className="row child-cols col-4 g-1 mb-2">
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="vstack p-1"
                style={{
                  backgroundColor: "#fafbfc",
                  borderRadius: 8,
                  border: "1px solid #eef0f2",
                  fontSize: 10,
                }}
              >
                <span style={{ color: "#6b7280" }}>{s.label}</span>
                <strong style={{ fontSize: 14, color: INK }}>{s.value}</strong>
                <span style={{ color: GREEN_DARK, fontWeight: 700 }}>
                  ↑ {s.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 11, color: "#6b7280" }}>Sales Over Time</div>
        <svg viewBox="0 0 400 90" width="100%" height="90" aria-hidden>
          <defs>
            <linearGradient id="reportGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={GREEN} stopOpacity="0.35" />
              <stop offset="100%" stopColor={GREEN} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,70 L50,60 L100,64 L150,52 L200,44 L250,48 L300,32 L350,24 L400,12 L400,90 L0,90 Z"
            fill="url(#reportGrad)"
          />
          <path
            d="M0,70 L50,60 L100,64 L150,52 L200,44 L250,48 L300,32 L350,24 L400,12"
            fill="none"
            stroke={GREEN}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <span
        className="position-absolute cstack rounded-circle"
        style={{
          width: 44,
          height: 44,
          backgroundColor: GREEN,
          color: "#fff",
          right: -12,
          bottom: -16,
          boxShadow: CARD_SHADOW,
          fontSize: 18,
        }}
        aria-hidden
      >
        📊
      </span>
    </div>
  );
}

function WorkflowMockup() {
  const steps = [
    { label: "New Lead Created", icon: "👤" },
    { label: "Assign to Sales Rep", icon: "👥" },
    { label: "Send Welcome Email", icon: "✉" },
    { label: "Create Follow-up Task", icon: "✓" },
  ];
  return (
    <div className="panel position-relative" style={{ maxWidth: 460 }}>
      <div
        className="panel"
        style={{
          backgroundColor: "#fff",
          borderRadius: 14,
          boxShadow: CARD_SHADOW,
          border: CARD_BORDER,
          padding: 18,
        }}
      >
        <div
          className="hstack items-start justify-between"
          style={{ gap: 6 }}
        >
          {steps.map((s, i) => (
            <React.Fragment key={s.label}>
              <div
                className="vstack items-center"
                style={{ flex: "0 0 auto", width: 84, textAlign: "center" }}
              >
                <span
                  className="cstack rounded-1"
                  style={{
                    width: 54,
                    height: 54,
                    backgroundColor: "#fafbfc",
                    border: "1px solid #eef0f2",
                    fontSize: 20,
                  }}
                >
                  {s.icon}
                </span>
                <span
                  className="mt-narrow"
                  style={{ fontSize: 10, color: INK, lineHeight: 1.2 }}
                >
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  style={{
                    flex: 1,
                    borderTop: `2px dashed ${GREEN}`,
                    marginTop: 26,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div
        className="panel position-absolute"
        style={{
          backgroundColor: "#fff",
          borderRadius: 14,
          boxShadow: CARD_SHADOW,
          border: CARD_BORDER,
          padding: 14,
          right: 20,
          bottom: -56,
          width: 260,
        }}
      >
        <div
          className="hstack items-center justify-between"
          style={{ fontSize: 12 }}
        >
          <div className="vstack">
            <span style={{ color: "#6b7280", fontSize: 10 }}>
              Workflow Rule
            </span>
            <strong style={{ color: INK }}>Lead Score &gt; 50</strong>
          </div>
          <span
            className="d-inline-block position-relative"
            style={{
              width: 40,
              height: 22,
              borderRadius: 22,
              backgroundColor: GREEN,
            }}
            aria-hidden
          >
            <span
              className="d-inline-block position-absolute rounded-circle"
              style={{
                width: 18,
                height: 18,
                backgroundColor: "#fff",
                right: 2,
                top: 2,
                boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
              }}
            />
          </span>
        </div>
      </div>

      <span
        className="position-absolute cstack rounded-circle"
        style={{
          width: 44,
          height: 44,
          backgroundColor: GREEN,
          color: "#fff",
          left: -12,
          top: -16,
          boxShadow: CARD_SHADOW,
          fontSize: 18,
        }}
        aria-hidden
      >
        ✓
      </span>
    </div>
  );
}

const features = [
  {
    icon: "👤",
    title: "Lead & Contact Management",
    description:
      "Capture, organize, and track leads and contacts in one place to build stronger relationships and never miss an opportunity.",
    mockup: <LeadsMockup />,
    reverse: false,
  },
  {
    icon: "📅",
    title: "Opportunity & Pipeline Management",
    description:
      "Visualize your sales pipeline, track deal progress, and forecast revenue with real-time insights to close more deals.",
    mockup: <PipelineMockup />,
    reverse: true,
  },
  {
    icon: "📊",
    title: "Reports & Analytics",
    description:
      "Get real-time reports and actionable insights to make smarter decisions and drive your business growth.",
    mockup: <ReportsMockup />,
    reverse: false,
  },
  {
    icon: "⚙",
    title: "Workflow & Automation",
    description:
      "Automate repetitive tasks, set up workflows, and save time so your team can focus on what really matters.",
    mockup: <WorkflowMockup />,
    reverse: true,
  },
];

export default function SalesforceServices() {
  return (
    <div
      id="salesforce_services"
      className="salesforce-services section panel overflow-hidden"
    >
      <div className="section-outer panel pt-6 md:pt-8 xl:pt-9 pb-6 md:pb-8 xl:pb-9">
        <div className="container max-w-xl">
          <div
            className="vstack items-center text-center mx-auto mb-5 md:mb-6 xl:mb-7"
            style={{ maxWidth: 820, gap: 10 }}
            data-anime="onview: -200; targets: >*; translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <h2
              className="h3 md:h2 m-0"
              style={{ color: INK, letterSpacing: "-0.5px" }}
            >
              We build, market, and scale your your digital presence
            </h2>
            <p
              className="fs-6 xl:fs-5 m-0"
              style={{ color: INK_MUTED }}
            >
              From high-performing Shopify stores to result-driven marketing
              and social media strategies—we help you attract, engage, and
              convert your audience.
            </p>
          </div>
        </div>

        <div className="container max-w-xl">
          <div className="section-inner panel vstack gap-6 md:gap-8 xl:gap-9">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="row child-cols items-center g-3 md:g-5 xl:g-6"
                data-anime="onview: -150; targets: >*; translateY: [40, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(150, {start: 200});"
              >
                <div
                  className={`col-12 md:col-6 ${
                    f.reverse ? "md:order-2 text-md-end" : ""
                  }`}
                >
                  <div
                    className={`d-flex ${
                      f.reverse ? "justify-end" : "justify-start"
                    }`}
                  >
                    {f.mockup}
                  </div>
                </div>
                <div className={`col-12 md:col-6 ${f.reverse ? "md:order-1" : ""}`}>
                  <FeatureText
                    icon={
                      <span style={{ fontSize: 20 }} aria-hidden>
                        {f.icon}
                      </span>
                    }
                    title={f.title}
                    description={f.description}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
