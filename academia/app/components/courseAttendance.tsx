"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const CourseAttendance = ({
  barChartData,
}: {
  barChartData: { name: string; classesAttended: number; totalClasses: number }[];
}) => {
  return (
    <div className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden">
      <div className="p-4 pb-2">
        <h3 className="text-white text-sm font-normal">Course Activity</h3>
      </div>
      <div className="p-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={barChartData}
            layout="vertical"
            barGap={8}
            barSize={8}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#333"
              horizontal={true}
              vertical={false}
            />
            <XAxis
              type="number"
              stroke="#666"
              tick={{ fill: "#666", fontSize: 12 }}
              axisLine={{ stroke: "#333" }}
            />
            <YAxis
              type="category"
              dataKey="name"
              stroke="#666"
              tick={{ fill: "#666", fontSize: 12 }}
              axisLine={{ stroke: "#333" }}
            />
            <Bar
              dataKey="classesAttended"
              fill="#3b82f6"
              radius={[4, 4, 4, 4]}
            />
            <Bar
              dataKey="totalClasses"
              fill="#22c55e"
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CourseAttendance;
