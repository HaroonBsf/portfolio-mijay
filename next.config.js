/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
    // Use default `.next` during development to avoid Windows permission issues
    distDir: ".next",
	compiler: {
		styledComponents: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},

	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
			type: "asset/resource",
			generator: {
				filename: "static/chunks/[path][name][ext]",
			},
		});

		return config;
	},
};

module.exports = nextConfig;
