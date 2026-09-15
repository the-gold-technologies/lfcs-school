import OurSchoolHeroSection from "@/components/our-school/OurSchoolHeroSection";
import AllSchoolsListSection from "@/components/our-school/AllSchoolsListSection";
import OurSchoolCTASection from "@/components/our-school/OurSchoolCTASection";

export const metadata = {
  title: "Our School | Little Flower Children's School",
  description: "A Place to Learn, Grow & Lead. Explore our beautiful campus and facilities at Little Flower Children's School.",
};

export default function OurSchoolPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <OurSchoolHeroSection />
      <AllSchoolsListSection />
      <OurSchoolCTASection />
    </main>
  );
}
