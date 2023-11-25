"use client";

import SideBar from "@/components/admin/Sidebar";

const Adminlauout = ({ children }) => {
  return (
    <main>
      <div className="flex">
        <div className="">
          <SideBar />
        </div>
        <div className="w-full">
          <div className="h-[7vh]">Header</div>
          <div className="min-h-[90vh] w-full bg-gray-100">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default Adminlauout;
