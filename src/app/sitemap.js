export default function sitemap() {
	const base =
		process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
		"https://shosites.example";
	const routes = ["", "/work", "/process", "/faq", "/start", "/about-me"].map((p) => ({
		url: `${base}${p || "/"}`,
		lastModified: new Date().toISOString(),
	}));
	return routes;
}


