import { formatDateIntl } from "@/utils/date";
import { Grid2 as Grid } from "@mui/material";
import { getBioBloodPressure } from "@/db/PatientBioDatas";
import TitleValuePair from "../TitleValuePair";
import { VisitWithMeta } from "@/types/Visit";
import CollapsibleCard from "../CollapsibleCard";
import VisitDetails from "./VisitDetails";

interface LastVisitCardProps {
  visit: VisitWithMeta;
}

const LastVisitCard = ({ visit }: LastVisitCardProps) => {
  return (
    <CollapsibleCard title="Last Visit">
      <VisitDetails data={visit} />
    </CollapsibleCard>
  );
};

export default LastVisitCard;
