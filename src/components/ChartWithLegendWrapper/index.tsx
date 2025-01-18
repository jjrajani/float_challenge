import FlexBox from "@/components/FlexBox";
import LineChart, { LineChartProps } from "@/components/LineChart";
import ChartLegend, { ChartLegendProps } from "@/components/ChartLegend";
import { Card, CardContent } from "@mui/material";

interface ChartWithLegendProps extends LineChartProps {
  legendItems: ChartLegendProps["items"];
}

const ChartWithLegend = ({
  datasets,
  chartTitle,
  legendItems,
  options,
}: ChartWithLegendProps) => {
  return (
    <FlexBox direction="column" gap="4px">
      <Card elevation={0}>
        <CardContent>
          <LineChart
            datasets={datasets}
            chartTitle={chartTitle}
            options={options}
          />
          <ChartLegend items={legendItems} />
        </CardContent>
      </Card>
    </FlexBox>
  );
};

export default ChartWithLegend;
