import { Grid2 as Grid } from "@mui/material";
import TitleValuePair from "../TitleValuePair";
import CollapsibleCard from "../CollapsibleCard";
import { Patient } from "@/types/Patient";
import { getPatientAge } from "@/db/Patients";

interface PatientOverviewCardProps {
  patient: Patient | undefined;
}

const PatientOverviewCard = ({ patient }: PatientOverviewCardProps) => {
  console.log("%c patient", "color: orange", patient);
  return (
    <CollapsibleCard title="Patient Overview">
      {patient && (
        <Grid container spacing={1}>
          <Grid size={4}>
            <TitleValuePair title="Name" value={patient.name} />
          </Grid>
          <Grid size={4}>
            <TitleValuePair title="Age" value={getPatientAge(patient.dob)} />
          </Grid>
          <Grid size={4}>
            <TitleValuePair title="Gender" value={patient.gender} />
          </Grid>
        </Grid>
      )}
    </CollapsibleCard>
  );
};

export default PatientOverviewCard;
