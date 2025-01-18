import { PropsWithChildren } from "react";
import { Box } from "@mui/material";

interface FlexBoxProps extends PropsWithChildren {
  align?: "center" | "flex-end" | "baseline";
  direction?: "column" | "row";
  fullHeight?: boolean;
  fullWidth?: boolean;
  maxHeight?: string;
  gap?: string;
  justify?: "space-between";
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const FlexBox = ({
  align,
  children,
  direction = "row",
  fullHeight,
  fullWidth,
  gap = "16px",
  justify,
  onClick,
}: FlexBoxProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap,
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        ...(fullHeight ? { height: "100%" } : {}),
        ...(fullWidth ? { width: "100%" } : {}),
        ...(onClick ? { cursor: "pointer" } : {}),
      }}
      onClick={onClick}>
      {children}
    </Box>
  );
};

export default FlexBox;
