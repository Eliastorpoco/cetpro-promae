
import React from 'react';
import { cn } from "@/lib/utils";

export const ShiftLegend = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-6 justify-center">
      <div className="flex items-center">
        <span className={cn("inline-block w-3 h-3 rounded-full mr-2", "bg-yellow-400")}></span>
        <span className="text-sm text-gray-600">Mañana</span>
      </div>
      <div className="flex items-center">
        <span className={cn("inline-block w-3 h-3 rounded-full mr-2", "bg-blue-400")}></span>
        <span className="text-sm text-gray-600">Tarde</span>
      </div>
      <div className="flex items-center">
        <span className={cn("inline-block w-3 h-3 rounded-full mr-2", "bg-purple-400")}></span>
        <span className="text-sm text-gray-600">Noche</span>
      </div>
    </div>
  );
};
