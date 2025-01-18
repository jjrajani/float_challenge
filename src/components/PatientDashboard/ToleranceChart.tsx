import { VisitWithMeta } from "@/types/Visit";
import { defaultDataSet, LineChartProps } from "@/components/LineChart";
import { useMemo } from "react";
import ChartWithLegend from "../ChartWithLegendWrapper";

interface ToleranceChartProps {
  visits: VisitWithMeta[] | undefined;
}

const chartTitle = "Tolerance";
const label = "Tolerance";
const borderColor = "rgb(255, 223, 102)"; // Orange line color
const backgroundColor = "rgba(255, 223, 102, 0.2)"; // Light orange fill for the area under the line

const medChangedLabel = "Meds Changed";
const medChangedColor = "limegreen";

const ToleranceChart = ({ visits = [] }: ToleranceChartProps) => {
  const datasets = useMemo(() => {
    return visits.reduce(
      (accum, visit, i) => [
        {
          ...accum[0],
          order: 2,
          data: [
            ...accum[0].data,
            { x: visit.time_start, y: parseInt(visit.symptoms_status, 10) },
          ],
        },
        {
          ...accum[1],
          type: "scatter",
          order: 1,
          data:
            i % 25 === 0
              ? [...accum[1].data, { x: visit.time_start, y: 0 }]
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
    <ChartWithLegend
      datasets={datasets}
      chartTitle={chartTitle}
      options={{
        scales: {
          y: {
            min: -1,
            max: 1,

            ticks: {
              maxTicksLimit: 3,

              callback: (tickValue) => {
                if (tickValue === -1) {
                  return "Declined";
                }
                if (tickValue === 0) {
                  return "No Change";
                }
                if (tickValue === 1) {
                  return "Improved";
                }
              },
            },
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
  );
};

export default ToleranceChart;
