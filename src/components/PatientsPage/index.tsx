"use client";

import { usePatients } from "@/db/Patients";
import FlexBox from "@/components/FlexBox";
import { useMemo, useState } from "react";
import PatientDashboard from "@/components/PatientDashboard";
import PatientSelector from "@/components/PatientDashboard/PatientSelector";
import { styled } from "@mui/material";

const StyledDashboardWrapper = styled("div")(() => ({
  maxHeight: "100%",
  overflow: "scroll",
}));

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
    <FlexBox fullHeight>
      <PatientSelector listItems={listItems} onFilterChange={onFilterChange} />
      <StyledDashboardWrapper>
        <PatientDashboard patientId={activePatientId} />
      </StyledDashboardWrapper>
    </FlexBox>
  );
};

export default PatientsPage;
