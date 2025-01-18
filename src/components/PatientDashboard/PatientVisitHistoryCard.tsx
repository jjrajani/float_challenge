import Accordion from "@/components/Accordion";
import { useMemo } from "react";
import VisitDetails from "./VisitDetails";
import { formatDateIntl } from "@/utils/date";
import FlexBox from "@/components/FlexBox";
import SymptomsStatusDot from "./SymptomsStatusDot";
import { Patient } from "@/types/Patient";
import CollapsibleCard from "@/components/CollapsibleCard";

interface PatientVisitHistoryCardProps {
  patient: Patient | undefined;
}

const PatientVisitHistoryCard = ({ patient }: PatientVisitHistoryCardProps) => {
  const panels = useMemo(() => {
    if (!patient) {
      return [];
    }

    return patient.visits.reverse().map((v) => ({
      id: v.id,
      // Title of accordion
      title: `${formatDateIntl(v.time_start)} | Nurse: ${v.nurse.name}`,
      // Content of accordion
      component: VisitDetails,
      // Data prop for VisitDetails component
      data: v,
      // Right side of Accordion Header custom components
      actions: (
        <FlexBox align="center" gap={"4px"}>
          <SymptomsStatusDot symptomsStatus={v.symptoms_status} />
        </FlexBox>
      ),
    }));
  }, [patient]);

  return (
    <CollapsibleCard title="Visit History" maxExpandHeight={"550px"}>
      <Accordion panels={panels} initialExpanded={panels[0].id} />
    </CollapsibleCard>
  );
};

export default PatientVisitHistoryCard;
