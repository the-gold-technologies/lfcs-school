import type { Metadata } from "next";
import AcademicsHeroSection from "@/components/academics/AcademicsHeroSection";
import CurriculumSection from "@/components/academics/CurriculumSection";
import AcademicJourneySection from "@/components/academics/AcademicJourneySection";
import TeachingAndLearningSection from "@/components/academics/TeachingAndLearningSection";
import FacultySection from "@/components/academics/FacultySection";
import AcademicResultsSection from "@/components/academics/AcademicResultsSection";
import AcademicFacilitiesSection from "@/components/academics/AcademicFacilitiesSection";
import AcademicsCTASection from "@/components/academics/AcademicsCTASection";
import JsonLd from "@/components/JsonLd";
import { getPage, getToppers } from "@/lib/content";
import { buildPageMetadata, heroHeadingTag, pageSchemas } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { sections } = await getPage("academics");
  return buildPageMetadata("academics", sections.AcademicsHeroSection?.image);
}

export default async function AcademicsPage() {
  const [{ sections: s }, toppers, schemas] = await Promise.all([
    getPage("academics"),
    getToppers(),
    pageSchemas("academics"),
  ]);

  const headingTag = await heroHeadingTag("academics");

  return (
    <div className="min-h-screen">
      <JsonLd data={schemas} />
      <AcademicsHeroSection data={s.AcademicsHeroSection} headingTag={headingTag} />
      <CurriculumSection data={s.CurriculumSection} />
      <AcademicJourneySection data={s.AcademicJourneySection} />
      <TeachingAndLearningSection data={s.TeachingAndLearningSection} />
      <FacultySection data={s.FacultySection} />
      <AcademicResultsSection data={s.AcademicResultsSection} toppersX={toppers.classX} toppersXII={toppers.classXII} />
      <AcademicFacilitiesSection data={s.AcademicFacilitiesSection} />
      <AcademicsCTASection data={s.AcademicsCTASection} />
    </div>
  );
}
