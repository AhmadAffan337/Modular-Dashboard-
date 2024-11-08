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
        label: "Customers",
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: [
          "#FFCE56", // yellow
          "#36A2EB", // blue
          "#FF6384", // red
          "#4BC0C0", // teal
          "#9966FF", // purple
          "#FF9F40", // orange
          "#FF6384", // pink
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 10,
          },
        },
      },
      title: {
        display: true,
        text: "Weekly Customers",
        font: {
          size: 14,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 10,
          },
        },
      },
      y: {
        grid: {
          display: true,
        },
        ticks: {
          font: {
            size: 10,
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-[200px] sm:h-[300px] md:h-[200px] lg:h-[200px]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
