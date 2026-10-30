import type { MetadataRoute } from "next";
import { getPage, getSite, type PageSlug } from "@/lib/content";
import { absoluteUrl, PAGE_ROUTES } from "@/lib/seo";

// Lists every page that is not marked "noindex" in CMS Page SEO; disabled from CMS Sitemap settings
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const site = await getSite();
  if (!site.sitemapEnabled) return [];

  const slugs = Object.keys(PAGE_ROUTES) as PageSlug[];
  const pages = await Promise.all(slugs.map(async (slug) => ({ slug, seo: (await getPage(slug)).seo })));

  return pages
    .filter(({ seo }) => !seo?.noIndex)
    .map(({ slug, seo }) => ({
      url: seo?.canonicalUrl || absoluteUrl(PAGE_ROUTES[slug].path),
      changeFrequency: slug === "news-and-events" || slug === "home" ? "weekly" : "monthly",
      priority: slug === "home" ? 1 : slug === "admissions" || slug === "our-school" ? 0.9 : 0.7,
    }));
}
