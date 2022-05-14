/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: { domains: ['http://localhost:3000/'] },
    webpack: {
        configure: (config, { env, paths }) => {
            config.module.rules.unshift({
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            svgoConfig: { plugins: [{ removeViewBox: false }] }
                        }
                    }
                ]
            });
            return config;
        }
    }
};
