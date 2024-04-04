import { cn } from "@/lib/utils";
import React from "react";

const CardDashboard = ({ icons, title, value, className }) => {
  return (
    <div className={cn("flex flex-row items-center rounded-[5px] px-4 gap-3 py-8", className)}>
      {icons}
      <div className="flex flex-col">
        <p className="text-white font-semibold text-sm md:text-lg">{title}</p>
        <p className="text-white text-xs md:text-md">{value}</p>
      </div>
    </div>
  );
};

export default CardDashboard;
