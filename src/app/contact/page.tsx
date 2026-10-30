import type { Metadata } from "next";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactCampusesSection from "@/components/contact/ContactCampusesSection";
import JsonLd from "@/components/JsonLd";
import { getCampuses, getPage, getSite } from "@/lib/content";
import { buildPageMetadata, heroHeadingTag, pageSchemas } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("contact");
}

export default async function ContactPage() {
  const [{ sections: s }, site, campuses, schemas] = await Promise.all([
    getPage("contact"),
    getSite(),
    getCampuses(),
    pageSchemas("contact"),
  ]);

  const headingTag = await heroHeadingTag("contact");

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <JsonLd data={schemas} />
      <ContactHeroSection data={s.ContactHeroSection} headingTag={headingTag} />
      <ContactFormSection
        data={s.ContactFormSection}
        socials={{ facebook: site.facebookUrl, instagram: site.instagramUrl, youtube: site.youtubeUrl }}
        campuses={campuses.map((c) => c.name)}
      />
      <ContactCampusesSection data={s.ContactCampusesSection} schools={campuses} />
    </div>
  );
}
