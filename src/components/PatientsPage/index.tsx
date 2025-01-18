"use client";

import { usePatients } from "@/db/Patients";
import FlexBox from "@/components/FlexBox";
import { useMemo, useState } from "react";
import PatientDashboard from "@/components/PatientDashboard";
import PatientSelector from "@/components/PatientDashboard/PatientSelector";

const PatientsPage = () => {
  const { patients, onFilterChange } = usePatients();
  const [activePatientId, setActivePatientId] = useState<string>();

  const listItems = useMemo(() => {
    return patients.reduce(
      (accum, patient) => [
        ...accum,
        {
          id: patient.id,
          label: patient.name,
          onClick: (item) => setActivePatientId(item.id),
          selected: activePatientId === patient.id,
        },
      ],
      [] as {
        id: string;
        label: string;
        onClick: (item: { id: string }) => void;
      }[]
    );
  }, [activePatientId, patients]);

  return (
    <FlexBox>
      <PatientSelector listItems={listItems} onFilterChange={onFilterChange} />
      <PatientDashboard patientId={activePatientId} />
    </FlexBox>
  );
};

export default PatientsPage;
