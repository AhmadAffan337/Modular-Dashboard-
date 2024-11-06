"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface DonutChartProps {
  percentage: number;
  color: string;
  label: string;
}

const DonutChart: React.FC<DonutChartProps> = ({
  percentage,
  color,
  label,
}) => {
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [color, "#F3F4F6"],
        borderWidth: 0,
        cutout: "70%",
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="mt-5 w-[40px] sm:w-[90px] text-center">
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: "relative",
          top: "-60px",
          fontSize: "16px",
          fontWeight: "bold",
        }}
        className="text-[14px] sm:text-[12px]"
      >
        {percentage}%
      </div>
      <p className="mt-[-10px] text-[14px] sm:text-[12px] text-gray-600">
        {label}
      </p>
    </div>
  );
};

const PieChart: React.FC = () => {
  return (
    <div className="flex justify-around items-center sm:flex-row sm:gap-4">
      <DonutChart percentage={85} color="#FF6384" label="Total Order" />
      <DonutChart percentage={27} color="#4BC0C0" label="Customer Growth" />
      <DonutChart percentage={63} color="#36A2EB" label="Total Revenue" />
    </div>
  );
};

export default PieChart;
