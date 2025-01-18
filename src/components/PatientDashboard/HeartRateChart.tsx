import { VisitWithMeta } from "@/types/Visit";
import LineChart, { LineChartProps } from "../LineChart";
import { useMemo } from "react";

interface HeartRateChartProps {
  visits: VisitWithMeta[] | undefined;
}

const HeartRateChart = ({ visits = [] }: HeartRateChartProps) => {
  const datasets = useMemo(() => {
    return visits.reduce(
      (accum, visit) => [
        {
          ...accum[0],
          data: [
            ...accum[0].data,
            { x: visit.time_start, y: visit.bio.heart_rate },
          ],
        },
      ],
      [
        {
          label: "heart_rate",
          borderColor: "red",
          data: [],
        },
      ] as LineChartProps["datasets"]
    );
  }, [visits]);
  return (
    <LineChart
      datasets={datasets}
      chartTitle="Heart Rate"
      options={{
        scales: {
          y: {
            min: 50,
            max: 150,
          },
        },
      }}
    />
  );
};

export default HeartRateChart;
