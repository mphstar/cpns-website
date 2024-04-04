const MenuSidebar = ({ icons, name, isActive = false }) => {
  return (
    <div className="flex flex-row gap-2 py-2 cursor-pointer pl-6 hover:bg-gray-100">
      <div className={`${isActive ? 'stroke-utama' : 'stroke-[#4A4A4A]'}`}>{icons}</div>
      <p className={`flex-1 ${isActive ? "text-utama" : "text-[#4A4A4A]"}`}>
        {name}
      </p>
      <div
        className={`w-[4px] h-full bg-utama ${isActive ? "flex" : "hidden"}`}
      ></div>
    </div>
  );
};

export default MenuSidebar;
