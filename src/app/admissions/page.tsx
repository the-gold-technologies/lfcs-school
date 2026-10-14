import AdmissionsHeroSection from "@/components/admissions/AdmissionsHeroSection";
import AdmissionOverviewSection from "@/components/admissions/AdmissionOverviewSection";
import AdmissionClassesSection from "@/components/admissions/AdmissionClassesSection";
import AdmissionEnquiryFormSection from "@/components/admissions/AdmissionEnquiryFormSection";

export const metadata = {
  title: "Admissions | Little Flower Group of Schools",
  description: "Admissions at Little Flower Group of Schools. Explore the learning stages we offer and submit an admission enquiry for your preferred campus.",
};

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <AdmissionsHeroSection />
      <AdmissionOverviewSection />
      <AdmissionClassesSection />
      <AdmissionEnquiryFormSection />
    </main>
  );
}
