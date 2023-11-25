"use client";

import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import UserDrawer from "@/components/admin/UserDrawer";
import UserTable from "@/components/admin/UserTable";
import { useGetAllUserQuery } from "@/redux/features/user/userApi";

const UserPage = () => {
  const [userDrawer, setUserDrawer] = useState(false);
  const [searchUsers, setSearchUsers] = useState("");
  const [showPage, setShowPage] = useState(1);

  const query = {
    search: searchUsers,
    skip: showPage === 1 ? 0 : (showPage - 1) * 10,
  };

  const { data, isLoading } = useGetAllUserQuery();

  console.log(data?.data);
  return (
    <>
      <main>
        <section className="relative max-w-7xl mx-auto bg-gray-100 min-h-[90vh]">
          <div className="">
            <h3 className="lg:py-4 text-xl font-semibold py-4 ">Users</h3>

            {/* products search section  */}
            <div className="my-3 grid grid-cols-1 lg:grid-cols-5  py-6 px-4 gap-6 rounded-md shadow-sm bg-white w-full">
              <div className="col-span-4 w-full flex bg-gray-100 justify-center items-center rounded-md border">
                <p className="text-xl pl-2 text-gray-500">
                  <IoSearchOutline />
                </p>
                <input
                  className="p-2 w-full bg-gray-100 focus:outline-none"
                  type="text"
                  placeholder="Search..."
                />
              </div>

              <div className="w-full">
                <button
                  onClick={() => setUserDrawer(true)}
                  className="w-full h-full p-3 lg:p-0 bg-blue-600/40 rounded-md text-white hover:bg-blue-600 duration-300"
                >
                  + Add New User
                </button>
              </div>
            </div>

            <UserTable data={data?.data} />
          </div>
        </section>

        <UserDrawer open={userDrawer} setOpen={setUserDrawer} />
      </main>
    </>
  );
};

export default UserPage;
