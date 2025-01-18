import { VisitWithMeta } from "@/types/Visit";
import CollapsibleCard from "@/components/CollapsibleCard";
import VisitDetails from "@/components/PatientDashboard/VisitDetails";

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
