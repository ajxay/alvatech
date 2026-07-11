"use client";
import { blogsPosts4, localizePost } from "@/data/blogs";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  const { t, i18n } = useTranslation("common");
  const localizedPosts = blogsPosts4.map((p) => localizePost(p, i18n.language));
  return (
    <div className="uc-sidebar panel vstack gap-2 ">
      <div className="widget featured-widget vstack gap-2 lg:gap-4 p-2 py-3 lg:p-4 lg:py-5 rounded-1-5 lg:rounded-2 bg-gray-25 dark:bg-gray-800">
        <div className="widget-title text-center">
          <h5 className="fs-7 m-0">{t("blog.featuredPost")}</h5>
        </div>
        <div className="widget-content mt-2">
          {localizedPosts.slice(0, 1).map((post, index) => (
            <div className="panel text-center" key={index}>
              <div className="ratio ratio-16x9 rounded lg:rounded-1-5 uc-transition-toggle overflow-hidden">
                <Image
                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                  alt={post.imgAlt}
                  src={post.imgSrc}
                  width="768"
                  height="560"
                />
                <Link
                  className="position-cover"
                  data-caption={post.imgAlt}
                  href={`/blog-details/${post.id}`}
                />
              </div>
              <h4 className="h5 mt-3">
                <Link className="text-none" href={`/blog-details/${post.id}`}>
                  {post.title}
                </Link>
              </h4>
              <p className="fs-6">{post.desc}</p>
              <Link
                className="btn btn-text text-primary dark:text-tertiary border-bottom mt-3"
                href={`/blog-details/${post.id}`}
              >
                {t("blog.readMore")}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="widget popular-widget vstack gap-2 p-2 py-3 lg:p-4 lg:py-5 rounded-1-5 lg:rounded-2 bg-gray-25 dark:bg-gray-800">
        <div className="widget-title text-center">
          <h5 className="fs-7 m-0">{t("blog.popularNow")}</h5>
        </div>
        <div className="widget-content">
          <div className="row child-cols-12 gx-4 gy-3 sep-x">
            {localizedPosts.slice(1, 5).map((post, i) => (
              <div key={post.id}>
                <article className="post type-post panel">
                  <div className="row child-cols g-2 lg:g-3">
                    <div>
                      <div className="hstack items-start gap-3">
                        <span className="h3 lg:h2 fst-italic text-center text-primary dark:text-tertiary m-0 min-w-24px">
                          {i + 1}
                        </span>{" "}
                        <div className="post-header panel vstack justify-between gap-1">
                          <h3 className="post-title h6 m-0">
                            <Link
                              className="text-none"
                              href={`/blog-details/${post.id}`}
                            >
                              {post.title}
                            </Link>
                          </h3>
                          <div className="post-meta panel hstack justify-between fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                            <div className="meta">
                              <div className="hstack gap-2">
                                <div>
                                  <div className="post-date hstack gap-narrow">
                                    <span>{post.date}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="widget social-widget vstack gap-2 text-center p-2 py-3 lg:p-4 lg:py-5 rounded-1-5 lg:rounded-2 bg-gray-25 dark:bg-gray-800">
        <div className="widgt-title">
          <h4 className="fs-7 m-0">Follow @Alvatech</h4>
        </div>
        <div className="widgt-content">
          <form className="vstack gap-1">
            <input
              className="form-control form-control-sm fs-6 fw-medium h-40px w-full rounded-pill bg-white dark:bg-gray-800 dark:bg-gray-800 dark:border-white dark:border-opacity-15 dark:border-opacity-15"
              type="email"
              placeholder="Your email"
              required=""
            />
            <button
              className="btn btn-sm btn-primary dark:bg-tertiary dark:text-primary"
              type="submit"
            >
              Sign up
            </button>
          </form>
          <ul className="nav-x justify-center gap-1 mt-3">
            <li>
              <a
                href="#fb"
                className="cstack w-32px h-32px border rounded-circle hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-150"
              >
                <i className="icon icon-1 unicon-logo-facebook" />
              </a>
            </li>
            <li>
              <a
                href="#x"
                className="cstack w-32px h-32px border rounded-circle hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-150"
              >
                <i className="icon icon-1 unicon-logo-x-filled" />
              </a>
            </li>
            <li>
              <a
                href="#in"
                className="cstack w-32px h-32px border rounded-circle hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-150"
              >
                <i className="icon icon-1 unicon-logo-instagram" />
              </a>
            </li>
            <li>
              <a
                href="#yt"
                className="cstack w-32px h-32px border rounded-circle hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-150"
              >
                <i className="icon icon-1 unicon-logo-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
