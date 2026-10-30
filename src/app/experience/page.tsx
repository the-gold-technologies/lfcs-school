import type { Metadata } from "next";
import ExperienceHeroSection from "@/components/experience/ExperienceHeroSection";
import LifeAtLFCSSection from "@/components/experience/LifeAtLFCSSection";
import SportsFitnessSection from "@/components/experience/SportsFitnessSection";
import ArtsCultureSection from "@/components/experience/ArtsCultureSection";
import ClubsActivitiesSection from "@/components/experience/ClubsActivitiesSection";
import GallerySection from "@/components/experience/GallerySection";
import ExperienceCTASection from "@/components/experience/ExperienceCTASection";
import JsonLd from "@/components/JsonLd";
import { getPage } from "@/lib/content";
import { buildPageMetadata, heroHeadingTag, pageSchemas } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { sections } = await getPage("experience");
  return buildPageMetadata("experience", sections.ExperienceHeroSection?.image);
}

export default async function ExperiencePage() {
  const [{ sections: s }, schemas] = await Promise.all([
    getPage("experience"),
    pageSchemas("experience"),
  ]);

  const headingTag = await heroHeadingTag("experience");

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={schemas} />
      <ExperienceHeroSection data={s.ExperienceHeroSection} headingTag={headingTag} />
      <LifeAtLFCSSection data={s.LifeAtLFCSSection} />
      <SportsFitnessSection data={s.SportsFitnessSection} />
      <ArtsCultureSection data={s.ArtsCultureSection} />
      <ClubsActivitiesSection data={s.ClubsActivitiesSection} />
      <GallerySection data={s.GallerySection} />
      <ExperienceCTASection data={s.ExperienceCTASection} />
    </div>
  );
}
