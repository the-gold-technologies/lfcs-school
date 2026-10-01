import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import BrandAmbassadorSection from "@/components/BrandAmbassadorSection";
import HowWeEducateSection from "@/components/HowWeEducateSection";
import OurApproachSection from "@/components/OurApproachSection";
import ExperienceSection from "@/components/ExperienceSection";
import OurSchoolsSection from "@/components/OurSchoolsSection";
import CTABanners from "@/components/CTABanners";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroSection />
      <WelcomeSection />
      <BrandAmbassadorSection />
      <HowWeEducateSection />
      <OurApproachSection />
      <ExperienceSection />
      <OurSchoolsSection />
      <CTABanners />
      <Testimonials />
    </div>
  );
}
