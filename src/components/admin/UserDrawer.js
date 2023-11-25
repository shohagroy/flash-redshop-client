import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import Form from "../form/From";
import FormInput from "../form/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import FormSelect from "../form/FormSelect";
import { userSchema } from "@/schemas/user";
import { useCreateUserMutation } from "@/redux/features/user/userApi";

const UserDrawer = ({ open, setOpen }) => {
  const [createUser, { isLoading, isError, error }] = useCreateUserMutation();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });

  const roleOprions = [
    {
      lebel: "Admin",
      value: "admin",
    },
    {
      lebel: "Super Admin",
      value: "superAdmin",
    },
  ];

  const onsubmit = async (data) => {
    const result = await createUser(data).unwrap();

    if (result?.success) {
      setOpen(false);
      setUserInfo({
        name: "",
        email: "",
        password: "",
        role: "admin",
      });
    }
  };
  return (
    <div
      className={` h-screen w-[100vw] z-50 absolute top-0  flex justify-center items-center ${
        open ? "right-0" : "right-[100%] duration-200"
      }`}
    >
      <div
        onClick={() => setOpen(!open)}
        className="bg-black opacity-20 w-full h-screen"
      ></div>
      <div className="bg-white w-[550px] h-screen">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <p>Add and Update User Info</p>

            <button
              className="text-4xl text-red-600 "
              onClick={() => setOpen(!open)}
            >
              <IoIosCloseCircle />
            </button>
          </div>
        </div>

        <div className="p-4 my-10">
          {isError && (
            <p className="text-center px-4 py-1 bg-red-100 text-red-600 rounded-md my-2 text-xl capitalize ">
              {error?.data?.message || "Something went Wrong!"}
            </p>
          )}

          <Form
            defaultValues={userInfo}
            resolver={yupResolver(userSchema)}
            submitHandler={onsubmit}
          >
            <div>
              <div className="my-2">
                <FormInput
                  type={"text"}
                  label={"User Name"}
                  name={"name"}
                  required
                />
              </div>
              <div className="my-2">
                <FormInput
                  type={"email"}
                  label={"User Email"}
                  name={"email"}
                  required
                />
              </div>
              <div className="my-2">
                <FormInput
                  type={"password"}
                  label={"Password"}
                  name={"password"}
                  required
                />
              </div>
              <div className="my-2">
                <FormSelect
                  options={roleOprions}
                  label={"Access Level"}
                  name={"role"}
                  required
                />
              </div>
            </div>

            <div className="my-10 flex justify-center items-center">
              <input
                type="button"
                onClick={() => setOpen(!open)}
                className="w-[200px] text-center p-3 bg-red-500 text-white mx-1 rounded-md cursor-pointer"
                value={"Cancel"}
              />

              <button className="w-[200px] text-center p-3 bg-blue-500 text-white mx-1 rounded-md">
                {isLoading ? "Loading.." : "Add User"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UserDrawer;
