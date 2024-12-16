/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer2');

const nextConfig = {
    async redirects() {
        return [
          // Basic redirect
          {
            source: '/products/microphone',
            destination: '/product/microphone/product-wm3',
            permanent: true,
          },
          {
            source: '/products/mixer',
            destination: '/product/mixer/product-d-quick2',
            permanent: true,
          },
          {
            source: '/products/processor',
            destination: '/product/processor/product-dmatch2-6',
            permanent: true,
          },
          {
            source: '/products/electronics',
            destination: '/product/electronics/product-gp820',
            permanent: true,
          },
          // Wildcard path matching
          {
            source: '/blog/:slug',
            destination: '/news/:slug',
            permanent: true,
          },
        ]
      },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    }
}
module.exports = withContentlayer(nextConfig)
// module.exports = nextConfig
