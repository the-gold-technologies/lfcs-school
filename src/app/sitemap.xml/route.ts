import { getPage, getSite, type PageSlug } from "@/lib/content";
import { absoluteUrl, PAGE_ROUTES } from "@/lib/seo";

const xmlEscape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

// Serves the XML uploaded in CMS → SEO Management → Sitemap & Robots when present; otherwise
// lists every page not marked "noindex" in CMS Page SEO. Disabled from CMS Sitemap settings.
export async function GET() {
  const site = await getSite();
  if (!site.sitemapEnabled) return new Response("Not Found", { status: 404 });

  const custom = site.sitemapCustomContent?.trim();
  if (custom) return xmlResponse(custom);

  const slugs = Object.keys(PAGE_ROUTES) as PageSlug[];
  const pages = await Promise.all(slugs.map(async (slug) => ({ slug, seo: (await getPage(slug)).seo })));
  const lastmod = new Date().toISOString();

  const urls = pages
    .filter(({ seo }) => !seo?.noIndex)
    .map(({ slug, seo }) => {
      const loc = seo?.canonicalUrl || absoluteUrl(PAGE_ROUTES[slug].path);
      const changefreq = slug === "news-and-events" || slug === "home" ? "weekly" : "monthly";
      const priority = slug === "home" ? 1 : slug === "admissions" || slug === "our-school" ? 0.9 : 0.7;
      return `<url>\n<loc>${xmlEscape(loc)}</loc>\n<lastmod>${lastmod}</lastmod>\n<changefreq>${changefreq}</changefreq>\n<priority>${priority}</priority>\n</url>`;
    });

  return xmlResponse(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
  );
}

const xmlResponse = (xml: string) =>
  new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
