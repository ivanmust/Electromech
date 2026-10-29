// STATIC_EXPORT=1 builds plain HTML into ./out for the IIS site.
// The .tsx-only pageExtensions skips app/api route handlers, which can't be exported;
// the products page already falls back to a direct wa.me link without the API.
const isStaticExport = process.env.STATIC_EXPORT === '1';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Production optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Standalone output for Docker deployments; static export for IIS
  output: isStaticExport ? 'export' : 'standalone',
  trailingSlash: isStaticExport,
  ...(isStaticExport && { pageExtensions: ['tsx', 'jsx'] }),
};

export default nextConfig;
