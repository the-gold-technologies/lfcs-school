import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import HowWeEducateSection from "@/components/HowWeEducateSection";
import OurApproachSection from "@/components/OurApproachSection";
import ExperienceSection from "@/components/ExperienceSection";
import OurSchoolsSection from "@/components/OurSchoolsSection";
import CTABanners from "@/components/CTABanners";
import TrustedPartners from "@/components/TrustedPartners";
import Testimonials from "@/components/Testimonials";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroSection />
      <WelcomeSection />
      <HowWeEducateSection />
      <OurApproachSection />
      <ExperienceSection />
      <OurSchoolsSection />
      <CTABanners />
      <TrustedPartners />
      <Testimonials />
      <NewsSection />
    </div>
  );
}
