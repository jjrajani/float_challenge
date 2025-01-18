import FlexBox from "@/components/FlexBox";
import { Grid2 as Grid, styled, Typography } from "@mui/material";

export interface ChartLegendProps {
  items: {
    label: string;
    color: string;
  }[];
}

const Square = styled("div")(({ theme }) => ({
  height: "16px",
  width: "16px",
  borderRadius: theme.shape.borderRadius,
}));

const ChartLegend = ({ items }: ChartLegendProps) => {
  return (
    <Grid container px={1}>
      {items.map((item) => (
        <Grid size={4} key={item.label}>
          <FlexBox gap="4px" align="center">
            {item.color && <Square sx={{ backgroundColor: item.color }} />}
            {item.label && (
              <Typography variant="caption">{item.label}</Typography>
            )}
          </FlexBox>
        </Grid>
      ))}
    </Grid>
  );
};

export default ChartLegend;
