// Server-side client for lfcs-school-cms. Never throws: when the CMS is unset, offline or
// returns an error, callers get null and fall back to the bundled content snapshot.

const CMS_URL = (process.env.CMS_URL || process.env.NEXT_PUBLIC_CMS_URL || "").replace(/\/$/, "");

// Cached CMS responses are refreshed on demand via /api/revalidate; this is only a safety net
export const REVALIDATE_SECONDS = 3600;

// Must match WebsiteTag in lfcs-school-cms/src/lib/revalidateWebsite.ts
export const CmsTag = {
  campuses: "campuses",
  news: "news",
  gallery: "gallery",
  results: "results",
  site: "site",
  page: (slug: string) => `page:${slug}`,
};

type CmsJson<T> = { success: boolean; data: T; seo?: unknown; error?: string };

export async function cmsGet<T>(path: string, tags: string[]): Promise<CmsJson<T> | null> {
  if (!CMS_URL) return null;
  try {
    const res = await fetch(`${CMS_URL}/api${path}`, {
      next: { tags, revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`responded ${res.status}`);
    const json = (await res.json()) as CmsJson<T>;
    if (!json.success) throw new Error(json.error || "unsuccessful response");
    return json;
  } catch (error) {
    console.error(`[cms] GET ${path} failed, using bundled content:`, error);
    return null;
  }
}

// Records a form submission in the CMS inbox; the CMS also emails the enquiry to the school.
// Sent as multipart so an optional CV file travels with it. Returns false when it wasn't saved.
export async function cmsPostSubmission(fields: Record<string, string>, cv?: File): Promise<boolean> {
  const secret = process.env.CMS_SHARED_SECRET;
  if (!CMS_URL || !secret) {
    console.error("[cms] CMS_URL and CMS_SHARED_SECRET must be set to receive form submissions");
    return false;
  }
  const body = new FormData();
  for (const [key, value] of Object.entries(fields)) {
    if (value) body.append(key, value);
  }
  if (cv) body.append("cv", cv, cv.name.slice(0, 150));
  try {
    const res = await fetch(`${CMS_URL}/api/submissions`, {
      method: "POST",
      headers: { "x-cms-secret": secret },
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(cv ? 30000 : 8000),
    });
    if (!res.ok) throw new Error(`responded ${res.status}`);
    return true;
  } catch (error) {
    console.error("[cms] Could not record submission in CMS:", error);
    return false;
  }
}
