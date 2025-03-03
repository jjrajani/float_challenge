import { VisitWithMeta } from "@/types/Visit";
import { LineChartProps, defaultDataSet } from "@/components/LineChart";
import { useMemo } from "react";
import ChartWithLegend from "../ChartWithLegendWrapper";

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

const medChangedLabel = "Meds Changed";
const medChangedColor = "limegreen";

const BloodPressureChart = ({ visits = [] }: BloodPressureChartProps) => {
  const datasets = useMemo(() => {
    return visits.reduce(
      (accum, visit, i) => [
        {
          ...accum[0],
          type: "line",
          order: 2,
          data: [
            ...accum[0].data,
            { x: visit.time_start, y: visit.bio.systolic_bp },
          ],
        },
        {
          ...accum[1],
          type: "line",
          order: 3,
          data: [
            ...accum[1].data,
            { x: visit.time_start, y: visit.bio.diastolic_bp },
          ],
        },
        {
          ...accum[2],
          type: "scatter",
          order: 1,
          data:
            i % 25 === 0
              ? [...accum[2].data, { x: visit.time_start, y: 105 }]
              : accum[2].data,
        },
      ],
      [
        {
          ...defaultDataSet,
          label: sBpLabel,
          borderColor: sBpBorderColor,
          backgroundColor: sBpBackgroundColor,
          tension: 0.4,
          data: [],
        },
        {
          ...defaultDataSet,
          label: dBpLabel,
          borderColor: dBpBorderColor,
          backgroundColor: dBpBackgroundColor,
          tension: 0.4,
          data: [],
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
    <ChartWithLegend
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
      legendItems={[
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
        {
          label: medChangedLabel,
          color: medChangedColor,
        },
      ]}
    />
  );
};

export default BloodPressureChart;
