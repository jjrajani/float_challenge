import { VisitWithMeta } from "@/types/Visit";
import LineChart, { LineChartProps } from "../LineChart";
import { useMemo } from "react";

interface PainLevelChartProps {
  visits: VisitWithMeta[] | undefined;
}

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
          label: "heart_rate",
          borderColor: "yellow",
          data: [],
        },
      ] as LineChartProps["datasets"]
    );
  }, [visits]);
  return (
    <LineChart
      datasets={datasets}
      chartTitle="Pain Level"
      options={{
        scales: {
          y: {
            min: 0,
            max: 10,
          },
        },
      }}
    />
  );
};

export default PainLevelChart;
