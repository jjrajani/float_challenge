import { formatDateIntl } from "@/utils/date";
import { Grid2 as Grid } from "@mui/material";
import { getBioBloodPressure } from "@/db/PatientBioDatas";
import TitleValuePair from "../TitleValuePair";
import { VisitWithMeta } from "@/types/Visit";
import CollapsibleCard from "../CollapsibleCard";

interface LastVisitCardProps {
  visit: VisitWithMeta;
}

const LastVisitCard = ({ visit }: LastVisitCardProps) => {
  return (
    <CollapsibleCard title="Last Visit">
      <Grid container spacing={1}>
        <Grid size={4}>
          <TitleValuePair
            title="Date"
            value={formatDateIntl(visit.time_start)}
          />
        </Grid>
        <Grid size={4}>
          <TitleValuePair
            title="Medication"
            value={`${visit.medication.name} (${visit.medication.access_type})`}
          />
        </Grid>
        <Grid size={4}>
          <TitleValuePair title="Nurse" value={visit.nurse.name} />
        </Grid>
        <Grid size={4}>
          <TitleValuePair
            title="Blood Pressure"
            value={getBioBloodPressure(visit.bio)}
          />
        </Grid>
        <Grid size={4}>
          <TitleValuePair
            title="Heart Rate"
            value={`${visit.bio.heart_rate} bpm`}
          />
        </Grid>
        <Grid size={4}>
          <TitleValuePair title="Pain Level" value={visit.bio.pain_level} />
        </Grid>
      </Grid>
    </CollapsibleCard>
  );
};

export default LastVisitCard;
