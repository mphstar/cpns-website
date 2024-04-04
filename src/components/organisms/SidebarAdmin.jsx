"use client";

import { itemSidebar } from "@/models/ItemSidebarModel";
import { useState } from "react";
import GroupSidebar from "../molecules/GroupSidebar";
import MenuSidebar from "../molecules/MenuSidebar";

const SidebarAdmin = ({ showSidebar, handleSidebar }) => {
  const [menuDropdown, setMenuDropdown] = useState(false);

  const handleMenu = (e) => {
    setMenuDropdown(!menuDropdown);
  };
  return (
    <>
      <div
        className={`flex flex-col bg-white w-[300px] fixed  ${
          showSidebar ? "translate-x-0" : "-translate-x-[300px]"
        } md:translate-x-0 duration-300 ease-in-out top-0 left-0 border-r-[2px] border-borderUtama overflow-y-auto h-full scrollbar-hide z-[100]`}
      >
        <div className="flex flex-col px-6 mt-8 ">
          <span className="text-utama font-bold text-xl -rotate-[2deg]">
            CPNS
          </span>
          <span className="text-sm text-[#7A7A7A]">mphstar@gmail.com</span>
        </div>
        <div className="flex flex-col mt-6 flex-1">
          {itemSidebar.map((item, index) => (
            <GroupSidebar name={item.group} key={index}>
              {item.items.map((it, i) => (
                <MenuSidebar key={i} isActive={it.title == "Dashboard"} icons={it.icons} name={it.title} />
              ))}
            </GroupSidebar>
          ))}
        </div>
      </div>
      <div
        onClick={handleSidebar}
        className={`w-screen fixed top-0 left-0 h-screen bg-black ${
          showSidebar
            ? "opacity-30 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }  z-[99] duration-300 ease-in-out`}
      ></div>
    </>
  );
};

export default SidebarAdmin;
