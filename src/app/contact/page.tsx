import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactCampusesSection from "@/components/contact/ContactCampusesSection";

export const metadata = {
  title: "Contact Us | Little Flower Group of Schools",
  description: "Get in touch with Little Flower Group of Schools for admissions, academics, partnerships, or general enquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <ContactHeroSection />
      <ContactFormSection />
      <ContactCampusesSection />
    </main>
  );
}
