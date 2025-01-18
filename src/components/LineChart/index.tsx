"use client";
import { createRef, useEffect } from "react";
import {
  Chart,
  LineController,
  LineElement,
  LinearScale,
  Title,
  TimeSeriesScale,
  PointElement,
  ChartOptions,
} from "chart.js";
import "chartjs-adapter-date-fns";
import merge from "lodash.merge";
import { styled } from "@mui/material";

Chart.register(
  LineController,
  LineElement,
  LinearScale,
  // CategoryScale,
  TimeSeriesScale,
  PointElement,
  Title
);

const StyledChartWrapper = styled("div")(() => ({
  height: 300,
  width: "100%",
}));

export interface LineChartProps {
  chartTitle?: string;
  datasets: {
    label: string;
    data: { x: string; y: number }[];
    borderColor: string;
  }[];
  options?: ChartOptions<"line">;
}

const LineChart = ({ chartTitle, datasets, options }: LineChartProps) => {
  const chartCanvas = createRef<HTMLCanvasElement>();
  const chartAPI = createRef<Chart>();

  useEffect(() => {
    if (chartCanvas.current) {
      console.log("%c chartCanvas", "color: orange", chartCanvas);

      const data = {
        datasets,
      };

      const chart = new Chart(chartCanvas.current, {
        type: "line",
        data,
        options: merge(
          {
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: Boolean(chartTitle),
                text: chartTitle,
              },
            },
            scales: {
              x: {
                type: "timeseries",
                time: {
                  // Custom formatting for ticks (dates on the x-axis)
                  displayFormats: {
                    hour: "MMM d",
                    day: "MMM d", // Example: "Jan 1"
                    month: "MMM yyyy", // Example: "Jan 2023"
                  },
                  tooltipFormat: "PP", // Example: "Jan 1, 2023"
                },
              },
            },
          } as ChartOptions,
          options || {}
        ),
      });

      return () => {
        chart.destroy();
      };
    }
  }, [chartCanvas, chartAPI, chartTitle, datasets, options]);

  return (
    <StyledChartWrapper>
      <canvas ref={chartCanvas} />
    </StyledChartWrapper>
  );
};

export default LineChart;
