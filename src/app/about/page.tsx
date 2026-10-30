import type { Metadata } from "next";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import OurStorySection from "@/components/about/OurStorySection";
import EducationalApproachSection from "@/components/about/EducationalApproachSection";
import VisionMissionSection from "@/components/about/VisionMissionSection";
import OurValuesSection from "@/components/about/OurValuesSection";
import LeadershipSection from "@/components/about/LeadershipSection";
import OurGrowthSection from "@/components/about/OurGrowthSection";
import AwardsSection from "@/components/about/AwardsSection";
import AboutCTASection from "@/components/about/AboutCTASection";
import JsonLd from "@/components/JsonLd";
import { getPage } from "@/lib/content";
import { buildPageMetadata, heroHeadingTag, pageSchemas } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { sections } = await getPage("about");
  return buildPageMetadata("about", sections.AboutHeroSection?.image);
}

export default async function AboutPage() {
  const [{ sections: s }, schemas] = await Promise.all([
    getPage("about"),
    pageSchemas("about"),
  ]);

  const headingTag = await heroHeadingTag("about");

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={schemas} />
      <AboutHeroSection data={s.AboutHeroSection} headingTag={headingTag} />
      <OurStorySection data={s.OurStorySection} />
      <EducationalApproachSection data={s.EducationalApproachSection} />
      <VisionMissionSection data={s.VisionMissionSection} />
      <OurValuesSection data={s.OurValuesSection} />
      <LeadershipSection data={s.LeadershipSection} />
      <OurGrowthSection data={s.OurGrowthSection} />
      <AwardsSection data={s.AwardsSection} />
      <AboutCTASection data={s.AboutCTASection} />
    </div>
  );
}
