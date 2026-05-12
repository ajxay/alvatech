"use client";

import { useTranslation } from "react-i18next";
import SalesforceBrands from "@/components/services/SalesforceBrands";

export default function MarketingTrustStrip() {
  const { t } = useTranslation("common");

  return (
    <div
      id="companies_sponsores"
      className="companies-sponsores section panel overflow-hidden rounded-bottom-3 bg-secondary dark:bg-gray-700 dark:bg-opacity-50"
    >
      <div className="section-outer panel pb-4 sm:pb-8 xl:pb-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="brands panel vstack gap-3 sm:gap-4 xl:gap-5 text-center"
              data-anime="onview: -100; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
            >
              <p className="fs-6 sm:fs-5 lg:fs-4 xl:fs-3 fw-medium">
                {t("servicePages.marketing.trustStrip")}
              </p>
              <div className="block-panel panel">
                <div className="element-brands text-black dark:text-white mask-x">
                  <SalesforceBrands />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
