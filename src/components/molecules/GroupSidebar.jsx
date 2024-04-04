const GroupSidebar = ({ children, name = "" }) => {
  return (
    <>
      <div className="px-6 py-2 font-semibold text-[#4A4A4A]">
        <span>{name}</span>
      </div>
      {children}
    </>
  );
};

export default GroupSidebar;
