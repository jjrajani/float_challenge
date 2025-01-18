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
  Tooltip,
  ScatterController,
} from "chart.js";
import "chartjs-adapter-date-fns";
import annotationPlugin from "chartjs-plugin-annotation";
import merge from "lodash.merge";
import { styled } from "@mui/material";

Chart.register(
  LineController,
  LineElement,
  LinearScale,
  TimeSeriesScale,
  PointElement,
  Title,
  annotationPlugin,
  Tooltip,
  ScatterController
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
    backgroundColor: string;
    tension: number;
  }[];
  options?: ChartOptions<"line">;
}

export const defaultDataSet = {
  label: "",
  borderColor: "",
  backgroundColor: "",
  tension: 0.4,
  data: [],
};

const LineChart = ({ chartTitle, datasets, options }: LineChartProps) => {
  const chartCanvas = createRef<HTMLCanvasElement>();
  const chartAPI = createRef<Chart>();

  useEffect(() => {
    if (chartCanvas.current) {
      const data = {
        datasets,
      };

      const _options = merge(
        {
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: Boolean(chartTitle),
              text: chartTitle,
            },
            tooltip: {
              mode: "index",
              intersect: false,
              caretSize: 0,
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
      );

      const chart = new Chart(chartCanvas.current, {
        type: "line",
        data,
        options: _options,
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
