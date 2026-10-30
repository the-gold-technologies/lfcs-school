// Website content, read from lfcs-school-cms with the bundled snapshot as a fallback so the
// site keeps working when the CMS is offline. Refresh the snapshot with
// `node scripts/sync-cms-snapshot.mjs`.
import { cache } from "react";
import snapshot from "@/content/cms-snapshot.json";
import { cmsGet, CmsTag } from "@/lib/cms";

// Section content is edited freely in the CMS, so each component types the fields it reads
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SectionContent = Record<string, any>;

export type PageSeo = {
  metaTitle?: string | null;
  metaDescription?: string | null;
  targetKeywords?: string | null;
  canonicalUrl?: string | null;
  noIndex?: boolean;
  schema?: string | null;
  headingOptions?: string | null;
};

export type PageSlug = keyof typeof snapshot.pages;

export type PageContent = {
  sections: Record<string, SectionContent>;
  seo: PageSeo | null;
};

// Website page slug -> CMS API path (the gallery page's API is separate from the photo collection)
const PAGE_API: Record<PageSlug, string> = {
  home: "/home",
  about: "/about",
  academics: "/academics",
  admissions: "/admissions",
  experience: "/experience",
  "our-school": "/our-school",
  "start-school": "/start-school",
  careers: "/careers",
  contact: "/contact",
  "news-and-events": "/news-and-events",
  gallery: "/gallery-page",
};

export const getPage = cache(async (slug: PageSlug): Promise<PageContent> => {
  const fallback = snapshot.pages[slug] as PageContent;
  const res = await cmsGet<Record<string, SectionContent>>(PAGE_API[slug], [CmsTag.page(slug)]);
  if (!res) return fallback;
  return {
    // A section missing in the CMS still renders from the snapshot
    sections: { ...fallback.sections, ...res.data },
    seo: (res.seo as PageSeo | null) ?? fallback.seo,
  };
});

export type SiteConfig = typeof snapshot.site;

export const getSite = cache(async (): Promise<SiteConfig> => {
  const res = await cmsGet<SiteConfig>("/seo/global", [CmsTag.site]);
  if (!res) return snapshot.site;
  return {
    ...snapshot.site,
    ...res.data,
    socialLinks: { ...snapshot.site.socialLinks, ...(res.data.socialLinks ?? {}) },
  };
});

export type NavLink = {
  id: string;
  label: string;
  url: string;
  type: string;
  parent: string;
  order: number;
  description?: string | null;
  image?: string | null;
};

export const getNavLinks = cache(async (): Promise<NavLink[]> => {
  const res = await cmsGet<NavLink[]>("/nav-links", [CmsTag.site]);
  const links = res?.data ?? (snapshot.navLinks as NavLink[]);
  return [...links].sort((a, b) => a.order - b.order);
});

export type Campus = {
  name: string;
  city: string;
  state: string;
  address: string;
  img: string;
  website?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
};

export const getCampuses = cache(async (): Promise<Campus[]> => {
  type Row = Campus & { website: string | null; instagram: string | null; facebook: string | null; youtube: string | null };
  const res = await cmsGet<Row[]>("/campuses", [CmsTag.campuses]);
  const rows = (res?.data ?? snapshot.campuses) as Row[];
  // Empty strings mean "no link" in the CMS; the cards only render links that exist
  return rows.map((c) => ({
    name: c.name,
    city: c.city,
    state: c.state,
    address: c.address,
    img: c.img,
    website: c.website || undefined,
    instagram: c.instagram || undefined,
    facebook: c.facebook || undefined,
    youtube: c.youtube || undefined,
  }));
});

export type NewsItem = {
  title: string;
  excerpt: string;
  date: string;
  img: string;
  source: string;
  url: string;
};

export const getNews = cache(async (): Promise<NewsItem[]> => {
  const res = await cmsGet<NewsItem[]>("/news", [CmsTag.news]);
  return (res?.data ?? snapshot.news).map(({ title, excerpt, date, img, source, url }) => ({
    title,
    excerpt,
    date,
    img,
    source,
    url,
  }));
});

export type GalleryPhoto = { src: string; caption: string; category: string };

export const getGallery = cache(async (): Promise<GalleryPhoto[]> => {
  const res = await cmsGet<GalleryPhoto[]>("/gallery", [CmsTag.gallery]);
  return (res?.data ?? snapshot.gallery).map(({ src, caption, category }) => ({ src, caption, category }));
});

export type Testimonial = { name: string; role: string; text: string; category: string };

export const getTestimonials = cache(async (): Promise<Testimonial[]> => {
  type Row = Testimonial & { isActive: boolean };
  const res = await cmsGet<Row[]>("/testimonials", [CmsTag.testimonials]);
  return ((res?.data ?? snapshot.testimonials) as Row[])
    .filter((t) => t.isActive)
    .map(({ name, role, text, category }) => ({ name, role, text, category }));
});

export type Topper = { name: string; percent: string; image: string };

// Board toppers grouped by class, in the order they are listed in the CMS
export const getToppers = cache(async (): Promise<{ classX: Topper[]; classXII: Topper[] }> => {
  type Row = { examType: string; studentName: string; percentageOrRank: string; studentPhoto: string | null };
  const res = await cmsGet<Row[]>("/results", [CmsTag.results]);
  const rows = (res?.data ?? snapshot.results) as Row[];
  const toTopper = (r: Row): Topper => ({
    name: r.studentName,
    percent: r.percentageOrRank,
    image: r.studentPhoto ?? "",
  });
  return {
    classX: rows.filter((r) => r.examType === "CBSE 10th").map(toTopper),
    classXII: rows.filter((r) => r.examType === "CBSE 12th").map(toTopper),
  };
});

// Splits a CMS textarea into paragraphs (blank line between paragraphs)
export function paragraphs(text: string | undefined | null): string[] {
  return (text ?? "")
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

// Some headings show only the last word of the CMS "script accent" in the script font
// ("of <Schools>"); returns [leading words, last word]
export function splitLastWord(text: string | undefined | null): [string, string] {
  const words = (text ?? "").trim().split(/\s+/);
  const last = words.pop() ?? "";
  return [words.join(" "), last];
}

// Headings that wrap after a comma ("Empowering Minds, / Nurturing"); returns [up to and
// including the comma, the rest] or ["", text] when there is no comma
export function splitAfterComma(text: string | undefined | null): [string, string] {
  const value = (text ?? "").trim();
  const at = value.indexOf(",");
  return at < 0 ? ["", value] : [value.slice(0, at + 1), value.slice(at + 1).trim()];
}

// Headings that show only the first word of the "script accent" in the script font
// ("<Journey> with LFCS"); returns [first word, remaining words]
export function splitFirstWord(text: string | undefined | null): [string, string] {
  const [first = "", ...rest] = (text ?? "").trim().split(/\s+/);
  return [first, rest.join(" ")];
}

// Headings that wrap after their first sentence ("Start a School. / Shape a"); returns
// [first sentence, the rest] or [text, ""] when there is only one sentence
export function splitAfterSentence(text: string | undefined | null): [string, string] {
  const value = (text ?? "").trim();
  const at = value.indexOf(". ");
  return at < 0 ? [value, ""] : [value.slice(0, at + 1), value.slice(at + 2).trim()];
}
