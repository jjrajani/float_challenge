import { VisitWithMeta } from "@/types/Visit";
import { Grid2 as Grid } from "@mui/material";
import BloodPressureChart from "./BloodPressureChart";
import HeartRateChart from "@/components/PatientDashboard/HeartRateChart";
import PainLevelChart from "@/components/PatientDashboard/PainLevelChart";
import ToleranceChart from "@/components/PatientDashboard/ToleranceChart";
import CollapsibleCard from "@/components/CollapsibleCard";

interface BioHistoryChartCardProps {
  visits: VisitWithMeta[] | undefined;
}

const BioHistoryChartCard = ({ visits = [] }: BioHistoryChartCardProps) => {
  return (
    <CollapsibleCard title="Bio History" defaultExpanded={false}>
      <Grid container spacing={6}>
        <Grid size={6}>
          <ToleranceChart visits={visits} />
        </Grid>
        <Grid size={6}>
          <PainLevelChart visits={visits} />
        </Grid>
        <Grid size={6}>
          <BloodPressureChart visits={visits} />
        </Grid>
        <Grid size={6}>
          <HeartRateChart visits={visits} />
        </Grid>
      </Grid>
    </CollapsibleCard>
  );
};

export default BioHistoryChartCard;
