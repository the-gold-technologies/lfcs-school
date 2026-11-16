import type { Metadata } from "next";
import CareersHeroSection from "@/components/careers/CareersHeroSection";
import WhyWorkWithUsSection from "@/components/careers/WhyWorkWithUsSection";
import WorkCultureSection from "@/components/careers/WorkCultureSection";
import OpportunitiesSection from "@/components/careers/OpportunitiesSection";
import CareersFinalCTASection from "@/components/careers/CareersFinalCTASection";
import CareerProfileForm from "@/components/careers/CareerProfileForm";
import EnquiryModalProvider from "@/components/start-school/EnquiryModalProvider";
import JsonLd from "@/components/JsonLd";
import { getCampuses, getPage } from "@/lib/content";
import { buildPageMetadata, heroHeadingTag, pageSchemas } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { sections } = await getPage("careers");
  return buildPageMetadata("careers", sections.CareersHeroSection?.image1);
}

export default async function CareersPage() {
  const [{ sections: s }, campuses, schemas] = await Promise.all([
    getPage("careers"),
    getCampuses(),
    pageSchemas("careers"),
  ]);
  // First opportunity block lists teaching roles, the second administrative roles
  const [teaching, administrative] = s.OpportunitiesSection.opportunities as { roles: string[] }[];

  const headingTag = await heroHeadingTag("careers");

  return (
    <EnquiryModalProvider
      form={
        <CareerProfileForm
          campuses={campuses.map((c) => c.name)}
          teachingRoles={teaching?.roles ?? []}
          administrativeRoles={administrative?.roles ?? []}
        />
      }
    >
      <div className="min-h-screen bg-white font-sans text-gray-800">
        <JsonLd data={schemas} />
        <CareersHeroSection data={s.CareersHeroSection} headingTag={headingTag} />
        <WhyWorkWithUsSection data={s.WhyWorkWithUsSection} />
        <WorkCultureSection data={s.WorkCultureSection} />
        <OpportunitiesSection data={s.OpportunitiesSection} />
        <CareersFinalCTASection data={s.CareersFinalCTASection} />
      </div>
    </EnquiryModalProvider>
  );
}
