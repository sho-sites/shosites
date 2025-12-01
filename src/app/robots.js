export default function robots() {
	const base =
		process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
		"https://shosites.example";
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: `${base}/sitemap.xml`,
	};
}


