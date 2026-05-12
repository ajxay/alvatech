"use client";

import { useTranslation } from "react-i18next";
import Brands from "@/components/common/Brands2";

export default function TrustedByBrands() {
  const { t } = useTranslation("common");

  return (
    <div
      id="clients_brands"
      className="clients-brands section panel overflow-hidden"
    >
      <div className="section-outer panel pt-6 pb-8 sm:pt-8 sm:pb-9 xl:py-9">
        <h5
          className="h6 sm:h5 text-center mb-4 sm:mb-6 xl:mb-8"
          data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
        >
          {t("pages.integrations.trustedBrands")}
        </h5>
        <div
          className="block-panel panel"
          data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
        >
          <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
            <Brands />
          </div>
        </div>
      </div>
    </div>
  );
}
