import type { Metadata } from "next";
import EnquiryModalProvider from "@/components/school-franchise/EnquiryModalProvider";
import EnquiryFormSection from "@/components/school-franchise/EnquiryFormSection";
import StartSchoolHeroSection from "@/components/school-franchise/StartSchoolHeroSection";
import WhyPartnerSection from "@/components/school-franchise/WhyPartnerSection";
import SchoolModelSection from "@/components/school-franchise/SchoolModelSection";
import SupportProvidedSection from "@/components/school-franchise/SupportProvidedSection";
import PartnerRequirementsSection from "@/components/school-franchise/PartnerRequirementsSection";
import SetupProcessSection from "@/components/school-franchise/SetupProcessSection";
import InvestmentSection from "@/components/school-franchise/InvestmentSection";
import StartSchoolFaqSection from "@/components/school-franchise/StartSchoolFaqSection";
import StartSchoolFinalCTASection from "@/components/school-franchise/StartSchoolFinalCTASection";
import JsonLd from "@/components/JsonLd";
import { getPage } from "@/lib/content";
import {
  buildPageMetadata,
  faqSchema,
  heroHeadingTag,
  pageSchemas,
} from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { sections } = await getPage("school-franchise");
  return buildPageMetadata(
    "school-franchise",
    sections.StartSchoolHeroSection?.image,
  );
}

export default async function StartSchoolPage() {
  const { sections: s } = await getPage("school-franchise");
  const [schemas] = await Promise.all([
    // The FAQ section is marked up so it can appear as an FAQ rich result
    pageSchemas("school-franchise", [faqSchema(s.StartSchoolFaqSection.faqs)]),
  ]);

  const headingTag = await heroHeadingTag("school-franchise");

  return (
    <EnquiryModalProvider
      form={<EnquiryFormSection data={s.EnquiryFormSection} />}
    >
      <div className="min-h-screen bg-white font-sans text-gray-800">
        <JsonLd data={schemas} />
        <StartSchoolHeroSection
          data={s.StartSchoolHeroSection}
          headingTag={headingTag}
        />
        <WhyPartnerSection data={s.WhyPartnerSection} />
        <SchoolModelSection data={s.SchoolModelSection} />
        <SupportProvidedSection data={s.SupportProvidedSection} />
        <PartnerRequirementsSection data={s.PartnerRequirementsSection} />
        <SetupProcessSection data={s.SetupProcessSection} />
        <InvestmentSection data={s.InvestmentSection} />
        <StartSchoolFaqSection data={s.StartSchoolFaqSection} />
        <StartSchoolFinalCTASection data={s.StartSchoolFinalCTASection} />
      </div>
    </EnquiryModalProvider>
  );
}
