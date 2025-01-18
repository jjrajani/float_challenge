import { VisitWithMeta } from "@/types/Visit";
import LineChart, {
  defaultDataSet,
  LineChartProps,
} from "@/components/LineChart";
import { useMemo } from "react";
import ChartLegend from "@/components/ChartLegend";
import FlexBox from "@/components/FlexBox";

interface HeartRateChartProps {
  visits: VisitWithMeta[] | undefined;
}

const chartTitle = "Heart Rate";
const label = "Heart Rate";
const borderColor = "rgb(153, 102, 255)";
const backgroundColor = "rgba(153, 102, 255, 0.2)";

const thresholdLabel = "Ideal Heart Rate";
const thresholdBGColor = "rgba(173, 216, 230, 0.2)"; // Light red fill;
const thresholdBorderColor = "rgb(173, 216, 230)"; // Red border for systolic range

const medChangedLabel = "Meds Changed";
const medChangedColor = "limegreen";

const HeartRateChart = ({ visits = [] }: HeartRateChartProps) => {
  const datasets = useMemo(() => {
    return visits.reduce(
      (accum, visit, i) => [
        {
          ...accum[0],
          order: 2,
          data: [
            ...accum[0].data,
            { x: visit.time_start, y: visit.bio.heart_rate },
          ],
        },
        {
          ...accum[1],
          type: "scatter",
          order: 1,
          data:
            i % 25 === 0
              ? [...accum[1].data, { x: visit.time_start, y: 100 }]
              : accum[1].data,
        },
      ],
      [
        {
          ...defaultDataSet,
          label,
          borderColor,
          backgroundColor,
        },
        {
          label: medChangedLabel,
          borderColor: medChangedColor,
          backgroundColor: medChangedColor,
          tension: 0.4,
          data: [],
          radius: 4,
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
              min: 50,
              max: 150,
            },
          },
          plugins: {
            annotation: {
              annotations: [
                {
                  type: "box",
                  yMin: 90, // Bottom threshold for systolic
                  yMax: 120, // Upper threshold for systolic
                  backgroundColor: thresholdBGColor,
                  borderColor: thresholdBorderColor,
                  borderWidth: 1,
                  drawTime: "beforeDatasetsDraw", // This ensures the box is drawn behind the lines
                },
              ],
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
          {
            label: thresholdLabel,
            color: thresholdBGColor,
          },
          {
            label: medChangedLabel,
            color: medChangedColor,
          },
        ]}
      />
    </FlexBox>
  );
};

export default HeartRateChart;
