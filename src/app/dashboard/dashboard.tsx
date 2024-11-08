"use client";
import React from "react";
import Card from "../components/Card";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import MultiLineChart from "../components/MultiLineChart";
import { ListOrdered, PackageCheck, BookmarkX, Calendar1 } from "lucide-react";
import { PiShieldCheck } from "react-icons/pi";

const DashboardPage: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4 p-4">
      <div className="flex flex-col space-y-2 sm:-space-y-3">
        <h1 className="font-roboto text-xl font-semibold text-gray-600 -mt-6 sm:mt-0">
          Dashboard
        </h1>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <p className="font-roboto text-gray-400 text-sm">
            Hello Ahmad Affan! Welcome to the admin panel where you can easily
            configure settings
          </p>

          <Card
            title="Filter time"
            description="Jan 2024-Present"
            className="h-16 w-full sm:w-44 bg-white mt-2 sm:mt-0"
            icon={
              <div className="p-2 rounded-full bg-blue-200 w-8 h-8 flex items-center justify-center">
                <Calendar1 className="h-8 w-8 text-blue-600" />
              </div>
            }
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="45"
          description="Total Orders"
          className="h-full bg-white"
          icon={
            <div className="p-2 rounded-full bg-cyan-200 w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center">
              <ListOrdered className="h-6 sm:h-8 w-6 sm:w-8 text-cyan-600" />
            </div>
          }
          others={
            <p className="font-roboto text-xs text-gray-400">5% (30 Days)</p>
          }
        />

        <Card
          title="125"
          description="Total Delivered"
          className="h-full bg-white"
          icon={
            <div className="p-2 rounded-full bg-lime-200 w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center">
              <PackageCheck className="h-6 sm:h-8 w-6 sm:w-8 text-lime-600" />
            </div>
          }
          others={
            <p className="font-roboto text-xs text-gray-400">2% (30 Days)</p>
          }
        />

        <Card
          title="100"
          description="Total Cancelled"
          className="h-full bg-white"
          icon={
            <div className="p-2 rounded-full bg-red-200 w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center">
              <BookmarkX className="h-6 sm:h-8 w-6 sm:w-8 text-red-600" />
            </div>
          }
          others={
            <p className="font-roboto text-xs text-gray-400">10% (30 Days)</p>
          }
        />

        <Card
          title="$128"
          description="Total Revenue"
          className="h-full bg-white"
          icon={
            <div className="p-2 rounded-full bg-gray-200 w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center">
              <PiShieldCheck className="h-6 sm:h-8 w-6 sm:w-8 text-gray-600" />
            </div>
          }
          others={
            <p className="font-roboto text-xs text-gray-400">18% (30 Days)</p>
          }
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <Card className="h-full bg-white">
          <LineChart />
        </Card>

        <Card className="h-full bg-white">
          <BarChart />
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <Card className="h-full bg-white">
          <PieChart />
        </Card>

        <Card className="h-full bg-white">
          <MultiLineChart />
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
