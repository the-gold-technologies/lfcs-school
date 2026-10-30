import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import NoteOfSupportSection from "@/components/NoteOfSupportSection";
import HowWeEducateSection from "@/components/HowWeEducateSection";
import OurApproachSection from "@/components/OurApproachSection";
import ExperienceSection from "@/components/ExperienceSection";
import OurSchoolsSection from "@/components/OurSchoolsSection";
import CTABanners from "@/components/CTABanners";
import Testimonials from "@/components/Testimonials";
import NewsSection from "@/components/NewsSection";
import JsonLd from "@/components/JsonLd";
import { getCampuses, getNews, getPage, getTestimonials } from "@/lib/content";
import { buildHomeMetadata, heroHeadingTag, siteSchemas } from "@/lib/seo";

// Home SEO comes from CMS Global SEO settings
export async function generateMetadata(): Promise<Metadata> {
  const { sections } = await getPage("home");
  return buildHomeMetadata(sections.HeroSection?.bgImage);
}

export default async function Home() {
  const [{ sections: s }, campuses, news, testimonials, schemas] = await Promise.all([
    getPage("home"),
    getCampuses(),
    getNews(),
    getTestimonials(),
    siteSchemas(),
  ]);

  const headingTag = await heroHeadingTag("home");

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <JsonLd data={schemas} />
      <HeroSection data={s.HeroSection} headingTag={headingTag} />
      <WelcomeSection data={s.WelcomeSection} />
      <NoteOfSupportSection data={s.NoteOfSupportSection} />
      <HowWeEducateSection data={s.HowWeEducateSection} />
      <OurApproachSection data={s.OurApproachSection} />
      <ExperienceSection data={s.ExperienceSection} />
      <OurSchoolsSection data={s.OurSchoolsSection} schools={campuses} />
      <NewsSection data={s.NewsSection} news={news} />
      <CTABanners data={s.CTABanners} />
      <Testimonials data={s.TestimonialsSection} testimonials={testimonials} />
    </div>
  );
}
