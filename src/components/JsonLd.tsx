import type { JsonLdObject } from "@/lib/seo";

// Renders schema.org structured data; "<" is escaped so CMS text can't break out of the script tag
export default function JsonLd({ data }: { data: JsonLdObject[] }) {
  if (!data.length) return null;
  const graph = { "@context": "https://schema.org", "@graph": data };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
