"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Dataset 1",
        data: [60, 80, 20, 40, 70, 30, 50],
        backgroundColor: "#FF2D20",
        maxBarThickness: 10,
      },
      {
        label: "Dataset 2",
        data: [50, 70, 30, 60, 50, 20, 40],
        backgroundColor: "#FFCE56",
        maxBarThickness: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Customer Map",
        font: {
          size: 14,
          family: "Arial",
          weight: "normal" as const, // Use `as const` to explicitly cast the font weight
        },
        align: "center" as const,
        padding: {
          top: 10,
          bottom: 10,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#e5e7eb",
        },
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  };

  return (
    <div className="w-full h-[200px] sm:h-[200px] md:h-[250px] lg:h-[200px] p-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
