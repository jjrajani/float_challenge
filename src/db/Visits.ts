import { VisitWithMeta } from "@/types/Visit";
import { getNurse, nurseIds } from "@/db/Nurses";
import { Nurse } from "@/types/Nurse";
import { Medication } from "@/types/Medication";
import { getMedication, medicationIds } from "@/db/Medications";

const getRandomItem = (arr: string[]): string => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomSymptomStatus = (): "-1" | "0" | "1" => {
  return [-1, 0, 1][Math.floor(Math.random() * 3)].toString() as
    | "-1"
    | "0"
    | "1";
};

const getRandomDurationInMs = (): number => {
  // Random duration between 15 minutes and 2 hours (in milliseconds)
  return Math.floor(Math.random() * (120 - 15 + 1) + 15) * 60 * 1000;
};

const formatDuration = (ms: number): string => {
  const totalMinutes = Math.floor(ms / (1000 * 60));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}:${minutes.toString().padStart(2, "0")}:00`;
};

export const generateVisits = (
  n: number,
  patientId: string
): VisitWithMeta[] => {
  const visits: VisitWithMeta[] = [];

  for (let i = 1; i <= n; i++) {
    const visitId = `VISIT_${i}`;
    const bioDataId = `BIO_${i}`;

    // Calculate time_start (n - i days before today)
    const today = new Date();
    const timeStart = new Date(today.getTime());
    timeStart.setDate(today.getDate() - (n - i));

    // Calculate random duration for time_end
    const randomDurationMs = getRandomDurationInMs();
    const timeEnd = new Date(timeStart.getTime() + randomDurationMs);

    // Get a random Nurse
    const nurse = getNurse(getRandomItem(nurseIds)) as Nurse;

    // Get a random Medication
    const medication = getMedication(
      getRandomItem(medicationIds)
    ) as Medication;

    visits.push({
      id: visitId,
      time_start: timeStart.toISOString(),
      time_end: timeEnd.toISOString(),
      location: `Clinic ${String.fromCharCode(65 + (i % 26))}`, // Cycles through A-Z
      duration: formatDuration(randomDurationMs),
      patient_id: patientId,
      nurse_id: getRandomItem(nurseIds),
      nurse,
      medication_id: getRandomItem(medicationIds),
      medication,
      bio_data_id: bioDataId,
      symptoms_status: getRandomSymptomStatus(),
      bio: {
        id: bioDataId,
        heart_rate: Math.floor(Math.random() * (100 - 60 + 1)) + 60, // Random heart rate (60-100)
        systolic_bp: Math.floor(Math.random() * (140 - 110 + 1)) + 110, // Random systolic BP (110-140)
        diastolic_bp: Math.floor(Math.random() * (90 - 70 + 1)) + 70, // Random diastolic BP (70-90)
        pain_level: Math.floor(Math.random() * 11), // Random pain level (0-10)
        patient_id: patientId,
        nurse_id: getRandomItem(nurseIds),
        visit_id: visitId,
      },
    });
  }

  return visits;
};
