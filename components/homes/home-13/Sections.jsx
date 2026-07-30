"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { Observer, ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { blogsPosts4, localizePost } from "@/data/blogs";
import Services from "./Services";
import TechStack from "./TechStack";
import CaseStudies from "./CaseStudies";
import "swiper/css/pagination";
import "./Sections.css";
import Faq from "./Faq";

const trustedLogos = [
  {
    src: "/assets/images/home-13/trust/logo-smile.svg",
    alt: "Smile",
    width: 132,
    height: 29,
  },
  {
    src: "/assets/images/home-13/trust/logo-who.svg",
    alt: "World Health Organization",
    width: 129,
    height: 40,
  },
  {
    src: "/assets/images/home-13/trust/logo-geggamoja.svg",
    alt: "Geggamoja",
    width: 273,
    height: 24,
  },
  {
    src: "/assets/images/home-13/trust/logo-reirei.svg",
    alt: "reirei",
    width: 104,
    height: 36,
  },
  {
    src: "/assets/images/home-13/trust/logo-haier.svg",
    alt: "Haier",
    width: 104,
    height: 40,
  },
  {
    src: "/assets/images/home-13/trust/logo-smile-boutique.svg",
    alt: "Smile Boutique",
    width: 89,
    height: 40,
  },
  {
    src: "/assets/images/home-13/trust/logo-home-therapy.svg",
    alt: "Home Therapy",
    width: 91,
    height: 41,
  },
  {
    src: "/assets/images/home-13/trust/logo-cox-kings.svg",
    alt: "Cox and Kings",
    width: 154,
    height: 40,
  },
];

const integrationCardLayout = [
  {
    id: "shopify",
    icon: "/assets/images/integrations/shopify-2.png",
    iconWidth: 42,
    iconHeight: 42,
  },
  {
    id: "custom",
    icon: "/assets/images/home-13/integrations/custom-development.png",
    iconWidth: 48,
    iconHeight: 48,
  },
  {
    id: "marketing",
    icon: "/assets/images/home-13/integrations/marketing.png",
    iconWidth: 67,
    iconHeight: 40,
  },
  {
    id: "salesforce",
    icon: "/assets/images/home-13/integrations/salesforce-crm.png",
    iconWidth: 51,
    iconHeight: 36,
  },
  {
    id: "erp",
    icon: "/assets/images/home-13/integrations/erp-solutions.png",
    iconWidth: 55,
    iconHeight: 55,
  },
  {
    id: "zoho",
    icon: "/assets/images/home-13/integrations/zoho-crm.png",
    iconWidth: 91,
    iconHeight: 40,
  },
];

const seamlessCards = [
  {
    step: "01",
    i18nKey: "discover",
    iconAsset: "/assets/images/home-13/seamless/search-icon.svg",
    iconOffsetX: -52,
    iconOffsetY: -95,
    iconBgDark: true,
    preview: "/assets/images/home-13/seamless/discover.png",
  },
  {
    step: "02",
    i18nKey: "design",
    iconOffsetX: -114,
    iconOffsetY: -95,
    iconShiftX: -4,
    iconShiftY: 3,
    preview: "/assets/images/home-13/seamless/design.png",
  },
  {
    step: "03",
    i18nKey: "develop",
    iconOffsetX: -184,
    iconOffsetY: -95,
    preview: "/assets/images/home-13/seamless/develop.png",
  },
  {
    step: "04",
    i18nKey: "testLaunch",
    iconOffsetX: -250,
    iconOffsetY: -95,
    preview: "/assets/images/home-13/seamless/test-launch.png",
  },
  {
    step: "05",
    i18nKey: "integrate",
    iconAsset: "/assets/images/home-13/seamless/integrate-icon.png",
    preview: "/assets/images/home-13/seamless/integrate.png",
  },
];

const marketplaceMigrationRows = [
  [
    {
      name: "Vendre",
      logo: "/assets/images/home-13/marketplaces/vendre.png",
      width: 16,
      height: 16,
    },
    {
      name: "Norce",
      logo: "/assets/images/home-13/marketplaces/norce.png",
      width: 49,
      height: 14,
    },
    {
      name: "Kodmyran",
      logo: "/assets/images/home-13/marketplaces/kodmyran.png",
      width: 50,
      height: 16,
    },
    {
      name: "Magento",
      logo: "/assets/images/home-13/marketplaces/magento.png",
      width: 16,
      height: 16,
    },
  ],
  [
    {
      name: "Centra",
      logo: "/assets/images/home-13/marketplaces/centra.png",
      width: 50,
      height: 16,
    },
    {
      name: "Abicart",
      logo: "/assets/images/home-13/marketplaces/abicart.png",
      width: 51,
      height: 16,
    },
    {
      name: "Woocommerce",
      logo: "/assets/images/home-13/marketplaces/woocommerce.png",
      width: 27,
      height: 16,
    },
  ],
];

const marketplacePayment = [
  {
    name: "Qliro",
    logo: "/assets/images/home-13/marketplaces/qliro.png",
    width: 26,
    height: 16,
  },
  {
    name: "Klarna",
    logo: "/assets/images/home-13/marketplaces/klarna.png",
    width: 18,
    height: 18,
  },
  {
    name: "Swish",
    logo: "/assets/images/home-13/marketplaces/swish.png",
    width: 18,
    height: 18,
  },
  {
    name: "Vipps",
    logo: "/assets/images/home-13/marketplaces/vipps.png",
    width: 16,
    height: 16,
  },
  {
    name: "Paypal",
    logo: "/assets/images/home-13/marketplaces/paypal.png",
    width: 16,
    height: 16,
  },
];

const marketplaceShipping = [
  {
    name: "PostNord",
    logo: "/assets/images/home-13/marketplaces/postnord.png",
    width: 16,
    height: 16,
  },
  {
    name: "DHL",
    logo: "/assets/images/home-13/marketplaces/dhl.png",
    width: 18,
    height: 18,
  },
  {
    name: "Budbee",
    logo: "/assets/images/home-13/marketplaces/budbee.png",
    width: 56,
    height: 14,
  },
  {
    name: "Instabox",
    logo: "/assets/images/home-13/marketplaces/instabox.png",
    width: 16,
    height: 16,
  },
  {
    name: "Nshift",
    logo: "/assets/images/home-13/marketplaces/nshift.png",
    width: 54,
    height: 14,
  },
];

const marketplaceRows = [
  [
    {
      name: "Zalando",
      logo: "/assets/images/home-13/marketplaces/zalando.png",
      width: 19,
      height: 20,
    },
    {
      name: "Amazon",
      logo: "/assets/images/home-13/marketplaces/amazon.png",
      width: 26,
      height: 20,
    },
    {
      name: "CDON",
      logo: "/assets/images/home-13/marketplaces/cdon.png",
      width: 40,
      height: 13,
    },
    {
      name: "ASOS",
      logo: "/assets/images/home-13/marketplaces/asos.png",
      width: 56,
      height: 16,
    },
  ],
  [
    {
      name: "Bol",
      logo: "/assets/images/home-13/marketplaces/bol.png",
      width: 42,
      height: 16,
    },
    {
      name: "Elkjop",
      logo: "/assets/images/home-13/marketplaces/elkjop.png",
      width: 44,
      height: 16,
    },
    {
      name: "Ellos",
      logo: "/assets/images/home-13/marketplaces/ellos.png",
      width: 36,
      height: 16,
    },
    {
      name: "Zalando",
      logo: "/assets/images/home-13/marketplaces/zalando.png",
      width: 19,
      height: 20,
    },
  ],
];

const valueCardLayout = [
  {
    id: "impact",
    icon: "/assets/images/home-13/values/impact.png",
    iconWidth: 100,
    iconHeight: 100,
  },
  {
    id: "learn",
    icon: "/assets/images/home-13/values/learn.png",
    iconWidth: 73,
    iconHeight: 82,
  },
  {
    id: "clientFirst",
    icon: "/assets/images/home-13/values/empathy.png",
    iconWidth: 80,
    iconHeight: 64,
  },
];

const statsLayout = [
  { labelKey: "home13.stats.experts", value: "70+ " },
  { labelKey: "home13.stats.support", value: "24x7" },
  { labelKey: "home13.stats.implementations", value: "400+" },
  { labelKey: "home13.stats.experience", value: "16+" },
];

const getBlogPosts = (language) =>
  blogsPosts4.slice(0, 3).map((rawPost) => {
    const post = localizePost(rawPost, language);
    return {
      id: post.id,
      slug: post.slug,
      category: post.category,
      title: post.title,
      excerpt: post.desc,
      date: post.date,
      author: post.authorName,
      image: post.imgSrc,
      authorImageSrc: post.authorImg,
    };
  });

const trustLogos = [
  {
    src: "/assets/images/home-13/trust/review-1563.png",
    alt: "Bonbelle",
    w: 211,
    h: 37,
  },
  {
    src: "/assets/images/home-13/trust/review-asset18.png",
    alt: "Smile",
    w: 127,
    h: 28,
  },
  {
    src: "/assets/images/home-13/trust/review-asset4.png",
    alt: "Tincleton Solar and Nera Electrical",
    w: 401,
    h: 48,
  },
  {
    src: "/assets/images/home-13/trust/review-asset11.png",
    alt: "Geggamoja",
    w: 264,
    h: 23,
  },
  {
    src: "/assets/images/home-13/trust/review-1564.png",
    alt: "Kit & Kin",
    w: 161,
    h: 28,
  },
  {
    src: "/assets/images/home-13/trust/review-1561.png",
    alt: "Morning Owl",
    w: 84,
    h: 45,
  },
  {
    src: "/assets/images/home-13/trust/review-asset12.png",
    alt: "reirei",
    w: 96,
    h: 33,
  },
];

export const team = [
  {
    name: "MONICA LANDBERG",
    roleKey: "CEO",
    image: "/assets/images/home-13/team/monica-landberg.png",
  },
  {
    name: "ANDERS LANDBERG",
    roleKey: "COO",
    image: "/assets/images/home-13/team/andres-landberg.png",
  },
  {
    name: "NIKHIL KHETAN",
    roleKey: "CTO",
    image: "/assets/images/home-13/team/nikhil-khetan.png",
  },
  {
    name: "ANTON RANDAHL",
    roleKey: "CFO",
    image: "/assets/images/home-13/team/andre-randahl.png",
  },
  {
    name: "MANISH KUMAR",
    roleKey: "techLead",
    image: "/assets/images/home-13/team/manish-kumar.png",
  },
  {
    name: "ASHISH RANJAN",
    roleKey: "marketingLead",
    image: "/assets/images/home-13/team/ashish-ranjan.png",
  },
  {
    name: "LUICY",
    roleKey: "leadOfFun",
    image: "/assets/images/home-13/team/luicy.png",
  },
  {
    name: "MOOLY",
    roleKey: "directorOfJoy",
    image: "/assets/images/home-13/team/mooly.png",
  },
];

export default function Sections() {
  const { t, i18n } = useTranslation("common");
  const blogPosts = getBlogPosts(i18n.language);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Observer);
    const mm = gsap.matchMedia();

    mm.add("(max-width: 767.98px)", () => {
      const root = document.querySelector(
        "#marketplaces .home13-marketplaces__mobile",
      );
      if (!root) return () => {};

      const cardsStage = root.querySelector(".home13-marketplaces__cards");
      const cards = gsap.utils.toArray(
        root.querySelectorAll(".home13-mkt-card"),
      );
      if (!cardsStage || cards.length !== 4) return () => {};

      const duration = 0.5;
      let animating = false;
      const stageHeight = cardsStage.offsetHeight || window.innerHeight;
      const enterFromY = stageHeight + 40;

      gsap.set(cards, {
        y: (index) => (index === 0 ? 0 : enterFromY),
        transformOrigin: "center top",
      });

      const tl = gsap.timeline({ paused: true });
      tl.add("card2");
      tl.to(cards[0], { scale: 0.92, duration });
      tl.to(cards[1], { y: 0, duration }, "<");

      tl.add("card3");
      tl.to(cards[1], { scale: 0.94, duration });
      tl.to(cards[2], { y: 0, duration }, "<");

      tl.add("card4");
      tl.to(cards[2], { scale: 0.96, duration });
      tl.to(cards[3], { y: 0, duration }, "<");

      // Keep a final step so last card has its own settle state.
      tl.add("card5");
      tl.to(cards[3], { scale: 0.98, duration: duration * 0.8 });

      function tweenToLabel(direction, isScrollingDown) {
        if (
          (!tl.nextLabel() && isScrollingDown) ||
          (!tl.previousLabel() && !isScrollingDown)
        ) {
          cardsObserver.disable();
          return;
        }
        if (!animating && direction) {
          animating = true;
          tl.tweenTo(direction, { onComplete: () => (animating = false) });
        }
      }

      const cardsObserver = Observer.create({
        wheelSpeed: -1,
        onDown: () => tweenToLabel(tl.previousLabel(), false),
        onUp: () => tweenToLabel(tl.nextLabel(), true),
        tolerance: 10,
        preventDefault: true,
        onEnable(self) {
          const savedScroll = self.scrollY();
          self._restoreScroll = () => self.scrollY(savedScroll);
          document.addEventListener("scroll", self._restoreScroll, {
            passive: false,
          });
        },
        onDisable: (self) => {
          document.removeEventListener("scroll", self._restoreScroll);
        },
      });

      cardsObserver.disable();

      const trigger = ScrollTrigger.create({
        trigger: root,
        pin: true,
        start: "top 20%",
        end: "+=60",
        onEnter: () => !cardsObserver.isEnabled && cardsObserver.enable(),
        onEnterBack: () => !cardsObserver.isEnabled && cardsObserver.enable(),
        onLeave: () => cardsObserver.disable(),
        onLeaveBack: () => cardsObserver.disable(),
      });

      return () => {
        trigger.kill();
        cardsObserver.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      <section className="home13-section home13-seamless">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <header className="home13-header">
            <h2>{t("home13.seamless.title")}</h2>
            <p>{t("home13.seamless.subtitle")}</p>
          </header>
          <Swiper
            className="home13-seamless__carousel"
            modules={[Pagination]}
            spaceBetween={12}
            slidesPerView={1.1}
            pagination={{ clickable: true }}
            breakpoints={{
              576: { slidesPerView: 2, spaceBetween: 12 },
              992: { slidesPerView: 3, spaceBetween: 12 },
              1200: { slidesPerView: 4, spaceBetween: 12 },
            }}
          >
            {seamlessCards.map((item) => {
              const cardTitle = t(
                `home13.seamless.cards.${item.i18nKey}.title`,
              );
              return (
                <SwiperSlide key={item.i18nKey}>
                  <article className="home13-seamless__card">
                    <div className="home13-seamless__head">
                      <span className="home13-seamless__step">{item.step}</span>
                      <span
                        className={`home13-seamless__icon-wrap${
                          item.iconBgDark ? " is-dark" : ""
                        }`}
                      >
                        {item.iconAsset ? (
                          <Image
                            src={item.iconAsset}
                            alt=""
                            width={24}
                            height={24}
                            aria-hidden="true"
                          />
                        ) : (
                          <span
                            className="home13-seamless__icon-sprite"
                            style={{
                              backgroundPosition: `${item.iconOffsetX}px ${item.iconOffsetY}px`,
                              transform: `translate(${item.iconShiftX || 0}px, ${item.iconShiftY || 0}px)`,
                            }}
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </div>
                    <h3>{cardTitle}</h3>
                    <p>{t(`home13.seamless.cards.${item.i18nKey}.text`)}</p>
                    <div className="home13-seamless__preview">
                      <Image
                        src={item.preview}
                        alt={t("home13.seamless.previewAlt", {
                          title: cardTitle,
                        })}
                        width={262}
                        height={126}
                      />
                    </div>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Services />
          <div id="marketplaces" className="home13-marketplaces">
            <header className="home13-marketplaces__header">
              <h3>{t("home13.marketplaces.title")}</h3>
              <p>{t("home13.marketplaces.subtitle")}</p>
            </header>
            <div className="home13-marketplaces__desktop">
              <article className="home13-marketplaces__block home13-marketplaces__block--top">
                <h4>{t("home13.marketplaces.migrateTitle")}</h4>
                <div className="home13-marketplaces__rows">
                  {marketplaceMigrationRows.map((row, rowIndex) => (
                    <div
                      key={`migration-row-${rowIndex}`}
                      className="home13-marketplaces__row"
                    >
                      {row.map((item) => (
                        <div
                          key={item.name}
                          className="home13-marketplaces__row-item"
                        >
                          <Image
                            src={item.logo}
                            alt=""
                            width={item.width}
                            height={item.height}
                            aria-hidden="true"
                          />
                          <span>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </article>

              <div className="home13-marketplaces__middle">
                <article className="home13-marketplaces__block home13-marketplaces__block--side">
                  <h4>{t("home13.marketplaces.paymentTitle")}</h4>
                  <div className="home13-marketplaces__list">
                    {marketplacePayment.map((item) => (
                      <div
                        key={item.name}
                        className="home13-marketplaces__list-item"
                      >
                        <Image
                          src={item.logo}
                          alt=""
                          width={item.width}
                          height={item.height}
                          aria-hidden="true"
                        />
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </article>

                <div className="home13-marketplaces__hub">
                  <span
                    className="home13-marketplaces__axis home13-marketplaces__axis--horizontal"
                    aria-hidden="true"
                  />
                  <span
                    className="home13-marketplaces__axis home13-marketplaces__axis--vertical"
                    aria-hidden="true"
                  />
                  <span
                    className="home13-marketplaces__dot home13-marketplaces__dot--left"
                    aria-hidden="true"
                  />
                  <span
                    className="home13-marketplaces__dot home13-marketplaces__dot--top"
                    aria-hidden="true"
                  />
                  <span
                    className="home13-marketplaces__dot home13-marketplaces__dot--right"
                    aria-hidden="true"
                  />
                  <span
                    className="home13-marketplaces__dot home13-marketplaces__dot--bottom"
                    aria-hidden="true"
                  />
                  <div className="home13-marketplaces__hub-ring" />
                  <div className="home13-marketplaces__hub-core">
                    <Image
                      src="/assets/images/home-13/marketplaces/shopify-center.png"
                      alt="Shopify"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>

                <article className="home13-marketplaces__block home13-marketplaces__block--side">
                  <h4>{t("home13.marketplaces.shippingTitle")}</h4>
                  <div className="home13-marketplaces__list">
                    {marketplaceShipping.map((item) => (
                      <div
                        key={item.name}
                        className="home13-marketplaces__list-item"
                      >
                        <Image
                          src={item.logo}
                          alt=""
                          width={item.width}
                          height={item.height}
                          aria-hidden="true"
                        />
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </div>

              <article className="home13-marketplaces__block home13-marketplaces__block--bottom">
                <h4>{t("home13.marketplaces.marketplaceTitle")}</h4>
                <div className="home13-marketplaces__rows">
                  {marketplaceRows.map((row, rowIndex) => (
                    <div
                      key={`marketplace-row-${rowIndex}`}
                      className="home13-marketplaces__row"
                    >
                      {row.map((item, itemIndex) => (
                        <div
                          key={`${item.name}-${itemIndex}`}
                          className="home13-marketplaces__row-item"
                        >
                          <Image
                            src={item.logo}
                            alt=""
                            width={item.width}
                            height={item.height}
                            aria-hidden="true"
                          />
                          <span>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <div className="home13-marketplaces__mobile">
              <div className="home13-marketplaces__cards-section">
                <div className="home13-marketplaces__cards">
                  <article className="home13-marketplaces__block home13-marketplaces__block--top home13-mkt-card">
                    <h4>{t("home13.marketplaces.migrateTitle")}</h4>
                    <div className="home13-marketplaces__rows">
                      {marketplaceMigrationRows.map((row, rowIndex) => (
                        <div
                          key={`migration-row-mobile-${rowIndex}`}
                          className="home13-marketplaces__row"
                        >
                          {row.map((item) => (
                            <div
                              key={item.name}
                              className="home13-marketplaces__row-item"
                            >
                              <Image
                                src={item.logo}
                                alt=""
                                width={item.width}
                                height={item.height}
                                aria-hidden="true"
                              />
                              <span>{item.name}</span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </article>

                  <article className="home13-marketplaces__block home13-marketplaces__block--side home13-mkt-card">
                    <h4>{t("home13.marketplaces.paymentTitle")}</h4>
                    <div className="home13-marketplaces__list">
                      {marketplacePayment.map((item) => (
                        <div
                          key={item.name}
                          className="home13-marketplaces__list-item"
                        >
                          <Image
                            src={item.logo}
                            alt=""
                            width={item.width}
                            height={item.height}
                            aria-hidden="true"
                          />
                          <span>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </article>

                  <article className="home13-marketplaces__block home13-marketplaces__block--side home13-mkt-card">
                    <h4>{t("home13.marketplaces.shippingTitle")}</h4>
                    <div className="home13-marketplaces__list">
                      {marketplaceShipping.map((item) => (
                        <div
                          key={item.name}
                          className="home13-marketplaces__list-item"
                        >
                          <Image
                            src={item.logo}
                            alt=""
                            width={item.width}
                            height={item.height}
                            aria-hidden="true"
                          />
                          <span>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </article>

                  <article className="home13-marketplaces__block home13-marketplaces__block--bottom home13-mkt-card">
                    <h4>{t("home13.marketplaces.marketplaceTitle")}</h4>
                    <div className="home13-marketplaces__rows">
                      {marketplaceRows.map((row, rowIndex) => (
                        <div
                          key={`marketplace-row-mobile-${rowIndex}`}
                          className="home13-marketplaces__row"
                        >
                          {row.map((item, itemIndex) => (
                            <div
                              key={`${item.name}-${itemIndex}`}
                              className="home13-marketplaces__row-item"
                            >
                              <Image
                                src={item.logo}
                                alt=""
                                width={item.width}
                                height={item.height}
                                aria-hidden="true"
                              />
                              <span>{item.name}</span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>

          <div className="home13-techstack__trust">
            <div className="home13-techstack__trust-head">
              <h3>{t("home13.techStack.trustTitle")}</h3>
              <p className="home13-techstack__trust-sub">
                {t("home13.techStack.trustReviews")}
              </p>
            </div>
            <div className="home13-techstack__trust-logos">
              {trustLogos.map((logo) => (
                <span
                  key={logo.src}
                  className="home13-techstack__trust-logo"
                  style={{ width: `${logo.w}px` }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.w}
                    height={logo.h}
                  />
                </span>
              ))}
            </div>
          </div>
          <TechStack />
          <CaseStudies />
        </div>
      </section>

      <section className="home13-section home13-posts">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <header className="home13-header home13-posts__header">
            <h2>{t("home13.posts.title")}</h2>
          </header>
          <div className="row child-cols-12 sm:child-cols-4 col-match gy-4 sm:gy-6 gx-2 xl:gx-4">
            {blogPosts.map((post) => (
              <div key={post.id}>
                <article
                  className="post type-post panel vstack gap-3 rounded-3 p-2 pb-3 bg-white dark:bg-gray-800"
                  style={{
                    border: "1px solid #e9ecf1",
                    boxShadow: "0 8px 24px rgba(17, 24, 39, 0.06)",
                  }}
                >
                  <figure className="featured-image m-0 rounded ratio ratio-3x2 rounded-2 uc-transition-toggle overflow-hidden">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      src={post.image}
                      width={1280}
                      height={853}
                      alt={post.title}
                    />
                    <Link
                      href={`/blog/${post.slug}`}
                      className="position-cover"
                      data-caption={post.title}
                    ></Link>
                  </figure>
                  <header
                    className="panel vstack items-center gap-1 lg:gap-2 px-2"
                    style={{ flex: "1 1 auto" }}
                  >
                    <Link
                      className="fs-7 fw-bold text-none text-white py-narrow px-1"
                      href={`/blog-category/${post.category}`}
                      style={{ borderRadius: 8, backgroundColor: "#86BC40" }}
                    >
                      {post.category}
                    </Link>
                    <h3
                      className="h5 xl:h4 m-0 text-center"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        minHeight: "2.4em",
                      }}
                    >
                      <Link className="text-none" href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <ul
                      className="post-meta nav-x ft-tertiary justify-center gap-1 fs-7 text-gray-400 dark:text-gray-300 d-none lg:d-flex"
                      style={{ marginTop: "auto" }}
                    >
                      <li>
                        <div className="hstack gap-narrow ft-tertiary">
                          <Image
                            src={post.authorImageSrc}
                            width={150}
                            height={150}
                            alt={post.author}
                            className="w-24px h-24px rounded-circle me-narrow"
                          />
                          <Link
                            href={`/blog-author/${post.author}`}
                            className="text-none fw-bold text-dark dark:text-white"
                          >
                            {post.author}
                          </Link>
                        </div>
                      </li>
                      <li className="opacity-50">•</li>
                      <li>
                        <div className="post-date hstack gap-narrow">
                          <span>{post.date}</span>
                        </div>
                      </li>
                    </ul>
                  </header>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq />

      <section className="home13-section">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="home13-cta">
            <Image
              src="/assets/images/home-13/cta/left-figure.png"
              alt=""
              width={195}
              height={253}
              className="home13-cta__figure home13-cta__figure--left"
            />
            <Image
              src="/assets/images/home-13/cta/sparkle-left.png"
              alt=""
              width={29}
              height={29}
              className="home13-cta__sparkle home13-cta__sparkle--left"
            />
            <div className="home13-cta__content">
              <h2>
                {t("home13.cta.titleTop")}
                <br />
                {t("home13.cta.titleBottom")}
              </h2>
              <p>{t("home13.cta.subtitle")}</p>
              <Link href="/contact-us" className="home13-cta__button">
                {t("home13.cta.button")}
              </Link>
            </div>
            <Image
              src="/assets/images/home-13/cta/right-figure.png"
              alt=""
              width={278}
              height={309}
              className="home13-cta__figure home13-cta__figure--right"
            />
            <Image
              src="/assets/images/home-13/cta/sparkle-right.png"
              alt=""
              width={34}
              height={34}
              className="home13-cta__sparkle home13-cta__sparkle--right"
            />
          </div>
        </div>
      </section>
    </>
  );
}
