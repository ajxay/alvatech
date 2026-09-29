/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // The DPA is reachable by direct link only -- it is stamped confidential and
  // nothing on the site links to it. A robots.txt Disallow would publish the
  // path in a file anyone can read; this keeps it out of results instead.
  async headers() {
    return [
      {
        source: "/assets/pdfs/alvatech-data-processing-agreement.pdf",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/blog-details/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      { source: "/page-integrations", destination: "/services", permanent: true },
      {
        source: "/page-development",
        destination: "/services/custom-development-services",
        permanent: true,
      },
      {
        source: "/services/custom-ecommerce-development-services",
        destination: "/services/custom-development-services",
        permanent: true,
      },
      {
        source: "/page-shopify",
        destination: "/services/custom-ecommerce-shopify-development-services",
        permanent: true,
      },
      {
        source: "/services/custom-shopify-development-services",
        destination: "/services/custom-ecommerce-shopify-development-services",
        permanent: true,
      },
      {
        source: "/page-salesforce",
        destination: "/services/Salesforce-consulting-and-implementation",
        permanent: true,
      },
      {
        source: "/page-zoho",
        destination: "/services/zoho-consulting-and-implementation",
        permanent: true,
      },
      {
        source: "/page-erp",
        destination: "/services/crm-and-erp-solutions",
        permanent: true,
      },
      {
        source: "/page-marketing",
        destination: "/services/digital-marketing-services",
        permanent: true,
      },
      { source: "/page-about", destination: "/about-us", permanent: true },
      { source: "/page-contact", destination: "/contact-us", permanent: true },
    ];
  },
};

export default nextConfig;
