"use client";

import { useEnquiryModal } from "./EnquiryModalContext";

export default function EnquiryCTAButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { openModal } = useEnquiryModal();

  return (
    <button type="button" onClick={openModal} className={className}>
      {children}
    </button>
  );
}
