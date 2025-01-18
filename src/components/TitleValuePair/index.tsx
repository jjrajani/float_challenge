import { ReactNode } from "react";
import FlexBox from "../FlexBox";
import { Typography } from "@mui/material";

interface TitleValuePairProps {
  title: string;
  value: string | ReactNode;
}

const TitleValuePair = ({ title, value }: TitleValuePairProps) => {
  return (
    <FlexBox direction="column" align="baseline" gap="0px">
      <Typography fontSize={14} color="textSecondary">
        {title}
      </Typography>
      {typeof value === "string" && <Typography>{value}</Typography>}
      {typeof value !== "string" && value}
    </FlexBox>
  );
};

export default TitleValuePair;
