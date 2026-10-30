// Downloads all CMS content into src/content/cms-snapshot.json. The website renders this
// snapshot whenever the CMS is unreachable, so re-run it after major content changes:
//   CMS_URL=https://cms.example.com node scripts/sync-cms-snapshot.mjs
import { writeFile } from "node:fs/promises";

const CMS_URL = (process.env.CMS_URL || process.env.NEXT_PUBLIC_CMS_URL || "").replace(/\/$/, "");
if (!CMS_URL) {
  console.error("Set CMS_URL to the CMS base URL, e.g. CMS_URL=http://localhost:3001");
  process.exit(1);
}

// Website page slug -> CMS API path
const PAGES = {
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

async function get(path) {
  const res = await fetch(`${CMS_URL}/api${path}`);
  const json = await res.json();
  if (!res.ok || !json.success) throw new Error(`GET ${path} failed: ${json.error ?? res.status}`);
  return json;
}

const pages = {};
for (const [slug, path] of Object.entries(PAGES)) {
  const { data, seo } = await get(path);
  pages[slug] = { sections: data, seo };
}

const strip = (rows) => rows.map(({ id, createdAt, updatedAt, ...rest }) => rest);
const site = (await get("/seo/global")).data;
delete site.id;
delete site.createdAt;
delete site.updatedAt;

const snapshot = {
  pages,
  site,
  navLinks: (await get("/nav-links")).data.map(({ createdAt, updatedAt, ...rest }) => rest),
  campuses: strip((await get("/campuses")).data),
  news: strip((await get("/news")).data),
  gallery: strip((await get("/gallery")).data),
  testimonials: strip((await get("/testimonials")).data),
  results: strip((await get("/results")).data),
};

const file = new URL("../src/content/cms-snapshot.json", import.meta.url);
await writeFile(file, JSON.stringify(snapshot, null, 2) + "\n");
console.log(`Saved CMS snapshot (${Object.keys(pages).length} pages) to ${file.pathname}`);
