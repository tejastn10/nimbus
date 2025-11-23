import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	compress: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.tejastn10.com",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
