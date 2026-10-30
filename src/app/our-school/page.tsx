import type { Metadata } from "next";
import OurSchoolHeroSection from "@/components/our-school/OurSchoolHeroSection";
import AllSchoolsListSection from "@/components/our-school/AllSchoolsListSection";
import OurSchoolCTASection from "@/components/our-school/OurSchoolCTASection";
import EnquiryModalProvider from "@/components/start-school/EnquiryModalProvider";
import AdmissionEnquiryForm from "@/components/our-school/AdmissionEnquiryForm";
import JsonLd from "@/components/JsonLd";
import { getCampuses, getPage } from "@/lib/content";
import { absoluteUrl, buildPageMetadata, heroHeadingTag, pageSchemas } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { sections } = await getPage("our-school");
  return buildPageMetadata("our-school", sections.OurSchoolCTASection?.image);
}

export default async function OurSchoolPage() {
  const campuses = await getCampuses();
  const [{ sections: s }, schemas] = await Promise.all([
    getPage("our-school"),
    // The campus directory is described as a list of schools
    pageSchemas("our-school", [
      {
        "@type": "ItemList",
        name: "Little Flower schools",
        url: absoluteUrl("/our-school#schools"),
        itemListElement: campuses.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "School",
            name: c.name,
            url: c.website,
            image: c.img,
            address: { "@type": "PostalAddress", streetAddress: c.address, addressLocality: c.city, addressRegion: c.state, addressCountry: "IN" },
          },
        })),
      },
    ]),
  ]);

  const headingTag = await heroHeadingTag("our-school");

  return (
    <EnquiryModalProvider
      form={<AdmissionEnquiryForm data={s.AdmissionEnquiryModalSection} campuses={campuses.map((c) => c.name)} />}
    >
      <div className="min-h-screen bg-white font-sans text-gray-800">
        <JsonLd data={schemas} />
        <OurSchoolHeroSection data={s.OurSchoolHeroSection} headingTag={headingTag} />
        <AllSchoolsListSection schools={campuses} />
        <OurSchoolCTASection data={s.OurSchoolCTASection} />
      </div>
    </EnquiryModalProvider>
  );
}
