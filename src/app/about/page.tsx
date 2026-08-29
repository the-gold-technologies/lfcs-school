import AboutHeroSection from "@/components/about/AboutHeroSection";
import OurStorySection from "@/components/about/OurStorySection";
import EducationalApproachSection from "@/components/about/EducationalApproachSection";
import VisionMissionSection from "@/components/about/VisionMissionSection";
import OurValuesSection from "@/components/about/OurValuesSection";
import LeadershipSection from "@/components/about/LeadershipSection";
import OurGrowthSection from "@/components/about/OurGrowthSection";
import AboutCTASection from "@/components/about/AboutCTASection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHeroSection />
      <OurStorySection />
      <EducationalApproachSection />
      <VisionMissionSection />
      <OurValuesSection />
      <LeadershipSection />
      <OurGrowthSection />
      <AboutCTASection />
    </main>
  );
}
