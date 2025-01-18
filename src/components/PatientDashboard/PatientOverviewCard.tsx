import { Grid2 as Grid } from "@mui/material";
import TitleValuePair from "@/components/TitleValuePair";
import CollapsibleCard from "@/components/CollapsibleCard";
import { Patient } from "@/types/Patient";
import { getPatientAge } from "@/db/Patients";
import { useMemo } from "react";

interface PatientOverviewCardProps {
  patient: Patient | undefined;
}

const PatientOverviewCard = ({ patient }: PatientOverviewCardProps) => {
  const lastVisit = useMemo(() => patient?.visits.slice(-1)[0], [patient]);
  return (
    <CollapsibleCard title="Patient Overview">
      {patient && (
        <Grid container spacing={1}>
          <Grid size={3}>
            <TitleValuePair title="Name" value={patient.name} />
          </Grid>
          <Grid size={3}>
            <TitleValuePair title="Age" value={getPatientAge(patient.dob)} />
          </Grid>
          <Grid size={6}>
            <TitleValuePair title="Gender" value={patient.gender} />
          </Grid>
          {lastVisit && (
            <Grid size={3}>
              <TitleValuePair
                title="Medications"
                value={`${lastVisit.medication.name} | ${lastVisit.medication.access_type}`}
              />
            </Grid>
          )}
        </Grid>
      )}
    </CollapsibleCard>
  );
};

export default PatientOverviewCard;
