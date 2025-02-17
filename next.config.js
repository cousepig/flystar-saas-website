/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer2');

// const { i18n } = require('./next-i18next.config.js')

const nextConfig = {
    async redirects() {
        return [
          // Basic redirect
          {
            source: '/',
            destination: '/en/',
            permanent: true,
          },
          {
            source: '/:locale/products/microphone',
            destination: '/:locale/product/microphone/product-wm3',
            permanent: true,
          },
          {
            source: '/:locale/products/mixer',
            destination: '/:locale/product/mixer/product-d-quick2',
            permanent: true,
          },
          {
            source: '/:locale/products/processor',
            destination: '/:locale/product/processor/product-dmatch2-6',
            permanent: true,
          },
          {
            source: '/:locale/products/electronics',
            destination: '/:locale/product/electronics/product-gp820',
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

