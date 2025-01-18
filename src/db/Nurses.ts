import { Nurse } from "@/types/Nurse";

export const nurses: Nurse[] = [
  { name: "Alice Johnson", id: "NURSE_1", visits: ["VISIT_1", "VISIT_4"] },
  { name: "Brian Smith", id: "NURSE_2", visits: ["VISIT_2", "VISIT_5"] },
  { name: "Catherine Lee", id: "NURSE_3", visits: ["VISIT_3", "VISIT_6"] },
];

export const nurseIds = nurses.map((nurse) => nurse.id);

export const getNurse = (nurseId: string) => {
  return nurses.find((nurse) => nurse.id === nurseId);
};
