import { getSite } from "@/lib/content";
import { SITE_URL } from "@/lib/seo";

// robots.txt is edited in CMS → SEO Management → Sitemap & Robots
export async function GET() {
  const site = await getSite();
  let body = (site.robotsTxt || "User-agent: *\nAllow: /").trim();
  if (site.sitemapEnabled && !/^sitemap:/im.test(body)) body += `\n\nSitemap: ${SITE_URL}/sitemap.xml`;
  if (!site.sitemapEnabled) body = body.replace(/^sitemap:.*$/gim, "").trim();
  return new Response(body + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
