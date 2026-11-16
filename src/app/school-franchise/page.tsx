import type { Metadata } from "next";
import EnquiryModalProvider from "@/components/start-school/EnquiryModalProvider";
import EnquiryFormSection from "@/components/start-school/EnquiryFormSection";
import StartSchoolHeroSection from "@/components/start-school/StartSchoolHeroSection";
import WhyPartnerSection from "@/components/start-school/WhyPartnerSection";
import SchoolModelSection from "@/components/start-school/SchoolModelSection";
import SupportProvidedSection from "@/components/start-school/SupportProvidedSection";
import PartnerRequirementsSection from "@/components/start-school/PartnerRequirementsSection";
import SetupProcessSection from "@/components/start-school/SetupProcessSection";
import InvestmentSection from "@/components/start-school/InvestmentSection";
import StartSchoolFaqSection from "@/components/start-school/StartSchoolFaqSection";
import StartSchoolFinalCTASection from "@/components/start-school/StartSchoolFinalCTASection";
import JsonLd from "@/components/JsonLd";
import { getPage } from "@/lib/content";
import { buildPageMetadata, faqSchema, heroHeadingTag, pageSchemas } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { sections } = await getPage("start-school");
  return buildPageMetadata("start-school", sections.StartSchoolHeroSection?.image);
}

export default async function StartSchoolPage() {
  const { sections: s } = await getPage("start-school");
  const [schemas] = await Promise.all([
    // The FAQ section is marked up so it can appear as an FAQ rich result
    pageSchemas("start-school", [faqSchema(s.StartSchoolFaqSection.faqs)]),
  ]);

  const headingTag = await heroHeadingTag("start-school");

  return (
    <EnquiryModalProvider form={<EnquiryFormSection data={s.EnquiryFormSection} />}>
      <div className="min-h-screen bg-white font-sans text-gray-800">
        <JsonLd data={schemas} />
        <StartSchoolHeroSection data={s.StartSchoolHeroSection} headingTag={headingTag} />
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
