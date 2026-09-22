"use client";

import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";
import { useLenis } from "lenis/react";
import { EnquiryModalContext } from "./EnquiryModalContext";
import EnquiryFormSection from "./EnquiryFormSection";

export default function EnquiryModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  // Lenis intercepts wheel/touch scrolling on the whole document, so it keeps
  // scrolling the page behind the modal even with body overflow hidden — pause
  // it while the modal is open so scroll stays inside the modal.
  useEffect(() => {
    if (open) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [open, lenis]);

  // Open automatically if the page is loaded/navigated to with #apply (e.g. from the footer link)
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#apply") setOpen(true);
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, closeModal]);

  return (
    <EnquiryModalContext.Provider value={{ open, openModal, closeModal }}>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-start sm:items-center justify-center p-0 sm:p-4 bg-black/50"
          onClick={closeModal}
        >
          <div
            className="relative w-full sm:max-w-3xl bg-white sm:rounded-[32px] shadow-2xl max-h-screen sm:max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-[#0a192f] transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>
            <div
              data-lenis-prevent
              className="styled-scrollbar max-h-screen sm:max-h-[90vh] overflow-y-auto overscroll-contain p-6 sm:p-10"
            >
              <EnquiryFormSection />
            </div>
          </div>
        </div>
      )}
    </EnquiryModalContext.Provider>
  );
}
