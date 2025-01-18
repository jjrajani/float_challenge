import { VisitWithMeta } from "@/types/Visit";
import {
  formatDateIntl,
  formatTime,
  getFormattedTimeDifference,
} from "@/utils/date";
import { symptomsStatusMeta } from "@/constants/symptoms";
import { getBioBloodPressure } from "@/db/PatientBios";
import TitleValuePair from "@/components/TitleValuePair";
import { Grid2 as Grid } from "@mui/material";
import SymptomsStatusDot from "./SymptomsStatusDot";
import FlexBox from "@/components/FlexBox";

interface VisitDetailsProps {
  data: VisitWithMeta;
}

const VisitDetails = ({ data }: VisitDetailsProps) => {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid size={12}>
          <TitleValuePair title="Nurse" value={data.nurse.name} />
        </Grid>
        <Grid size={2}>
          <TitleValuePair
            title="Date"
            value={formatDateIntl(data.time_start)}
          />
        </Grid>
        <Grid size={2}>
          <TitleValuePair title="Time" value={formatTime(data.time_start)} />
        </Grid>
        <Grid size={3}>
          <TitleValuePair title="Location" value={data.location} />
        </Grid>
        <Grid size={2}>
          <TitleValuePair
            title="Duration"
            value={getFormattedTimeDifference(data.time_start, data.time_end)}
          />
        </Grid>
        <Grid size={12}>
          <Grid container spacing={2}>
            <Grid size={2}>
              <TitleValuePair
                title="Medications"
                value={`${data.medication.name} | ${data.medication.access_type}`}
              />
            </Grid>
            <Grid size={3}>
              <TitleValuePair
                title="Tolerance"
                value={
                  <FlexBox gap={"4px"}>
                    {symptomsStatusMeta[data.symptoms_status].label}
                    <SymptomsStatusDot symptomsStatus={data.symptoms_status} />
                  </FlexBox>
                }
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Grid container spacing={2}>
            <Grid size={2}>
              <TitleValuePair
                title="Blood Pressure"
                value={getBioBloodPressure(data.bio)}
              />
            </Grid>
            <Grid size={2}>
              <TitleValuePair title="Heart Rate" value={data.bio.heart_rate} />
            </Grid>
            <Grid size={2}>
              <TitleValuePair title="Pain Level" value={data.bio.pain_level} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default VisitDetails;
