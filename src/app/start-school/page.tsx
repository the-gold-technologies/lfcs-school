import StartSchoolHeroSection from "@/components/start-school/StartSchoolHeroSection";
import WhyPartnerSection from "@/components/start-school/WhyPartnerSection";
import SchoolModelSection from "@/components/start-school/SchoolModelSection";
import SupportProvidedSection from "@/components/start-school/SupportProvidedSection";
import PartnerRequirementsSection from "@/components/start-school/PartnerRequirementsSection";
import SetupProcessSection from "@/components/start-school/SetupProcessSection";
import InvestmentSection from "@/components/start-school/InvestmentSection";
import StartSchoolFaqSection from "@/components/start-school/StartSchoolFaqSection";
import StartSchoolFinalCTASection from "@/components/start-school/StartSchoolFinalCTASection";
import EnquiryModalProvider from "@/components/start-school/EnquiryModalProvider";

export const metadata = {
  title: "Start a School | LFCS",
  description: "Partner with Little Flower Group of Schools to establish and operate a school in your community.",
};

export default function StartSchoolPage() {
  return (
    <EnquiryModalProvider>
      <main className="min-h-screen bg-white font-sans text-gray-800">
        <StartSchoolHeroSection />
        <WhyPartnerSection />
        <SchoolModelSection />
        <SupportProvidedSection />
        <PartnerRequirementsSection />
        <SetupProcessSection />
        <InvestmentSection />
        <StartSchoolFaqSection />
        <StartSchoolFinalCTASection />
      </main>
    </EnquiryModalProvider>
  );
}
