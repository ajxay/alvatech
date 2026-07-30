/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
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
        destination: "/services/custom-ecommerce-development-services",
        permanent: true,
      },
      {
        source: "/page-shopify",
        destination: "/services/custom-shopify-development-services",
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
