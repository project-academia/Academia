import Heatmap from "@/app/components/heatmap";
import CourseAttendance from "@/app/components/courseAttendance";
import { Navbar } from "@/app/components";
import { SidebarComponent } from "@/app/components/sidebar";

const items = [
  { name: "Dashboard" },
  { name: "Profile" },
  { name: "Settings" },
  { name: "Logout" },
  { name: "Courses" },
];

async function fetchData() {
  // Data will come from backend, abhi rnadom
  const barChartData = [
    { name: "DBMS", classesAttended: 40, totalClasses: 50 },
    { name: "OOPS", classesAttended: 35, totalClasses: 45 },
    { name: "OS", classesAttended: 38, totalClasses: 50 },
    { name: "JAVA", classesAttended: 42, totalClasses: 48 },
    { name: "PSLP", classesAttended: 36, totalClasses: 44 },
  ];

  const heatmapData = [];
  for (let i = 0; i < 52; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      week.push({
        value: Math.random() > 0.3 ? Math.floor(Math.random() * 3) + 1 : 0,
      });
    }
    heatmapData.push(week);
  }

  return { barChartData, heatmapData };
}

export default async function AttendancePage() {
  const { barChartData, heatmapData } = await fetchData();

  return (
    <div className="flex">
      <div className="w-1/6 p-4 bg-gray-800">
       
        <SidebarComponent menuItems={items} />
      </div>

      <div className="w-5/6 p-6 space-y-6 bg-gray-900 text-white pt-16 ">
       <div className="border-b border-gray-700"> 
       <Navbar />
       </div>
        <div>
        <Heatmap heatmapData={heatmapData} />
        <CourseAttendance barChartData={barChartData} />
        </div>
      </div>
    </div>
  );
}
