/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["api.exercisedb.io", "i.ytimg.com", "yt3.ggpht.com"],
		formats: ["image/avif", "image/webp"],
	},
};

module.exports = nextConfig;
