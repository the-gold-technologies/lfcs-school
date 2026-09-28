"use client";

import { ChevronRight } from "lucide-react";
import { useLenis } from "lenis/react";

export default function BackToTopButton() {
  const lenis = useLenis();

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors ml-auto cursor-pointer"
    >
      <ChevronRight className="w-5 h-5 -rotate-90 text-white/80" />
    </button>
  );
}
