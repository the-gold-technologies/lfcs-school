import type { Metadata } from "next";
import AdmissionsHeroSection from "@/components/admissions/AdmissionsHeroSection";
import AdmissionOverviewSection from "@/components/admissions/AdmissionOverviewSection";
import AdmissionClassesSection from "@/components/admissions/AdmissionClassesSection";
import AdmissionEnquiryFormSection from "@/components/admissions/AdmissionEnquiryFormSection";
import JsonLd from "@/components/JsonLd";
import { getCampuses, getPage } from "@/lib/content";
import { buildPageMetadata, heroHeadingTag, pageSchemas } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { sections } = await getPage("admissions");
  return buildPageMetadata("admissions", sections.AdmissionsHeroSection?.image);
}

export default async function AdmissionsPage() {
  const [{ sections: s }, campuses, schemas] = await Promise.all([
    getPage("admissions"),
    getCampuses(),
    pageSchemas("admissions"),
  ]);

  const headingTag = await heroHeadingTag("admissions");

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <JsonLd data={schemas} />
      <AdmissionsHeroSection data={s.AdmissionsHeroSection} headingTag={headingTag} />
      <AdmissionOverviewSection data={s.AdmissionOverviewSection} />
      <AdmissionClassesSection data={s.AdmissionClassesSection} />
      <AdmissionEnquiryFormSection
        data={s.AdmissionEnquiryFormSection}
        campuses={campuses.map((c) => c.name)}
      />
    </div>
  );
}
