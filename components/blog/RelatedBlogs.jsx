"use client";
import { blogsPosts4, localizePost } from "@/data/blogs";
import { useTranslation } from "react-i18next";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function RelatedBlogs() {
  const { i18n } = useTranslation("common");
  const localizedPosts = blogsPosts4.map((p) => localizePost(p, i18n.language));
  return (
    <>
      {localizedPosts.slice(2, 5).map((elm, i) => (
        <div key={i}>
          <article className="post type-post panel vstack gap-2">
            <figure className="featured-image m-0 rounded ratio ratio-4x3 uc-transition-toggle overflow-hidden">
              <Image
                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                src={elm.imgSrc}
                width={1280}
                height={853}
                alt="How can marketing help your business?"
              />
              <Link
                href={`/blog/${elm.slug}`}
                className="position-cover"
                data-caption="How can marketing help your business?"
              ></Link>
            </figure>
            <header className="panel vstack gap-1">
              <h5 className="h6 sm:h5 md:h4 m-0">
                <Link className="text-none" href={`/blog/${elm.slug}`}>
                  {elm.title}
                </Link>
              </h5>
              <div className="post-date hstack gap-narrow fs-7 opacity-60">
                <span>{elm.date}</span>
              </div>
            </header>
          </article>
        </div>
      ))}
    </>
  );
}
