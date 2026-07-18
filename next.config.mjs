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
    ];
  },
};

export default nextConfig;
