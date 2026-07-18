import Header2 from "@/components/headers/Header2";
import Newsletter from "@/components/blog/Newsletter";
import Footer1 from "@/components/footers/Footer1";
import BlogDetails2 from "@/components/blog/BlogDetails2";
import { allBlogs } from "@/data/blogs";
import { canonicalFor, defaultSiteMetadata } from "@/data/pageMeta";

export async function generateMetadata(props) {
  const params = await props.params;
  return {
    ...defaultSiteMetadata,
    alternates: canonicalFor(`/blog-details-2/${params.id}`),
  };
}

export default async function BlogDetailsPage2(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" style={{ marginTop: "80px" }} className="wrap">
          <BlogDetails2 blogItem={blogItem} />
          <Newsletter />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
