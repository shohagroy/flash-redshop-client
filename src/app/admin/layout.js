"use client";

import SideBar from "@/components/admin/Sidebar";

const Adminlauout = ({ children }) => {
  return (
    <main>
      <div className="flex">
        <div className="">
          <SideBar />
        </div>

        <div className="min-h-screen w-full bg-gray-100">{children}</div>
      </div>
    </main>
  );
};

export default Adminlauout;
