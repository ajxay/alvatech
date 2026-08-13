import ShopifyLandingClient from "./ShopifyLandingClient";

export const metadata = {
  title: "Shopify Development That Sells | Alvatech",
  description:
    "We design and build Shopify stores around customer psychology, so every page turns a visitor into a buyer — not just a browser. Get a free Shopify consultation.",
  robots: { index: false, follow: false },
};

export default function ShopifyLandingPage() {
  return <ShopifyLandingClient />;
}
