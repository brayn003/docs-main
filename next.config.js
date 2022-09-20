/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode : true,
	swcMinify       : true,
	webpack(config) {
		const newConfig = { ...config };
		newConfig.module.rules.push({
			test : /\.svg$/i,
			use  : [{ loader: '@svgr/webpack' }],
		});
		return config;
	},
};

module.exports = nextConfig;
