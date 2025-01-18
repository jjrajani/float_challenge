import { PatientBio } from "@/types/PatientBio";

export const getBioBloodPressure = (bio: PatientBio) => {
  if (!bio) {
    return "N/A";
  }

  return `${bio.systolic_bp} / ${bio.diastolic_bp}`;
};
