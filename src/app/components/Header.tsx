import React from "react";
import { Bell, Mail, Gift, Settings, User } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col mt-5 sm:flex-row justify-between items-center p-4 space-y-3 sm:space-y-0">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 border rounded-md w-full sm:w-[60%] text-sm mt-10 sm:mt-0"
      />

      <div className="flex justify-center sm:justify-start space-x-2 sm:space-x-3 mt-2 sm:mt-0">
        <div className="p-2 rounded-md bg-blue-100">
          <Bell className="h-5 w-5 text-blue-500" />
        </div>
        <div className="p-2 rounded-md bg-blue-100">
          <Mail className="h-5 w-5 text-blue-500" />
        </div>
        <div className="p-2 rounded-md bg-purple-100">
          <Gift className="h-5 w-5 text-purple-500" />
        </div>
        <div className="p-2 rounded-md bg-red-100">
          <Settings className="h-5 w-5 text-red-500" />
        </div>
      </div>

      <div className="hidden sm:block w-0.5 h-8 bg-gray-300"></div>

      <div className="flex items-center space-x-2">
        <p className="font-roboto text-sm">
          Hello! <b>Affan</b>
        </p>
        <User className="h-6 w-6 text-gray-600" />
      </div>
    </header>
  );
};

export default Header;
