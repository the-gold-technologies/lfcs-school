import Image from "next/image";
import { ArrowRight } from "lucide-react";
import EnquiryCTAButton from "@/components/start-school/EnquiryCTAButton";

export default function CareersFinalCTASection() {
  return (
    <section className="py-12 md:py-20 bg-[#fdfdfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative lg:px-0">
        <div className="rounded-[40px] px-8 sm:px-12 md:px-12 lg:px-16 py-8 md:py-12 lg:py-16 overflow-hidden shadow-xl bg-[#fdf7ee]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
            {/* Left Text Content */}
            <div className="md:col-span-6 flex flex-col items-start text-left">
              <h2 className="font-serif text-[30px] sm:text-[34px] lg:text-[38px] font-semibold text-[#3f5333] leading-[1.35] mb-5">
                Your Next Opportunity Could Begin Here
              </h2>

              <div className="space-y-3 text-[15px] text-gray-600 leading-relaxed mb-7">
                <p>
                  If you are passionate about education and would like to explore a career with Little Flower Group of Schools, we invite you to share your profile with us.
                </p>
                <p>
                  Tell us about your experience, skills and area of interest, and our team can consider your profile for relevant opportunities as they arise.
                </p>
              </div>

              <EnquiryCTAButton className="bg-lf-burgundy text-white pl-6 pr-2 py-2 rounded-full font-bold text-[15px] hover:bg-lf-burgundy-hover transition-all flex items-center justify-center gap-4 shadow-md hover:shadow-lg inline-flex w-max">
                <span>Submit Your Profile</span>
                <span className="bg-white rounded-full p-1.5 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-lf-burgundy" strokeWidth={3} />
                </span>
              </EnquiryCTAButton>
            </div>

            {/* Right Image */}
            <div className="hidden md:col-span-6 md:flex justify-end">
              <Image
                src="/about-hero.webp"
                alt="Little Flower students standing together"
                width={1563}
                height={1006}
                sizes="(min-width: 1024px) 560px, 50vw"
                className="w-full max-w-[560px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
