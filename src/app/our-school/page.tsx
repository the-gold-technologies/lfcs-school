import OurSchoolHeroSection from "@/components/our-school/OurSchoolHeroSection";
import CampusOverviewSection from "@/components/our-school/CampusOverviewSection";
import ClassroomsSection from "@/components/our-school/ClassroomsSection";
import LaboratoriesSection from "@/components/our-school/LaboratoriesSection";
import LibrarySection from "@/components/our-school/LibrarySection";
import SportsFacilitiesSection from "@/components/our-school/SportsFacilitiesSection";
import StudentFacilitiesSection from "@/components/our-school/StudentFacilitiesSection";
import SafetySecuritySection from "@/components/our-school/SafetySecuritySection";
import CampusGallerySection from "@/components/our-school/CampusGallerySection";
import OurSchoolCTASection from "@/components/our-school/OurSchoolCTASection";

export const metadata = {
  title: "Our School | Little Flower Children's School",
  description: "A Place to Learn, Grow & Lead. Explore our beautiful campus and facilities at Little Flower Children's School.",
};

export default function OurSchoolPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <OurSchoolHeroSection />
      <CampusOverviewSection />
      <ClassroomsSection />
      <LaboratoriesSection />
      <LibrarySection />
      <SportsFacilitiesSection />
      <StudentFacilitiesSection />
      <SafetySecuritySection />
      <CampusGallerySection />
      <OurSchoolCTASection />
    </main>
  );
}
