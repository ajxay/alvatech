import Header2 from "@/components/headers/Header2";
import Newsletter from "@/components/blog/Newsletter";
import Footer1 from "@/components/footers/Footer1";
import BlogDetails1 from "@/components/blog/BlogDetails1";
import { getBlogBySlug } from "@/data/blogs";
import { canonicalFor, defaultSiteMetadata } from "@/data/pageMeta";
import { notFound, redirect } from "next/navigation";

export async function generateMetadata(props) {
  const params = await props.params;
  const slug = params.slug;
  const blogItem = getBlogBySlug(slug);

  if (!blogItem) {
    return {
      ...defaultSiteMetadata,
      alternates: canonicalFor(`/blog/${slug}`),
    };
  }

  return {
    title:
      blogItem.metaTitleSv ||
      blogItem.metaTitle ||
      blogItem.titleSv ||
      blogItem.title ||
      defaultSiteMetadata.title,
    description:
      blogItem.metaDescriptionSv ||
      blogItem.metaDescription ||
      blogItem.descSv ||
      blogItem.desc ||
      defaultSiteMetadata.description,
    alternates: canonicalFor(`/blog/${blogItem.slug}`),
  };
}

export default async function BlogPostPage(props) {
  const params = await props.params;
  const slug = params.slug;
  const blogItem = getBlogBySlug(slug);

  if (!blogItem) {
    notFound();
  }

  if (String(slug) !== blogItem.slug) {
    redirect(`/blog/${blogItem.slug}`);
  }

  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <BlogDetails1 blogItem={blogItem} />
          <Newsletter />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
