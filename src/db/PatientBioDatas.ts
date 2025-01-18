import { PatientBioData } from "@/types/PatientBioData";

export const getBioBloodPressure = (bio: PatientBioData) => {
  if (!bio) {
    return "N/A";
  }

  return `${bio.systolic_bp} / ${bio.diastolic_bp}`;
};
