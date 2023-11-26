"use client";

import SideBar from "@/components/admin/Sidebar";
import Loading from "@/components/ui/Loading";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage } from "@/utils/local-storage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Adminlauout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const token = getFromLocalStorage("token");

  const tokenInfo = token ? decodedToken(token) : {};

  const { role, name } = tokenInfo || {};

  useEffect(() => {
    setIsLoading(true);
    if ((!token && role !== "admin") || (!token && role !== "superAdmin")) {
      router.push("/admin/login");
    } else {
      setIsLoading(false);
    }
  }, [router, token, isLoading, role]);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  const logOutHandelar = () => {
    localStorage.removeItem("token");
    router.push("/admin/login");
  };

  return (
    <main>
      <div className="flex">
        <div className="">
          <SideBar />
        </div>
        <div className="w-full">
          <div className="h-[7vh] flex justify-end items-center">
            <div className="mx-10 flex justify-center items-center ">
              <div className="text-right">
                <p>{name}</p>
                <small>{role === "superAdmin" ? "Super Admin" : "Admin"}</small>
              </div>

              <button
                onClick={logOutHandelar}
                className="mx-4 bg-red-600 px-4 py-1 text-white rounded-md"
              >
                Log out
              </button>
            </div>
          </div>
          <div className="min-h-[90vh] w-full bg-gray-100">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default Adminlauout;
