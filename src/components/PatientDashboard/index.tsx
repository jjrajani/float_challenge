import { usePatient } from "@/db/Patients";
import { useMemo } from "react";
import { Typography } from "@mui/material";
import FlexBox from "../FlexBox";
import LastVisitCard from "./LastVisitCard";
import BioHistoryChartCard from "./BioHistoryChartCard";
import PatientOverviewCard from "./PatientOverviewCard";
import PatientVisitHistoryCard from "./PatientVisitHistoryCard";

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
          <Typography
            variant="h3"
            component="p"
            sx={{
              position: "sticky",
              top: "0",
              zIndex: 1,
              height: 36,
              backgroundColor: "white",
              borderBottom: "solid grey 1px",
            }}>
            {patient?.name}
          </Typography>
          <PatientOverviewCard patient={patient} />
          {lastVisit && <LastVisitCard visit={lastVisit} />}

          <BioHistoryChartCard visits={patient?.visits} />

          <PatientVisitHistoryCard patient={patient} />
        </>
      )}
    </FlexBox>
  );
};

export default PatientDashboard;
