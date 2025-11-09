/** @type {import('next').NextConfig} */
const nextConfig = {
    // Use a separate dist directory in dev to avoid Windows file lock
    // issues with .next/trace when multiple processes are present.
    // This prevents EPERM errors seen when another Next process holds
    // a handle to the default .next folder.
    distDir: ".next-dev",
    compiler: {
		styledComponents: true,
	},
    eslint: {
		ignoreDuringBuilds: true,
	},

    // Disable React Strict Mode to prevent double-mount flicker in dev (e.g., marquee)
    reactStrictMode: false,

	webpack: (config, options) => {
		config.resolve = config.resolve || {};
		config.resolve.alias = {
			...(config.resolve.alias || {}),
			// Use Emotion's exported jsx-runtime subpath to satisfy Node package exports
			"react/jsx-runtime": require.resolve("@emotion/react/jsx-runtime"),
			// Shim react-awesome-reveal to local implementation to avoid installing new deps
			"react-awesome-reveal": require.resolve("./components/RevealShim.jsx"),
		};

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
