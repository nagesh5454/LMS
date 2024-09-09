import { ChartNoAxesColumn, SquareLibrary } from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="mx-5 flex my-10">
      {/* Left Sidebar   */}
      <div className="w-[20%] space-y-8 border-r border-r-gray-400 h-fit">
        <div className="space-y-4">
          <Link to="dashboard" className="flex items-center gap-4 text-gray-700 hover:text-blue-600 cursor-pointer transition">
            <ChartNoAxesColumn size={18} />
            <h1 className="font-semibold">Dashboard</h1>
          </Link>
          <Link to="course" className="flex items-center gap-4 text-gray-700 hover:text-blue-600 cursor-pointer transition">
            <SquareLibrary size={18} />
            <h1 className="font-semibold">Courses</h1>
          </Link>
        </div>
      </div>
      {/* Main Outlet Content */}
      <Outlet />
    </div>
  );
};

export default Sidebar;
