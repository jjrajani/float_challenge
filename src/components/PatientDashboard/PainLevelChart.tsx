import { VisitWithMeta } from "@/types/Visit";
import { defaultDataSet, LineChartProps } from "@/components/LineChart";
import { useMemo } from "react";
import ChartWithLegend from "../ChartWithLegendWrapper";

interface PainLevelChartProps {
  visits: VisitWithMeta[] | undefined;
}

const chartTitle = "Pain Level";
const label = "Pain Level";
const borderColor = "rgb(255, 159, 64)"; // Orange line color
const backgroundColor = "rgba(255, 159, 64, 0.2)"; // Light orange fill for the area under the line

const medChangedLabel = "Meds Changed";
const medChangedColor = "limegreen";

const PainLevelChart = ({ visits = [] }: PainLevelChartProps) => {
  const datasets = useMemo(() => {
    return visits.reduce(
      (accum, visit, i) => [
        {
          ...accum[0],
          order: 2,
          data: [
            ...accum[0].data,
            { x: visit.time_start, y: visit.bio.pain_level },
          ],
        },
        {
          ...accum[1],
          type: "scatter",
          order: 1,
          data:
            i % 25 === 0
              ? [...accum[1].data, { x: visit.time_start, y: 5 }]
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
    <>
      <ChartWithLegend
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
        legendItems={[
          {
            label: label,
            color: borderColor,
          },
          {
            label: medChangedLabel,
            color: medChangedColor,
          },
        ]}
      />
    </>
  );
};

export default PainLevelChart;
