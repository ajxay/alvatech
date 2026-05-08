import React from "react";

const salesforceFacts = [
  { id: 1, value: "16+", description: "Years of Salesforce Experience" },
  { id: 2, value: "400+", description: "Implementations In 23+ Countries" },
  { id: 3, value: "15+", description: "Appexchane Apps Developed" },
];

export default function SalesforceFacts() {
  return (
    <div
      id="salesforce_facts"
      className="salesforce-facts section panel overflow-hidden"
    >
      <div className="section-outer panel pt-4 md:pt-6 xl:pt-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-1 sm:gap-2 mb-4 lg:mb-6 max-w-800px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 md:h2 m-0" style={{ color: "#434243" }}>
                Smart features for your business
              </h2>
              <p
                className="fs-6 xl:fs-5"
                style={{ color: "rgba(67, 66, 67, 0.9)" }}
              >
                
                Our flexible engagement model allows you to tailor your project to your preferences. You retain full control, and our team of Salesforce-certified developers ensures a beneficial outcome.
              </p>
            </div>
            <div
              className="panel p-4 md:p-6 xl:p-7 rounded-2"
              style={{ backgroundColor: "#fff6ee" }}
              data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 300;"
            >
              <div
                className="row child-cols col-match items-center justify-center text-center gy-3 lg:gy-0"
                data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
              >
                {salesforceFacts.map((fact) => (
                  <div key={fact.id}>
                    <div className="fact-item panel vstack gap-1 items-center">
                      <h5
                        className="h2 md:h1 xl:display-4 m-0 fw-bold"
                        style={{ color: "#434243", letterSpacing: "-1.5px" }}
                      >
                        {fact.value}
                      </h5>
                      <p
                        className="fw-bold fs-6 m-0"
                        style={{ color: "#434243" }}
                      >
                        {fact.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
