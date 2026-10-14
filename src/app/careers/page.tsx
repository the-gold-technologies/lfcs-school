import CareersHeroSection from "@/components/careers/CareersHeroSection";
import WhyWorkWithUsSection from "@/components/careers/WhyWorkWithUsSection";
import WorkCultureSection from "@/components/careers/WorkCultureSection";
import OpportunitiesSection from "@/components/careers/OpportunitiesSection";
import CareersFinalCTASection from "@/components/careers/CareersFinalCTASection";
import CareerProfileForm from "@/components/careers/CareerProfileForm";
import EnquiryModalProvider from "@/components/start-school/EnquiryModalProvider";

export const metadata = {
  title: "Careers | Little Flower Group of Schools",
  description: "Build your career with Little Flower Group of Schools. Explore teaching and administrative opportunities and submit your profile.",
};

export default function CareersPage() {
  return (
    <EnquiryModalProvider form={<CareerProfileForm />}>
      <main className="min-h-screen bg-white font-sans text-gray-800">
        <CareersHeroSection />
        <WhyWorkWithUsSection />
        <WorkCultureSection />
        <OpportunitiesSection />
        <CareersFinalCTASection />
      </main>
    </EnquiryModalProvider>
  );
}
