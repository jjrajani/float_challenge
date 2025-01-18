import { VisitWithMeta } from "@/types/Visit";
import LineChart, { LineChartProps } from "../LineChart";
import { useMemo } from "react";

interface BloodPressureChartProps {
  visits: VisitWithMeta[] | undefined;
}

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
          label: "systolic_bp",
          borderColor: "green",
          data: [],
        },

        {
          label: "diastolic_bp",
          borderColor: "purple",
          data: [],
        },
      ] as LineChartProps["datasets"]
    );
  }, [visits]);
  return <LineChart datasets={datasets} chartTitle="Blood Pressure" />;
};

export default BloodPressureChart;
