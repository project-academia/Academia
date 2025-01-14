//for now the date toggle isn't working well , so plain abhi ke lie 

import React from "react";

const getActivityColor = (value: number) => {
  if (value === 0) return "bg-gray-800";
  if (value === 1) return "bg-green-300/30";
  if (value === 2) return "bg-green-500/50";
  return "bg-green-600";
};

const Heatmap = ({ heatmapData }: { heatmapData: { value: number }[][] }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden">
      <div className="p-4 pb-2">
        <h3 className="text-white text-sm font-normal">Semester Activity</h3>
      </div>
      <div className="p-4 grid grid-rows-[repeat(7,1fr)] grid-flow-col gap-1">
        {heatmapData.flat().map((day, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-sm ${getActivityColor(day.value)}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Heatmap;
