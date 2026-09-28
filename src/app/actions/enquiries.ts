"use server";

import { ENQUIRY_EMAIL, sendFormEmail } from "@/lib/mailer";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Reads a trimmed field and caps its length so nobody can post huge payloads
function field(formData: FormData, name: string, max = 200) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

// Hidden "website" input that real visitors never fill in; bots usually do
function isSpam(formData: FormData) {
  return field(formData, "website") !== "";
}

const enquiryTypeLabels: Record<string, string> = {
  admissions: "Admissions",
  academics: "Academics",
  "start-school": "Start a School",
  careers: "Careers",
  general: "General Enquiry",
};

export async function submitContactForm(_prev: FormState, formData: FormData): Promise<FormState> {
  if (isSpam(formData)) return { status: "success" };

  const fullName = field(formData, "fullName", 100);
  const phone = field(formData, "phone", 30);
  const email = field(formData, "email", 150);
  const enquiryType = field(formData, "enquiryType", 30);
  const campus = field(formData, "campus", 100);
  const grade = field(formData, "grade", 50);
  const message = field(formData, "message", 5000);

  if (!fullName || !phone || !email || !enquiryType || !message) {
    return { status: "error", message: "Please fill in all required fields." };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const typeLabel = enquiryTypeLabels[enquiryType] ?? "General Enquiry";

  try {
    await sendFormEmail({
      to: ENQUIRY_EMAIL,
      subject: `New ${typeLabel} enquiry from ${fullName}`,
      title: `Contact Form – ${typeLabel}`,
      replyTo: email,
      fields: [
        { label: "Full Name", value: fullName },
        { label: "Phone", value: phone },
        { label: "Email", value: email },
        { label: "Enquiry Type", value: typeLabel },
        { label: "Preferred Campus", value: campus || "Any / Not sure" },
        { label: "Class Seeking Admission", value: grade },
        { label: "Message", value: message },
      ],
    });
    return { status: "success" };
  } catch (error) {
    console.error("Contact form email failed:", error);
    return {
      status: "error",
      message: `Sorry, we couldn't send your message right now. Please try again or email us at ${ENQUIRY_EMAIL}.`,
    };
  }
}

const landOwnershipLabels: Record<string, string> = {
  yes: "Yes",
  no: "No",
  planning: "Planning to acquire",
};

const schoolLevelLabels: Record<string, string> = {
  "pre-primary": "Pre-Primary",
  primary: "Primary",
  middle: "Middle",
  secondary: "Secondary",
  "senior-secondary": "Senior Secondary",
  "to-be-discussed": "To be discussed",
};

export async function submitStartSchoolEnquiry(_prev: FormState, formData: FormData): Promise<FormState> {
  if (isSpam(formData)) return { status: "success" };

  const fullName = field(formData, "fullName", 100);
  const contactNumber = field(formData, "contactNumber", 30);
  const email = field(formData, "email", 150);
  const city = field(formData, "city", 100);
  const proposedLocation = field(formData, "proposedLocation", 200);
  const landOwnership = field(formData, "landOwnership", 30);
  const landArea = field(formData, "landArea", 100);
  const schoolLevel = field(formData, "schoolLevel", 30);
  const investment = field(formData, "investment", 100);
  const experience = field(formData, "experience", 3000);
  const message = field(formData, "message", 5000);

  if (!fullName || !contactNumber || !email || !city) {
    return { status: "error", message: "Please fill in all required fields." };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  try {
    await sendFormEmail({
      to: ENQUIRY_EMAIL,
      subject: `New Start a School enquiry from ${fullName} (${city})`,
      title: "Start a School Enquiry",
      replyTo: email,
      fields: [
        { label: "Full Name", value: fullName },
        { label: "Contact Number", value: contactNumber },
        { label: "Email", value: email },
        { label: "City / Location", value: city },
        { label: "Proposed School Location", value: proposedLocation },
        { label: "Land Ownership / Access", value: landOwnershipLabels[landOwnership] ?? "" },
        { label: "Approximate Land Area", value: landArea },
        { label: "Proposed School Level", value: schoolLevelLabels[schoolLevel] ?? "" },
        { label: "Estimated Investment Capacity", value: investment },
        { label: "Previous Experience", value: experience },
        { label: "Message / Project Details", value: message },
      ],
    });
    return { status: "success" };
  } catch (error) {
    console.error("Start a school enquiry email failed:", error);
    return {
      status: "error",
      message: `Sorry, we couldn't send your enquiry right now. Please try again or email us at ${ENQUIRY_EMAIL}.`,
    };
  }
}
