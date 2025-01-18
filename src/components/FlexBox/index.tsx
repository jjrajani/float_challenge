import { PropsWithChildren } from "react";
import { Box } from "@mui/material";

interface FlexBoxProps extends PropsWithChildren {
  align?: "center" | "flex-end" | "baseline";
  direction?: "column" | "row";
  gap?: string;
  fullWidth?: boolean;
}

const FlexBox = ({
  align,
  children,
  direction = "row",
  gap = "16px",
  fullWidth,
}: FlexBoxProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap,
        flexDirection: direction,
        alignItems: align,
        ...(fullWidth ? { width: "100%" } : {}),
      }}>
      {children}
    </Box>
  );
};

export default FlexBox;
