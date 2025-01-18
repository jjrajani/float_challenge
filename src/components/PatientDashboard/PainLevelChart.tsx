import { VisitWithMeta } from "@/types/Visit";
import LineChart, {
  defaultDataSet,
  LineChartProps,
} from "@/components/LineChart";
import { useMemo } from "react";
import ChartLegend from "@/components/ChartLegend";
import FlexBox from "@/components/FlexBox";

interface PainLevelChartProps {
  visits: VisitWithMeta[] | undefined;
}

const chartTitle = "Pain Level";
const label = "Pain Level";
const borderColor = "rgb(255, 159, 64)"; // Orange line color
const backgroundColor = "rgba(255, 159, 64, 0.2)"; // Light orange fill for the area under the line

const PainLevelChart = ({ visits = [] }: PainLevelChartProps) => {
  const datasets = useMemo(() => {
    return visits.reduce(
      (accum, visit) => [
        {
          ...accum[0],
          data: [
            ...accum[0].data,
            { x: visit.time_start, y: visit.bio.pain_level },
          ],
        },
      ],
      [
        {
          ...defaultDataSet,
          label,
          borderColor,
          backgroundColor,
        },
      ] as LineChartProps["datasets"]
    );
  }, [visits]);
  return (
    <FlexBox direction="column" gap="4px">
      <LineChart
        datasets={datasets}
        chartTitle={chartTitle}
        options={{
          scales: {
            y: {
              min: 0,
              max: 10,
            },
          },
        }}
      />
      <ChartLegend
        items={[
          {
            label: label,
            color: borderColor,
          },
        ]}
      />
    </FlexBox>
  );
};

export default PainLevelChart;
