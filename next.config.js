/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer2');

const nextConfig = {

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
