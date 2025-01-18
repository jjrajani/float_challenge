import { Medication } from "@/types/Medication";

export const medications: Medication[] = [
  {
    id: "MED_1",
    name: "Vancomycin",
    access_type: "PICC",
  },
  {
    id: "MED_2",
    name: "Fluconazole",
    access_type: "PICC",
  },
  {
    id: "MED_3",
    name: "Saline",
    access_type: "PIV",
  },
  {
    id: "MED_4",
    name: "Ceftriaxone",
    access_type: "PIV",
  },
  {
    id: "MED_5",
    name: "Morphine",
    access_type: "PIV",
  },
];

export const medicationIds = medications.map((medication) => medication.id);

export const getMedication = (medId: string) => {
  return medications.find((med) => med.id === medId);
};
