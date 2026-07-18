import "../public/assets/css/main.scss";
import "swiper/css/virtual";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "../public/assets/custom.scss";
import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";

import ClientRootLayout from "@/components/layout/ClientRootLayout";
import {
  GoogleTagManagerBody,
  GoogleTagManagerHead,
} from "@/components/analytics/GoogleTagManager";
import { defaultSiteMetadata } from "@/data/pageMeta";

export const metadata = {
  metadataBase: new URL("https://alvatech.se"),
  ...defaultSiteMetadata,
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv" dir="ltr" suppressHydrationWarning>
      <head>
        <GoogleTagManagerHead />
      </head>
      <body>
        <GoogleTagManagerBody />
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  );
}
