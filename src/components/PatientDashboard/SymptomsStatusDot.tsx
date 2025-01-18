import { Visit } from "@/types/Visit";
import { symptomsStatusMeta } from "@/constants/symptoms";
import { Tooltip } from "@mui/material";

interface SymptomsStatusDotProps {
  symptomsStatus: Visit["symptoms_status"];
}

const SymptomsStatusDot = ({ symptomsStatus }: SymptomsStatusDotProps) => {
  return (
    <Tooltip title={symptomsStatusMeta[symptomsStatus].label}>
      {symptomsStatusMeta[symptomsStatus].icon}
    </Tooltip>
  );
};

export default SymptomsStatusDot;
