"use client";

import Context from "@/context/Context";
import Cart from "@/components/common/Cart";
import { useEffect } from "react";
import anime from "animejs";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/headers/component/MobileMenu";
import BacktoTop from "@/components/common/BacktoTop";
import { ParallaxProvider } from "react-scroll-parallax";
import ContactModal from "@/components/modals/ContactModal";
import NewsletterModal from "@/components/modals/NewsletterModal";
import SearchModal from "@/components/modals/SearchModal";
import CookieConsentBanner from "@/components/common/CookieConsentBanner";
import { GoogleTagManager } from "@/components/analytics/GoogleTagManager";
import I18nProvider from "@/components/providers/I18nProvider";
import HtmlLang from "@/components/providers/HtmlLang";

export default function ClientRootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll("[data-anime]");

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const dataAnime = element.getAttribute("data-anime");

          const modifieddataAnime = dataAnime.replace(
            /anime\.stagger\((\d+),\s*\{start:\s*(\d+)\}\)/,
            "$1,$2"
          );

          if (modifieddataAnime) {
            const parseAnimeData = (data) => {
              const settings = {};
              data.split(";").forEach((param) => {
                const [key, value] = param
                  .split(":")
                  .map((item) => item.trim());
                if (key && value) {
                  settings[key] = value;
                }
              });
              return settings;
            };

            const animeSettings = parseAnimeData(modifieddataAnime);

            let targets;
            if (animeSettings.targets === ">*") {
              targets = element.children;
            } else {
              targets = element?.querySelectorAll(animeSettings.targets);
            }

            anime({
              loop: animeSettings.loop ? true : false,
              targets: targets,
              translateX: JSON.parse(animeSettings.translateX || "[0, 0]"),
              translateY: JSON.parse(animeSettings.translateY || "[48, 0]"),
              opacity: [0, 1],
              easing: animeSettings.easing || "spring(1, 80, 10, 0)",
              duration: Number(animeSettings.duration) || 450,
              delay: animeSettings.delay
                ? animeSettings.delay.includes(",")
                  ? anime.stagger(animeSettings.delay.split(",")[0] / 1, {
                      start: animeSettings.delay.split(",")[1] / 1,
                    })
                  : animeSettings.delay / 1
                : 0,
            });

            observer.unobserve(element);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0,
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [pathname]);

  return (
    <Context>
      <I18nProvider>
        <HtmlLang />
        <ParallaxProvider>{children}</ParallaxProvider>
        <MobileMenu />
        <ContactModal />
        <NewsletterModal />
        <SearchModal />
        <Cart />
        <BacktoTop />
        <CookieConsentBanner />
        <GoogleTagManager />
      </I18nProvider>
    </Context>
  );
}
