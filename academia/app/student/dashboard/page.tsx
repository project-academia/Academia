import React from "react";
import Navbar from "../../components/navbar";
import { SidebarComponent } from "../../components/sidebar";
import { Button } from "flowbite-react";
import Overview from "../../components/Overview"; // Import the Overview component
import ActivityTable from "@/app/components/ActivityTable";

const items = [
  { name: "Dashboard" },
  { name: "Attendance" },
  { name: "Settings" },
  { name: "Logout" },
  { name: "Courses" },
];

const StudentDashboard = () => {
  return (
    <div className="relative">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Main Layout */}
      <div className="flex pt-16">
        {/* Sidebar */}
        <div className="fixed top-16 left-0 w-64 h-screen bg-gray-800">
          <SidebarComponent menuItems={items} />
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 p-6">
          {/* Overview Section */}
          <Overview />
          <ActivityTable />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
