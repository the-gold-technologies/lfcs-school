import { revalidateTag } from "next/cache";

// Called by lfcs-school-cms after every save so updated content shows without a redeploy
export async function POST(request: Request) {
  const secret = process.env.CMS_SHARED_SECRET;
  if (!secret || request.headers.get("x-cms-secret") !== secret) {
    return Response.json({ revalidated: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const tags: unknown[] = Array.isArray(body?.tags) ? body.tags : [];
  const valid = tags.filter((t): t is string => typeof t === "string" && t.length > 0 && t.length <= 256);
  // Expire immediately so the next visit (e.g. the admin checking their edit) gets fresh content
  for (const tag of valid) revalidateTag(tag, { expire: 0 });

  return Response.json({ revalidated: valid.length > 0, tags: valid });
}
