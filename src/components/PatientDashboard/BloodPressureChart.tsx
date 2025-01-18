import { VisitWithMeta } from "@/types/Visit";
import LineChart, { LineChartProps } from "@/components/LineChart";
import ChartLegend from "@/components/ChartLegend";
import { useMemo } from "react";
import FlexBox from "@/components/FlexBox";

interface BloodPressureChartProps {
  visits: VisitWithMeta[] | undefined;
}

const chartTitle = "Blood Pressure";

const sBpLabel = "Systolic BP";
const sBpThresholdLabel = "Ideal Systolic BP";
const sBpBorderColor = "rgb(255, 99, 132)";
const sBpBackgroundColor = "rgba(255, 99, 132, 0.2)";
const sBThresholdBorderColor = "rgba(75, 192, 192, 0.3)";

const dBpLabel = "Diastolic BP";
const dBpThresholdLabel = "Ideal Diastolic BP";
const dBpBorderColor = "rgb(54, 162, 235)";
const dBpBackgroundColor = "rgba(54, 162, 235, 0.2)";
const dBThresholdBorderColor = "rgba(255, 159, 64, 0.3)";

const BloodPressureChart = ({ visits = [] }: BloodPressureChartProps) => {
  const datasets = useMemo(() => {
    return visits.reduce(
      (accum, visit) => [
        {
          ...accum[0],
          data: [
            ...accum[0].data,
            { x: visit.time_start, y: visit.bio.systolic_bp },
          ],
        },
        {
          ...accum[1],
          data: [
            ...accum[1].data,
            { x: visit.time_start, y: visit.bio.diastolic_bp },
          ],
        },
      ],
      [
        {
          label: sBpLabel,
          borderColor: sBpBorderColor,
          backgroundColor: sBpBackgroundColor,
          tension: 0.4,
          data: [],
        },

        {
          label: dBpLabel,
          borderColor: dBpBorderColor,
          backgroundColor: dBpBackgroundColor,
          tension: 0.4,
          data: [],
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
          plugins: {
            tooltip: {
              mode: "index",
              intersect: false,
            },

            annotation: {
              annotations: [
                {
                  type: "line",
                  scaleID: "y",
                  value: 120, // Threshold for systolic BP (e.g., normal max)
                  // borderColor: "rgba(255, 99, 132, 0.5)", // Light red color for systolic threshold
                  borderColor: sBThresholdBorderColor,
                  borderWidth: 2,
                },
                {
                  type: "line",
                  scaleID: "y",
                  value: 80, // Threshold for diastolic BP (e.g., normal min)
                  borderColor: dBThresholdBorderColor, // "rgba(54, 162, 235, 0.5)", // Light blue color for diastolic threshold
                  borderWidth: 2,
                },
              ],
            },
          },
        }}
      />
      <ChartLegend
        items={[
          {
            label: sBpLabel,
            color: sBpBorderColor,
          },
          {
            label: sBpThresholdLabel,
            color: sBThresholdBorderColor,
          },
          {
            label: dBpLabel,
            color: dBpBorderColor,
          },
          {
            label: dBpThresholdLabel,
            color: dBThresholdBorderColor,
          },
        ]}
      />
    </FlexBox>
  );
};

export default BloodPressureChart;
