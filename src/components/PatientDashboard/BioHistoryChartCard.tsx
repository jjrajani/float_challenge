import { VisitWithMeta } from "@/types/Visit";
import { Grid2 as Grid } from "@mui/material";
import BloodPressureChart from "./BloodPressureChart";
import HeartRateChart from "./HeartRateChart";
import PainLevelChart from "./PainLevelChart";
import CollapsibleCard from "../CollapsibleCard";

interface BioHistoryChartCardProps {
  visits: VisitWithMeta[] | undefined;
}

const BioHistoryChartCard = ({ visits = [] }: BioHistoryChartCardProps) => {
  return (
    <CollapsibleCard title="Bio History">
      <Grid container spacing={4}>
        <Grid size={4}>
          <BloodPressureChart visits={visits} />
        </Grid>
        <Grid size={4}>
          <HeartRateChart visits={visits} />
        </Grid>
        <Grid size={4}>
          <PainLevelChart visits={visits} />
        </Grid>
      </Grid>
    </CollapsibleCard>
  );
};

export default BioHistoryChartCard;
