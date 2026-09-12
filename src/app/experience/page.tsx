import ExperienceHeroSection from "@/components/experience/ExperienceHeroSection";
import LifeAtLFCSSection from "@/components/experience/LifeAtLFCSSection";
import SportsFitnessSection from "@/components/experience/SportsFitnessSection";
import ArtsCultureSection from "@/components/experience/ArtsCultureSection";
import ClubsActivitiesSection from "@/components/experience/ClubsActivitiesSection";
import StudentAchievementsSection from "@/components/experience/StudentAchievementsSection";
import GallerySection from "@/components/experience/GallerySection";
import ExperienceCTASection from "@/components/experience/ExperienceCTASection";

export const metadata = {
  title: "Experience | Life at LFCS",
  description: "Life at LFCS is beyond textbooks and classrooms. Explore sports, creative activities, trips, and more opportunities for students.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-white">
      <ExperienceHeroSection />
      <LifeAtLFCSSection />
      <SportsFitnessSection />
      <ArtsCultureSection />
      <ClubsActivitiesSection />
      <StudentAchievementsSection />
      <GallerySection />
      <ExperienceCTASection />
    </main>
  );
}
