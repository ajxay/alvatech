"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const GREEN = "#84BA41";
const GREEN_DARK = "#12715b";
const INK = "#0e0e0f";
const INK_MUTED = "rgba(33, 37, 41, 0.7)";

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

function FeatureText({ icon, title, description, linkLabel }) {
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
        alt=""
        className="d-block w-100 h-auto"
      />
    </div>
  );
}

function PipelineMockup() {
  return (
    <div
      className="panel"
      style={{ maxWidth: 520, borderRadius: 14, overflow: "hidden" }}
    >
      <img
        src="/assets/images/services/salesforce/pipeline-management.png"
        alt=""
        className="d-block w-100 h-auto"
      />
    </div>
  );
}

function ReportsMockup() {
  return (
    <div
      className="panel"
      style={{ maxWidth: 520, borderRadius: 14, overflow: "hidden" }}
    >
      <img
        src="/assets/images/services/salesforce/reports-analytics.png"
        alt=""
        className="d-block w-100 h-auto"
      />
    </div>
  );
}

function WorkflowMockup() {
  return (
    <div
      className="panel"
      style={{ maxWidth: 520, borderRadius: 14, overflow: "hidden" }}
    >
      <img
        src="/assets/images/services/salesforce/workflow-automation.png"
        alt=""
        className="d-block w-100 h-auto"
      />
    </div>
  );
}

const featureRows = [
  {
    id: "leads",
    reverse: false,
    iconSrc: "/assets/images/services/salesforce/lead-contact-icon.svg",
    Mockup: LeadsMockup,
  },
  {
    id: "pipeline",
    reverse: true,
    iconSrc: "/assets/images/services/salesforce/pipeline-management-icon.svg",
    Mockup: PipelineMockup,
  },
  {
    id: "reports",
    reverse: false,
    iconSrc: "/assets/images/services/salesforce/report-icon.svg",
    Mockup: ReportsMockup,
  },
  {
    id: "workflow",
    reverse: true,
    iconSrc: "/assets/images/services/salesforce/workflow-automation-icon.svg",
    Mockup: WorkflowMockup,
  },
];

export default function SalesforceServices() {
  const { t } = useTranslation("common");
  const c = "servicePages.common";
  const linkLabel = t(`${c}.letsFindOut`);

  return (
    <div
      id="salesforce_services"
      className="salesforce-services section panel overflow-hidden"
    >
      <div className="section-outer panel pt-6 md:pt-8 xl:pt-9 pb-6 md:pb-8 xl:pb-9">
        <div className="container max-w-xl mt-4 md:mt-6 xl:mt-7 mb-6 md:mb-8 xl:mb-9">
          <div className="section-inner panel vstack gap-6 md:gap-8 xl:gap-9">
            {featureRows.map((f) => {
              const base = `servicePages.salesforce.features.${f.id}`;
              const M = f.Mockup;
              return (
                <div
                  key={f.id}
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
                      <M />
                    </div>
                  </div>
                  <div
                    className={`col-12 md:col-6 ${f.reverse ? "md:order-1" : ""}`}
                  >
                    <FeatureText
                      icon={
                        <img
                          src={f.iconSrc}
                          alt=""
                          style={{ width: 48, height: 48 }}
                        />
                      }
                      title={t(`${base}.title`)}
                      description={t(`${base}.description`)}
                    />
                  </div>
                </div>
              );
            })}
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
                  alt=""
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
                  {t("servicePages.salesforce.features.bottomTitle")}
                </h2>
                <p
                  className="fs-6 lg:fs-5 m-0"
                  style={{ color: INK_MUTED, lineHeight: 1.55 }}
                >
                  {t("servicePages.salesforce.features.bottomBody")}
                </p>

                <div className="row child-cols col-1 sm:col-2 g-3 md:g-4 mt-1">
                  <div>
                    <IntroFeature
                      icon={<span style={{ fontSize: 22 }}>📈</span>}
                      title={t("servicePages.salesforce.features.intro1Title")}
                      description={t(
                        "servicePages.salesforce.features.intro1Desc",
                      )}
                    />
                  </div>
                  <div>
                    <IntroFeature
                      icon={<span style={{ fontSize: 22 }}>👥</span>}
                      title={t("servicePages.salesforce.features.intro2Title")}
                      description={t(
                        "servicePages.salesforce.features.intro2Desc",
                      )}
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
