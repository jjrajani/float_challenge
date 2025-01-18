import { VisitWithMeta } from "./Visit";

export interface Patient {
  name: string;
  dob: string;
  id: string;
  gender: "Male" | "Female";
  visit_ids: string[];
  visits: VisitWithMeta[]; // ids of PatientVisit
}
