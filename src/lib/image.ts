// Requests a resized, auto-format/quality version of a Cloudinary image (other URLs pass through),
// so small slots like thumbnails don't download full-size CMS uploads.
export function sizedImage(url: string | undefined | null, width: number): string {
  if (!url) return "";
  if (!url.includes("res.cloudinary.com") || !url.includes("/image/upload/")) return url;
  return url.replace("/image/upload/", `/image/upload/c_limit,w_${width},f_auto,q_auto/`);
}
