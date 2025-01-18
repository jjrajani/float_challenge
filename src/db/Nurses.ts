import { Nurse } from "@/types/Nurse";

export const nurses: Nurse[] = [
  { name: "Alice Johnson", id: "NURSE_1", visit_ids: ["VISIT_1", "VISIT_4"] },
  { name: "Brian Smith", id: "NURSE_2", visit_ids: ["VISIT_2", "VISIT_5"] },
  { name: "Catherine Lee", id: "NURSE_3", visit_ids: ["VISIT_3", "VISIT_6"] },
];

export const nurseIds = nurses.map((nurse) => nurse.id);

export const getNurse = (nurseId: string) => {
  return nurses.find((nurse) => nurse.id === nurseId);
};
