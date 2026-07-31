"use client";

import { useTranslation } from "react-i18next";
import SalesforceBrands from "@/components/services/SalesforceBrands";

export default function MarketingTrustStrip() {
  const { t } = useTranslation("common");

  return (
    <div
      id="companies_sponsores"
      className="companies-sponsores marketing-trust-strip section panel overflow-hidden rounded-bottom-3 bg-secondary dark:bg-gray-700 dark:bg-opacity-50"
    >
      <div className="section-outer panel py-3 sm:py-4">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="brands panel vstack gap-2 sm:gap-3 text-center"
              data-anime="onview: -100; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
            >
              <p className="fs-6 sm:fs-5 lg:fs-4 fw-medium m-0">
                {t("servicePages.marketing.trustStrip")}
              </p>
              <div className="block-panel panel marketing-trust-strip__brands">
                <div className="element-brands text-black dark:text-white mask-x">
                  <SalesforceBrands embedded />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .marketing-trust-strip__brands .companies-sponsores.section {
          margin: 0;
          padding: 0;
        }
        .marketing-trust-strip__brands .section-outer {
          padding: 0 !important;
        }
        .marketing-trust-strip__brands .container {
          max-width: none !important;
          padding: 0 !important;
        }
      `}</style>
    </div>
  );
}
