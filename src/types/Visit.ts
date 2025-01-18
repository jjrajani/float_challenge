import { Medication } from "./Medication";
import { Nurse } from "./Nurse";
import { PatientBioData } from "./PatientBioData";

export interface Visit {
  id: string;
  time_start: string;
  time_end: string;
  location: string;
  duration: string;
  patient_id: string;
  nurse_id: string;
  medication_id: string;
  bio_data_id: string;
  symptoms_status: "-1" | "0" | "1";
}

export interface VisitWithMeta extends Visit {
  nurse: Nurse;
  medication: Medication;
  bio: PatientBioData;
}
