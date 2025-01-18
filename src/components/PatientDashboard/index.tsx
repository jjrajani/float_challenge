import { usePatient } from "@/db/Patients";
import Accordion from "@/components/Accordion";
import { useMemo } from "react";
import VisitDetails from "./VisitDetails";
import { formatDateIntl } from "@/utils/date";
import { Typography } from "@mui/material";
import FlexBox from "../FlexBox";
import SymptomsStatusDot from "./SymptomsStatusDot";

interface PatientDashboardProps {
  patientId?: string;
}

const PatientDashboard = ({ patientId }: PatientDashboardProps) => {
  const { patient } = usePatient(patientId);
  const panels = useMemo(() => {
    if (!patient) {
      return [];
    }

    return patient.visits.map((v) => ({
      id: v.id,
      // Title of accordion
      title: `${formatDateIntl(v.time_start)} | Nurse: ${v.nurse.name}`,
      // Content of accordion
      component: VisitDetails,
      // Data prop for VisitDetails componnt
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
    <FlexBox direction="column" fullWidth>
      {!patientId && <div>Select a Patient</div>}
      {patientId && (
        <>
          <FlexBox gap={"8px"} align="flex-end">
            <Typography variant="h4" component="p">
              Patient:
            </Typography>
            <Typography variant="h3" component="p">
              {patient?.name}
            </Typography>
          </FlexBox>

          <Accordion panels={panels} initialExpanded={panels[0].id} />
        </>
      )}
    </FlexBox>
  );
};

export default PatientDashboard;
