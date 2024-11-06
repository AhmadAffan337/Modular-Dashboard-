"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { ChartOptions } from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title
);

const LineChart = () => {
  const data = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Orders",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "#36A2EB",
        tension: 0.4,
        pointRadius: (ctx: any) => {
          const maxDataPoint = Math.max(...data.datasets[0].data);
          return ctx.raw === maxDataPoint ? 6 : 0;
        },
        pointBackgroundColor: (ctx: any) => {
          const maxDataPoint = Math.max(...data.datasets[0].data);
          return ctx.raw === maxDataPoint ? "#36A2EB" : "transparent";
        },
      },
      {
        label: "Revenue",
        data: [45, 39, 50, 65, 76, 70, 50],
        borderColor: "#FF6384",
        tension: 0.4,
        pointRadius: (ctx: any) => {
          const maxDataPoint = Math.max(...data.datasets[1].data);
          return ctx.raw === maxDataPoint ? 6 : 0;
        },
        pointBackgroundColor: (ctx: any) => {
          const maxDataPoint = Math.max(...data.datasets[1].data);
          return ctx.raw === maxDataPoint ? "#FF6384" : "transparent";
        },
      },
      {
        label: "Customers",
        data: [25, 29, 40, 51, 46, 65, 30],
        borderColor: "#FFCE56",
        tension: 0.4,
        pointRadius: (ctx: any) => {
          const maxDataPoint = Math.max(...data.datasets[2].data);
          return ctx.raw === maxDataPoint ? 6 : 0;
        },
        pointBackgroundColor: (ctx: any) => {
          const maxDataPoint = Math.max(...data.datasets[2].data);
          return ctx.raw === maxDataPoint ? "#FFCE56" : "transparent";
        },
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Weekly Data Overview",
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: true,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div className="w-full h-[200px] sm:h-[300px] md:h-[200px] lg:h-[200px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
