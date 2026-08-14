import { canonicalFor } from "@/data/pageMeta";

import ShopifyLandingClient from "./ShopifyLandingClient";

export const metadata = {
  title: "Shopify Development That Sells | Alvatech",
  description:
    "We design and build Shopify stores around customer psychology, so every page turns a visitor into a buyer — not just a browser. Get a free Shopify consultation.",
  robots: { index: false, follow: false },
  // Without this the page inherits the root layout's alternates and points its
  // canonical at the homepage.
  alternates: canonicalFor("/solutions/ecommerce-development-services"),
};

export default function ShopifyLandingPage() {
  return <ShopifyLandingClient />;
}
