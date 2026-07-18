"use client";
import Link from "next/link";
import RelatedBlogs from "./RelatedBlogs";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useTranslation } from "react-i18next";
import renderArticleIntro from "./renderArticleIntro";
import { blogsPosts4, localizePost } from "@/data/blogs";

export default function BlogDetails1({ blogItem: rawBlogItem }) {
  const { t, i18n } = useTranslation("common");
  const isSv = i18n.language === "sv";
  const blogItem = localizePost(rawBlogItem, i18n.language);
  const articleId = Number(blogItem?.id);
  const articleSlug = rawBlogItem?.slug || blogItem?.slug;
  const bestAiForShopifyArticle = articleId === 26 && !isSv;
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const currentBlogUrl = `${baseUrl}/blog/${articleSlug}`;
  const encodedBlogUrl = encodeURIComponent(currentBlogUrl);
  const encodedBlogTitle = encodeURIComponent(blogItem?.title || "");
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedBlogUrl}`;
  const xShareUrl = `https://x.com/intent/tweet?url=${encodedBlogUrl}&text=${encodedBlogTitle}`;
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedBlogUrl}`;
  const pinterestShareUrl = `https://pinterest.com/pin/create/button/?url=${encodedBlogUrl}&media=${encodeURIComponent(
    `${baseUrl}${blogItem?.imgSrc || ""}`
  )}&description=${encodedBlogTitle}`;
  const emailShareUrl = `mailto:?subject=${encodedBlogTitle}&body=${encodeURIComponent(
    `Check out this article: ${currentBlogUrl}`
  )}`;
  const currentBlogIndex = blogsPosts4.findIndex((blog) => Number(blog.id) === articleId);
  const hasBlogNavigation = currentBlogIndex !== -1 && blogsPosts4.length > 1;
  const prevBlog = hasBlogNavigation
    ? localizePost(
        blogsPosts4[(currentBlogIndex - 1 + blogsPosts4.length) % blogsPosts4.length],
        i18n.language
      )
    : null;
  const nextBlog = hasBlogNavigation
    ? localizePost(blogsPosts4[(currentBlogIndex + 1) % blogsPosts4.length], i18n.language)
    : null;
  const categoryKey = blogItem?.category
    ? blogItem.category.replace(/\s+/g, "")
    : "Strategy";
  const categoryLabel = t(`blog.categories.${categoryKey}`, {
    defaultValue: blogItem?.category || "",
  });
  const handleCopyLink = async (event) => {
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(currentBlogUrl);
    } catch (error) {
      console.error("Failed to copy link", error);
    }
  };

  return (
    <>
      <div
        style={{ marginTop: "80px" }}
        className="breadcrumbs panel z-1 py-2 bg-secondary dark:bg-gray-100 dark:bg-opacity-5 dark:text-white"
      >
        <div className="container max-w-xl">
          <ul className="breadcrumb nav-x justify-center items-center gap-1 fs-7 m-0 fw-bold">
            <li>
              <Image
                alt="icon"
                className="me-1"
                src="/assets/images/common/icons/home.svg"
                width="18"
                height="18"
              />
            </li>
            <li>
              <Link href={`/`}>{t("blog.home")}</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <Link href={`/blog`}>{t("blog.breadcrumbBlog")}</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <Link href={`/blog-category/${encodeURIComponent(blogItem?.category || "Strategy")}`}>
                {categoryLabel}
              </Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <span className="opacity-50">{blogItem.title}</span>
            </li>
          </ul>
        </div>
      </div>
      <article className="post type-post single-post py-4 lg:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="post-header">
            <div className="panel vstack gap-4 md:gap-6 xl:gap-8 text-center">
              <div className="panel vstack items-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto gap-2 md:gap-3">
                <h1 className="h4 sm:h2 lg:h1 xl:display-6">
                  {blogItem.title}
                </h1>
                <ul className="post-share-icons nav-x gap-1 dark:text-white">
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href={facebookShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Facebook"
                    >
                      <i className="unicon-logo-facebook icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href={xShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on X"
                    >
                      <i className="unicon-logo-x-filled icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href={linkedInShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on LinkedIn"
                    >
                      <i className="unicon-logo-linkedin icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href={pinterestShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Pinterest"
                    >
                      <i className="unicon-logo-pinterest icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href={emailShareUrl}
                      aria-label="Share by email"
                    >
                      <i className="unicon-email icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href={currentBlogUrl}
                      onClick={handleCopyLink}
                      aria-label="Copy article link"
                    >
                      <i className="unicon-link icon-1" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="panel mt-4 lg:mt-6 xl:mt-9">
          <div className="container max-w-lg">
            <Gallery>
              <div
                className="post-content panel fs-6 md:fs-5"
                data-uc-lightbox="animation: scale"
              >
                {renderArticleIntro(articleId, i18n.language)}
                {bestAiForShopifyArticle && <div className="panel mt-3">
                  <figure className="float-end ms-3 mb-1">
                    <Item
                      original="/assets/images/blog/image-0.png"
                      thumbnail="/assets/images/blog/image-0.png"
                      width="1280"
                      height="853"
                    >
                      {({ ref, open }) => (
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 sm:w-300px uc-transition-toggle overflow-hidden">
                          <Image
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            alt="Holding flower, by Anthony Tran"
                            src="/assets/images/blog/image-0.png"
                            width="1280"
                            height="853"
                            ref={ref}
                          />
                          <a
                            onClick={open}
                            className="position-cover"
                            data-caption="Holding flower, by Anthony Tran"
                          ></a>
                        </figure>
                      )}
                    </Item>
                    <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                      AI Tools
                    </figcaption>
                  </figure>
                  <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">Why AI is important for Shopify stores</h4>
                  <p>
                    AI helps store owners automate repetitive tasks while creating more personalized shopping experiences. From AI-generated product descriptions to intelligent customer support chatbots, modern e-commerce businesses are becoming faster, smarter, and more customer-focused.
                    <br /><br />
                    For every Shopify business, AI tools offer benefits such as:
                  </p>
                  <ol>
                    <li>Faster customer support</li>
                    <li>Improved product recommendations</li>
                    <li>Better inventory forecasting</li>
                    <li>Smarter marketing campaigns</li>
                    <li>Improved SEO optimization</li>
                    <li>Higher conversion rate</li>
                  </ol>
                  <p>
                    As competition grows in the online marketplace, strategic use of AI can give your store a significant advantage.
                  </p>

                  <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">Best AI Tools for Shopify Store Owners in 2026</h4>

                  <p className="mt-3">
                    <b>1. ChatGPT for customer support and content</b>
                    <br />
                    AI-powered conversational tools like ChatGPT are quickly becoming a must-have for e-commerce businesses. Store owners use it to create product descriptions, email campaigns, FAQ sections, ad copy, and instant responses in customer support.
                  </p>
                  <ul>
                    <li>Faster content creation</li>
                    <li>Automated customer communication around the clock</li>
                    <li>Personalized product recommendations</li>
                    <li>Better customer engagement</li>
                  </ul>
                  <p>
                    For a growing Shopify store, this can drastically reduce the workload while improving the user experience.
                  </p>

                  <b>2. Klaviyo AI for Email Marketing</b>
                  <br />
                  <p>
                    Email marketing remains one of the most profitable channels in e-commerce. Klaviyo's AI features help businesses analyze customer behaviors and create highly personalized email campaigns.
                  </p>
                  <p>Features include:</p>
                  <ul>
                    <li>Predictive customer segmentation</li>
                    <li>AI-powered product recommendations</li>
                    <li>Automated abandoned cart emails</li>
                    <li>Smart campaign optimisation</li>
                  </ul>
                  <p>
                    A professional Shopify Partner often recommends Klaviyo to brands that want to improve customer loyalty and retention.
                  </p>

                  <b>3. Jasper AI for Product Descriptions</b>
                  <br />
                  <p>
                    Writing product descriptions for hundreds of products can be time-consuming. Jasper AI helps automate the process while maintaining brand tonality and SEO optimization.
                  </p>
                  <p>With Jasper AI, store owners can:</p>
                  <ul>
                    <li>Generate SEO-friendly product content</li>
                    <li>Create captions for social media</li>
                    <li>Write ad copy quickly</li>
                    <li>Maintain a consistent brand voice</li>
                  </ul>
                  <p>
                    This helps Shopify businesses improve their visibility in search engines while saving valuable time.
                  </p>

                  <b>4. Tidio AI Chatbot</b>
                  <br />
                  <p>
                    Customer support can determine the success of an online store. Tidio AI offers intelligent chatbot automation that responds directly to customer questions.
                  </p>
                  <p>Key benefits:</p>
                  <ul>
                    <li>Instant responses via live chat</li>
                    <li>AI-driven kundassistans</li>
                    <li>Reduced cart abandonment</li>
                    <li>Better customer satisfaction</li>
                  </ul>
                  <p>
                    For modern ecommerce brands, fast support is no longer a choice — it's an expectation.
                  </p>

                  <b>5. Prisync for AI-based price optimization</b>
                  <br />
                  <p>
                    Competitive pricing is crucial in e-commerce. Prisync uses AI to monitor competitors' prices and automatically adjust product prices.
                  </p>
                  <p>Features include:</p>
                  <ul>
                    <li>Real-time competitor analysis</li>
                    <li>Dynamic price automation</li>
                    <li>Profit margin optimization</li>
                    <li>Insights into market trends</li>
                  </ul>
                  <p>
                    This tool helps Shopify businesses stay competitive without having to manually follow market changes.
                  </p>

                  <b>6. Surfer SEO for Organic Growth</b>
                  <br />
                  <p>
                    Search engine visibility is still crucial for online stores. Surfer SEO helps optimize blogs, product pages, and category descriptions with AI-powered recommendations.
                  </p>
                  <p>Benefits include:</p>
                  <ul>
                    <li>Keyword Optimization</li>
                    <li>Content scoring and analytics</li>
                    <li>SEO structure suggestions</li>
                    <li>Improved Google rankings</li>
                  </ul>
                  <p>
                    At Alva Tech, SEO-focused content strategies are often integrated with AI tools to help businesses drive organic traffic effectively.
                  </p>

                  <b>How a Shopify Partner helps with AI integration</b>
                  <br />
                  <p>
                    Choosing the right tool is important, but proper integration is what really drives results. A certified Shopify Partner can help businesses identify the best AI solutions based on their goals, target audience, and store size.
                  </p>
                  <p>
                    Services often include:
                  </p>
                  <ul>
                    <li>Integration of AI tools</li>
                    <li>Store optimization</li>
                    <li>Performance and performance tracking</li>
                    <li>Automation set</li>
                    <li>Conversion rate improvement</li>
                    <li>SEO-implementering</li>
                  </ul>
                  <p>
                    With expert guidance, businesses can avoid wasting resources on tools that don't fit their needs.
                  </p>

                  <b>The Future of AI in E-Commerce</b>
                  <br />
                  <p>
                    AI in e-commerce is developing rapidly. In the coming years, online stores are expected to become even more personalized and automated. Features such as AI-generated store layouts, predictive shopping experiences, and voice-controlled commerce are likely to become increasingly common.
                  </p>
                  <p>
                    For any ambitious Shopify business, early adoption of AI can create long-term competitive advantages. Brands that combine creativity with intelligent automation are likely to dominate the future of online retail.
                  </p>

                  <b>Conclusion</b>
                  <br />
                  <p>
                    The e-commerce industry in 2026 is all about working smarter, not harder. AI tools help businesses improve efficiency, deliver better customer experiences, and increase revenue faster than ever before.
                  </p>
                  <p>
                    Whether it's customer support, SEO, marketing, or automation, investing in the right AI solutions can transform your entire online business. Partnering with experts like Alva Tech ensures that your store not only uses modern technology, but uses it strategically for sustainable growth.
                  </p>
                  <p>
                    As a trusted Shopify Partner, Alva Tech helps businesses unlock the full potential of AI-powered e-commerce and build future-proof online stores.
                  </p>
                </div>}
              </div>
            </Gallery>
            <div className="post-footer panel vstack sm:hstack gap-3 justify-between justifybetween border-top py-4 mt-4 xl:py-9 xl:mt-9">
              <ul className="nav-x gap-narrow text-primary">
                <li>
                  <span className="text-black dark:text-white me-narrow">
                    {t("blog.tags")}
                  </span>
                </li>
                <li>
                  <a href="#" className="gap-0">
                    Marketing
                    <span className="text-black dark:text-white">,</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="gap-0">
                    Strategies
                    <span className="text-black dark:text-white">,</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="gap-0">
                    Boost <span className="text-black dark:text-white">,</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="gap-0">
                    Business
                  </a>
                </li>
              </ul>
              <ul className="post-share-icons nav-x gap-narrow">
                <li className="me-1">
                  <span className="text-black dark:text-white">{t("blog.share")}</span>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-logo-facebook icon-1" />
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-logo-x-filled icon-1" />
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-email icon-1" />
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-link icon-1" />
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="post-author panel py-4 px-3 sm:p-3 xl:p-4 bg-gray-25 dark:bg-opacity-5 rounded lg:rounded-2">
              <div className="row g-4 items-center">
                <div className="col-12 sm:col-5 xl:col-3">
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      alt="Amir Nisi"
                      src="/assets/images/blog/post-author.jpg"
                      width="1000"
                      height="667"
                    />
                  </figure>
                </div>
                <div className="col">
                  <div className="panel vstack items-start gap-2 md:gap-3">
                    <h4 className="h5 m-0">Amir Nisi</h4>
                    <p className="fs-6">
                      Creative and experienced content writer with 6+ years of
                      experience eager to create unique content strategy for
                      Alvatech to turn website visitors into customers.
                    </p>
                    <ul className="nav-x gap-1 text-gray-400 dark:text-white">
                      <li>
                        <a href="#medium">
                          <i className="icon-2 unicon-logo-medium" />
                        </a>
                      </li>
                      <li>
                        <a href="#x">
                          <i className="icon-2 unicon-logo-x-filled" />
                        </a>
                      </li>
                      <li>
                        <a href="#instagram">
                          <i className="icon-2 unicon-logo-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
            {hasBlogNavigation && (
              <div className="post-navigation panel vstack sm:hstack justify-between gap-2 mt-8 xl:mt-9 fdr-min-600">
                <div className="new-post panel hstack w-100 sm:w-1/2">
                  <div className="panel hstack justify-center w-100px h-100px">
                    <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                      <Image
                        className="media-cover image uc-transition-scale-up uc-transition-opaque"
                        alt={prevBlog.imgAlt || prevBlog.title}
                        src={prevBlog.imgSrc}
                        width="1280"
                        height="853"
                      />
                      <Link
                        href={`/blog/${prevBlog.slug}`}
                        className="position-cover"
                        data-caption={prevBlog.title}
                      ></Link>
                    </figure>
                  </div>
                  <div className="panel vstack justify-center px-2 gap-1 w-1/3">
                    <span className="fs-7 opacity-60">{t("blog.prevArticle")}</span>
                    <h6 className="h6 lg:h5 m-0">{prevBlog.title}</h6>
                  </div>
                  <Link
                    href={`/blog/${prevBlog.slug}`}
                    className="position-cover"
                  ></Link>
                </div>
                <div className="new-post panel hstack w-100 sm:w-1/2">
                  <div className="panel vstack justify-center px-2 gap-1 w-1/3 text-end rtl:text-start">
                    <span className="fs-7 opacity-60">{t("blog.nextArticle")}</span>
                    <h6 className="h6 lg:h5 m-0">{nextBlog.title}</h6>
                  </div>
                  <div className="panel hstack justify-center w-100px h-100px">
                    <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                      <Image
                        className="media-cover image uc-transition-scale-up uc-transition-opaque"
                        alt={nextBlog.imgAlt || nextBlog.title}
                        src={nextBlog.imgSrc}
                        width="1280"
                        height="853"
                      />
                      <Link
                        href={`/blog/${nextBlog.slug}`}
                        className="position-cover"
                        data-caption={nextBlog.title}
                      ></Link>
                    </figure>
                  </div>
                  <Link
                    href={`/blog/${nextBlog.slug}`}
                    className="position-cover"
                  ></Link>
                </div>
              </div>
            )}
            <div className="post-related panel border-top pt-2 mt-8 xl:mt-9">
              <h4 className="h5 xl:h4 mb-5 xl:mb-6">{t("blog.relatedTopic")}</h4>
              <div className="row child-cols-6 md:child-cols-4 gx-2 gy-4 sm:gx-3 sm:gy-6">
                <RelatedBlogs />
              </div>
            </div>
            
          </div>
        </div>
      </article>
    </>
  );
}