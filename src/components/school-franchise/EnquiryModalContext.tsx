"use client";

import { createContext, useContext } from "react";

type EnquiryModalContextValue = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const EnquiryModalContext = createContext<EnquiryModalContextValue | null>(null);

export function useEnquiryModal() {
  const ctx = useContext(EnquiryModalContext);
  if (!ctx) throw new Error("useEnquiryModal must be used within EnquiryModalProvider");
  return ctx;
}
