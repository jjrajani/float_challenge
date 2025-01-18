export interface PatientBio {
  id: string;
  heart_rate: number;
  systolic_bp: number; // blood pressure = systolic_bp / diastolic_bp
  diastolic_bp: number; // blood pressure = systolic_bp / diastolic_bp
  pain_level: number; // 0-10
  patient_id: string;
  nurse_id: string;
  visit_id: string;
}
