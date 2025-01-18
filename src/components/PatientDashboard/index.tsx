import { usePatient } from "@/db/Patients";
import { useMemo } from "react";
import { styled, Typography } from "@mui/material";
import FlexBox from "@/components/FlexBox";
import LastVisitCard from "./LastVisitCard";
import BioHistoryChartCard from "./BioHistoryChartCard";
import PatientOverviewCard from "./PatientOverviewCard";
import PatientVisitHistoryCard from "./PatientVisitHistoryCard";
import { borderGrey } from "@/theme";

const StyledStickHeader = styled(Typography)(() => ({
  position: "sticky",
  top: "0",
  zIndex: 1,
  height: 38,
  backgroundColor: "white",
  borderBottom: `solid ${borderGrey} 1px`,
}));

interface PatientDashboardProps {
  patientId?: string;
}

const PatientDashboard = ({ patientId }: PatientDashboardProps) => {
  const { patient } = usePatient(patientId);

  const lastVisit = useMemo(() => patient?.visits.slice(-1)[0], [patient]);

  return (
    <FlexBox direction="column" maxHeight="100%">
      {!patientId && <div>Select a Patient</div>}
      {patientId && (
        <>
          <StyledStickHeader variant="h2">{patient?.name}</StyledStickHeader>

          <PatientOverviewCard patient={patient} />

          <BioHistoryChartCard visits={patient?.visits} />

          {lastVisit && <LastVisitCard visit={lastVisit} />}

          <PatientVisitHistoryCard patient={patient} />
        </>
      )}
    </FlexBox>
  );
};

export default PatientDashboard;
