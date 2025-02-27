import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	compress: true,
	images: {
		domains: ["www.tejastn10.com"],
	},
};

export default nextConfig;
