"use client";
import { Menu } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";

const HeaderAdmin = ({ handleSidebar, breadcrumb }) => {
  return (
    <div className="px-6 py-6 flex flex-row gap-3 items-center sticky top-0 backdrop-blur-lg">
      <div onClick={handleSidebar} className="p-2 flex md:hidden">
        <Menu />
      </div>
      <div className="flex flex-col flex-1">
        <h1 className="text-utama font-bold">Dashboard</h1>
        {breadcrumb}
      </div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>
          <Skeleton className="w-full h-full flex bg-gray-200 rounded-full" />
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default HeaderAdmin;
