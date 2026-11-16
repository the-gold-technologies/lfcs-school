// Page metadata and JSON-LD built from CMS SEO settings: Global SEO drives the home page and
// site-wide defaults, Page SEO drives every other page.
import type { Metadata } from "next";
import { getCampuses, getPage, getSite, type PageSlug, type SiteConfig } from "@/lib/content";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://lfgos.com").replace(/\/$/, "");

// Public route and breadcrumb label for every CMS page
export const PAGE_ROUTES: Record<PageSlug, { path: string; name: string }> = {
  home: { path: "/", name: "Home" },
  about: { path: "/about", name: "About Us" },
  academics: { path: "/academics", name: "Academics" },
  admissions: { path: "/admissions", name: "Admissions" },
  experience: { path: "/experience", name: "Experience" },
  "our-school": { path: "/our-school", name: "Our Schools" },
  "start-school": { path: "/start-school", name: "Start a School" },
  careers: { path: "/careers", name: "Careers" },
  contact: { path: "/contact", name: "Contact Us" },
  "news-and-events": { path: "/news-&-events", name: "News & Events" },
  gallery: { path: "/gallery", name: "Photo Gallery" },
};

export const absoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

// Keywords are stored as a comma-separated string in the CMS
const keywordList = (keywords?: string | null) =>
  keywords
    ?.split(",")
    .map((k) => k.trim())
    .filter(Boolean);

function socialMetadata(title: string, description: string, url: string, image?: string): Metadata {
  const images = image ? [{ url: image, alt: title }] : undefined;
  return {
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: "Little Flower Group of Schools",
      title,
      description,
      url,
      images,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

// Home page: title, description and keywords come from Global SEO settings
export async function buildHomeMetadata(image?: string): Promise<Metadata> {
  const site = await getSite();
  const title = site.siteTitle;
  const description = site.siteDescription;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: SITE_URL + "/" },
    ...socialMetadata(title, description, SITE_URL + "/", image),
  };
}

// Inner pages: Page SEO settings, falling back to the page name and site description
export async function buildPageMetadata(slug: PageSlug, image?: string): Promise<Metadata> {
  const [{ seo }, site] = await Promise.all([getPage(slug), getSite()]);
  const route = PAGE_ROUTES[slug];
  const title = seo?.metaTitle || `${route.name} | ${site.siteTitle}`;
  const description = seo?.metaDescription || site.siteDescription;
  const canonical = seo?.canonicalUrl || absoluteUrl(route.path);
  return {
    title: { absolute: title },
    description,
    keywords: keywordList(seo?.targetKeywords),
    alternates: { canonical },
    robots: seo?.noIndex ? { index: false, follow: true } : undefined,
    // Pages without their own image share the school logo
    ...socialMetadata(title, description, canonical, image || site.logo || undefined),
  };
}

// ---------------------------------------------------------------- JSON-LD

export type JsonLdObject = Record<string, unknown>;

const ORG_ID = `${SITE_URL}/#organization`;

// Admins can paste JSON-LD into Global or Page SEO; invalid JSON is ignored rather than breaking the page
export function parseCmsSchema(schema?: string | null): JsonLdObject[] {
  if (!schema?.trim()) return [];
  try {
    const parsed = JSON.parse(schema);
    return (Array.isArray(parsed) ? parsed : [parsed]).filter((s) => s && typeof s === "object");
  } catch {
    console.error("[seo] Ignoring invalid JSON-LD schema from the CMS");
    return [];
  }
}

function sameAs(site: SiteConfig) {
  return [site.facebookUrl, site.instagramUrl, site.youtubeUrl, site.linkedinUrl, site.socialLinks.twitter].filter(
    (url): url is string => typeof url === "string" && url.startsWith("http"),
  );
}

// Site-wide schema: the school group, its 8 campuses and the website. A Global SEO schema
// entered in the CMS replaces the generated organisation.
export async function siteSchemas(): Promise<JsonLdObject[]> {
  const [site, campuses, contact, about] = await Promise.all([
    getSite(),
    getCampuses(),
    getPage("contact"),
    getPage("about"),
  ]);
  const custom = parseCmsSchema(site.schema);
  const officeAddress: string | undefined = contact.sections.ContactFormSection?.address;
  const founded = (about.sections.OurStorySection?.stats as { label: string; value: string }[] | undefined)?.find(
    (s) => /found/i.test(s.label),
  )?.value;

  const organization: JsonLdObject = {
    "@type": "EducationalOrganization",
    "@id": ORG_ID,
    name: site.siteTitle,
    alternateName: "LFCS",
    url: SITE_URL,
    logo: site.logo || undefined,
    description: site.siteDescription,
    email: site.email || undefined,
    telephone: site.phone || undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: officeAddress || site.address || undefined,
      addressCountry: "IN",
    },
    foundingDate: founded,
    sameAs: sameAs(site),
    subOrganization: campuses.map((c) => ({
      "@type": "School",
      name: c.name,
      url: c.website,
      image: c.img,
      address: {
        "@type": "PostalAddress",
        streetAddress: c.address,
        addressLocality: c.city,
        addressRegion: c.state,
        addressCountry: "IN",
      },
      sameAs: [c.facebook, c.instagram, c.youtube].filter(Boolean),
    })),
  };

  const website: JsonLdObject = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: site.siteTitle,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };

  return custom.length ? [...custom, website] : [organization, website];
}

// Per-page schema: WebPage + breadcrumb, any page-specific extras, and the CMS Page SEO schema
export async function pageSchemas(slug: PageSlug, extra: JsonLdObject[] = []): Promise<JsonLdObject[]> {
  const { seo } = await getPage(slug);
  const route = PAGE_ROUTES[slug];
  const url = seo?.canonicalUrl || absoluteUrl(route.path);

  const webPage: JsonLdObject = {
    "@type": slug === "about" ? "AboutPage" : slug === "contact" ? "ContactPage" : "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: seo?.metaTitle || route.name,
    description: seo?.metaDescription || undefined,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };

  const breadcrumb: JsonLdObject = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
      { "@type": "ListItem", position: 2, name: route.name, item: url },
    ],
  };

  return [webPage, breadcrumb, ...extra, ...parseCmsSchema(seo?.schema)];
}

export function faqSchema(faqs: { q: string; a: string }[]): JsonLdObject {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
const HEADING_TAGS: HeadingTag[] = ["h1", "h2", "h3", "h4", "h5", "h6"];

// Tag for the page's hero heading, chosen under "Heading" in CMS Global SEO (home page) or
// Page SEO (every other page); h1 unless the CMS says otherwise
export async function heroHeadingTag(slug: PageSlug): Promise<HeadingTag> {
  const value = slug === "home" ? (await getSite()).headingOptions : (await getPage(slug)).seo?.headingOptions;
  return HEADING_TAGS.find((tag) => tag === value) ?? "h1";
}
