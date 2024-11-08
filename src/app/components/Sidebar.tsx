"use client";

import React, { useState } from "react";
import { Home } from "lucide-react";
import { SideBarItems } from "./SideBarData";
import Card from "./Card";
import Button from "./Button";

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="relative">
      <button
        className="sm:hidden h-8 ml-5 fixed top-3 left-4 z-20 p-1 bg-gray-400 text-white rounded-md"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "Close" : "Open"} Menu
      </button>

      <aside
        className={`fixed sm:relative z-10 sm:z-auto sm:block bg-white shadow-lg p-6 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 w-64 min-h-screen`}
      >
        <h2 className="text-2xl font-roboto font-black ml-6 mt-10 sm:mt-3">
          Ahmad Affan
        </h2>
        <span className="text-sm font-semibold font-roboto text-gray-400 block mt-1 mb-6 ml-6">
          Current Admin
        </span>
        <div className="ml-6 space-y-6 sm:space-y-4 overflow-y-auto sm:overflow-visible max-h-[calc(100vh-200px)] sm:max-h-full">
          <div className="flex items-center bg-emerald-200 p-3 rounded-md w-40 space-x-4">
            <Home className="text-emerald-500" />
            <span className="text-sm font-roboto font-bold text-emerald-500">
              Home
            </span>
          </div>

          <ul className="space-y-4">
            {SideBarItems.map((e: any) => (
              <li key={e.id} className="flex items-center space-x-4">
                <e.icon className="text-gray-700" />
                <span className="text-sm font-roboto">{e.name}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Card
              className="bg-emerald-600 w-44 mt-8"
              description="Hello! Subscribe to our new offer for special deals and discounts."
            >
              <Button
                title="Subscribe"
                className="bg-customGray hover:bg-slate-200 w-32 text-black font-roboto -mt-4 py-2 px-4 rounded"
              />
            </Card>
          </div>
        </div>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 sm:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
