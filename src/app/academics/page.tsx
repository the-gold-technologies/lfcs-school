import AcademicsHeroSection from "@/components/academics/AcademicsHeroSection";
import CurriculumSection from "@/components/academics/CurriculumSection";
import AcademicJourneySection from "@/components/academics/AcademicJourneySection";
import TeachingAndLearningSection from "@/components/academics/TeachingAndLearningSection";
import FacultySection from "@/components/academics/FacultySection";
import AcademicResultsSection from "@/components/academics/AcademicResultsSection";
import AcademicFacilitiesSection from "@/components/academics/AcademicFacilitiesSection";
import AcademicsCTASection from "@/components/academics/AcademicsCTASection";

export const metadata = {
  title: "Academics | LFCS",
  description: "At LFCS, Academics forms the base of a student's journey. Discover our well-structured curriculum and developmental learning approach.",
};

export default function AcademicsPage() {
  return (
    <main className="min-h-screen">
      <AcademicsHeroSection />
      <CurriculumSection />
      <AcademicJourneySection />
      <TeachingAndLearningSection />
      <FacultySection />
      <AcademicResultsSection />
      <AcademicFacilitiesSection />
      <AcademicsCTASection />
    </main>
  );
}
