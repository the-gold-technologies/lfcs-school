"use server";

import { CV_EXTENSIONS, MAX_CV_BYTES } from "@/components/careers/careersData";
import { cmsPostSubmission } from "@/lib/cms";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Shown to visitors when the CMS can't be reached, so they still have a way to get in touch
const FALLBACK_EMAIL = "franchise@lfcsschools.com";

// Reads a trimmed field and caps its length so nobody can post huge payloads
function field(formData: FormData, name: string, max = 200) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

// Hidden "website" input that real visitors never fill in; bots usually do
function isSpam(formData: FormData) {
  return field(formData, "website") !== "";
}

function failed(what: string): FormState {
  return {
    status: "error",
    message: `Sorry, we couldn't send your ${what} right now. Please try again or email us at ${FALLBACK_EMAIL}.`,
  };
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

  // Admission enquiries from the pop-up go to the Admissions inbox
  const saved = await cmsPostSubmission({
    formType: enquiryType === "admissions" ? "admissions" : "contact",
    fullName,
    email,
    phone,
    preferredCampus: campus,
    grade,
    enquiryType: enquiryTypeLabels[enquiryType] ?? "General Enquiry",
    message,
  });
  return saved ? { status: "success" } : failed("message");
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

  const saved = await cmsPostSubmission({
    formType: "start-school",
    fullName,
    email,
    phone: contactNumber,
    city,
    proposedLocation,
    landOwnership: landOwnershipLabels[landOwnership] ?? "",
    landArea,
    schoolLevel: schoolLevelLabels[schoolLevel] ?? "",
    investmentCapacity: investment,
    experience,
    message,
  });
  return saved ? { status: "success" } : failed("enquiry");
}

export async function submitAdmissionEnquiry(_prev: FormState, formData: FormData): Promise<FormState> {
  if (isSpam(formData)) return { status: "success" };

  const parentName = field(formData, "parentName", 100);
  const email = field(formData, "email", 150);
  const campus = field(formData, "campus", 100);
  const grade = field(formData, "grade", 50);
  const session = field(formData, "session", 20);
  const message = field(formData, "message", 5000);

  if (!parentName || !email || !grade || !session) {
    return { status: "error", message: "Please fill in all required fields." };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const saved = await cmsPostSubmission({
    formType: "admissions",
    fullName: parentName,
    email,
    preferredCampus: campus,
    grade,
    academicSession: session,
    message,
  });
  return saved ? { status: "success" } : failed("enquiry");
}

const careerAreaLabels: Record<string, string> = {
  teaching: "Teaching",
  administrative: "Administrative",
  other: "Other / Not sure",
};

export async function submitCareerProfile(_prev: FormState, formData: FormData): Promise<FormState> {
  if (isSpam(formData)) return { status: "success" };

  const fullName = field(formData, "fullName", 100);
  const phone = field(formData, "phone", 30);
  const email = field(formData, "email", 150);
  const area = field(formData, "area", 30);
  const role = field(formData, "role", 100);
  const experience = field(formData, "experience", 30);
  const campus = field(formData, "campus", 100);
  const message = field(formData, "message", 5000);

  if (!fullName || !phone || !email || !area) {
    return { status: "error", message: "Please fill in all required fields." };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  // Optional CV: an empty file input still arrives as a zero-byte File
  const file = formData.get("cv");
  let cv: File | undefined;
  if (file instanceof File && file.size > 0) {
    const name = file.name.toLowerCase();
    if (!CV_EXTENSIONS.some((ext) => name.endsWith(ext))) {
      return { status: "error", message: "Please upload your CV as a PDF or Word document." };
    }
    if (file.size > MAX_CV_BYTES) {
      return { status: "error", message: "Your CV must be 5 MB or smaller." };
    }
    cv = file;
  }

  // The CMS stores the CV and links it from the inbox and the notification email
  const saved = await cmsPostSubmission(
    {
      formType: "careers",
      fullName,
      email,
      phone,
      preferredCampus: campus,
      careerArea: careerAreaLabels[area] ?? careerAreaLabels.other,
      roleOfInterest: role,
      experience,
      message,
    },
    cv,
  );
  return saved ? { status: "success" } : failed("profile");
}
