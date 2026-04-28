import React from "react";

const GREEN = "#84BA41";
const GREEN_DARK = "#12715b";
const INK = "#0e0e0f";
const INK_MUTED = "rgba(33, 37, 41, 0.7)";
const CARD_SHADOW = "0 10px 30px rgba(15, 23, 42, 0.08)";
const CARD_BORDER = "1px solid rgba(15, 23, 42, 0.06)";

function IntroFeature({ icon, title, description }) {
  return (
    <div className="vstack gap-1">
      <span
        className="cstack rounded-1-5"
        style={{
          width: 44,
          height: 44,
          backgroundColor: "#eff8e6",
          color: GREEN,
        }}
      >
        {icon}
      </span>
      <h4 className="h5 m-0" style={{ color: INK }}>
        {title}
      </h4>
      <p
        className="m-0"
        style={{ color: INK_MUTED, fontSize: 14, lineHeight: 1.5 }}
      >
        {description}
      </p>
    </div>
  );
}

function FeatureText({ icon, title, description }) {
  return (
    <div className="panel vstack gap-2 max-w-420px">
        <span style={{ fontSize: 48 }} aria-hidden>
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
  return (
    <div
      className="panel"
      style={{
        borderRadius: 14,
        overflow: "hidden",
        maxWidth: 520,
      }}
    >
      <img
        src="/assets/images/services/salesforce/lead-contact-management.png"
        alt="Salesforce lead and contact management"
        className="d-block w-100 h-auto"
      />
    </div>
  );
}

function PipelineMockup() {
  return (
    <div className="panel" style={{ maxWidth: 520, borderRadius: 14, overflow: "hidden" }}>
      <img
        src="/assets/images/services/salesforce/pipeline-management.png"
        alt="Salesforce opportunity and pipeline management"
        className="d-block w-100 h-auto"
      />
    </div>
  );
}

function ReportsMockup() {
  return (
    <div className="panel" style={{ maxWidth: 520, borderRadius: 14, overflow: "hidden" }}>
      <img
        src="/assets/images/services/salesforce/reports-analytics.png"
        alt="Salesforce reports and analytics dashboard"
        className="d-block w-100 h-auto"
      />
    </div>
  );
}

function WorkflowMockup() {
  return (
    <div className="panel" style={{ maxWidth: 520, borderRadius: 14, overflow: "hidden" }}>
      <img
        src="/assets/images/services/salesforce/workflow-automation.png"
        alt="Salesforce workflow and automation"
        className="d-block w-100 h-auto"
      />
    </div>
  );
}

const features = [
  {
    icon: (
      <img
        src="/assets/images/services/salesforce/lead-contact-icon.svg"
        alt=""
        style={{ width: 48, height: 48 }}
      />
    ),
    title: "Lead & Contact Management",
    description:
      "Capture, organize, and track leads and contacts in one place to build stronger relationships and never miss an opportunity.",
    mockup: <LeadsMockup />,
    reverse: false,
  },
  {
    icon: (
      <img
        src="/assets/images/services/salesforce/pipeline-management-icon.svg"
        alt=""
        style={{ width: 48, height: 48 }}
      />
    ),
    title: "Opportunity & Pipeline Management",
    description:
      "Visualize your sales pipeline, track deal progress, and forecast revenue with real-time insights to close more deals.",
    mockup: <PipelineMockup />,
    reverse: true,
  },
  {
    icon: (
      <img
        src="/assets/images/services/salesforce/report-icon.svg"
        alt=""
        style={{ width: 48, height: 48 }}
      />
    ),
    title: "Reports & Analytics",
    description:
      "Get real-time reports and actionable insights to make smarter decisions and drive your business growth.",
    mockup: <ReportsMockup />,
    reverse: false,
  },
  {
    icon: (
      <img
        src="/assets/images/services/salesforce/workflow-automation-icon.svg"
        alt=""
        style={{ width: 48, height: 48 }}
      />
    ),
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
        

        <div className="container max-w-xl mt-4 md:mt-6 xl:mt-7 mb-6 md:mb-8 xl:mb-9">
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
                       f.icon
                    }
                    title={f.title}
                    description={f.description}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container max-w-xl mt-4 md:mt-6 xl:mt-7">
          <div
            className="row child-cols items-center g-4 xl:g-6 mb-6 md:mb-8 xl:mb-9"
            data-anime="onview: -200; targets: >*; translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div className="col-12 lg:col-6">
              <div
                className="panel"
                style={{ borderRadius: 10, overflow: "hidden", maxWidth: 620 }}
              >
                <img
                  src="/assets/images/services/salesforce/crm-business-success.png"
                  alt="Salesforce CRM dashboard"
                  className="d-block w-100 h-auto"
                />
              </div>
            </div>

            <div className="col-12 lg:col-6">
              <div className="vstack gap-3 max-w-520px">
                <h2
                  className="h2 lg:h1 m-0"
                  style={{ color: "#0f1f4c", letterSpacing: "-0.4px" }}
                >
                  Your All-in-One CRM for Business Success
                </h2>
                <p className="fs-6 lg:fs-5 m-0" style={{ color: INK_MUTED, lineHeight: 1.55 }}>
                  Salesforce is your complete CRM solution, designed to streamline your
                  sales, customer service, and marketing efforts. With powerful tools and
                  integrations, you can effortlessly manage customer relationships and drive
                  business growth.
                </p>

                <div className="row child-cols col-1 sm:col-2 g-3 md:g-4 mt-1">
                  <div>
                    <IntroFeature
                      icon={<span style={{ fontSize: 22 }}>📈</span>}
                      title="Enhanced Analytics"
                      description="Leverage deep insights to understand your customers better and create personalized experiences that drive engagement."
                    />
                  </div>
                  <div>
                    <IntroFeature
                      icon={<span style={{ fontSize: 22 }}>👥</span>}
                      title="Effortless Management"
                      description="Manage your entire customer lifecycle with ease, from tracking leads to delivering exceptional customer support."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
