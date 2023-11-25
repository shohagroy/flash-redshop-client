"use client";

import { useState } from "react";
import Logo from "../../../assets/logo.webp";
import Image from "next/image";
import { useUserLoginMutation } from "@/redux/features/user/userApi";

const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState({});

  const [userLogin, { isLoading, isError, error }] = useUserLoginMutation();

  console.log(isError, error);

  const handleLogin = async (e) => {
    e.preventDefault();

    const result = await userLogin(loginInfo);

    console.log(result);
  };

  return (
    <>
      <main>
        <div className="h-screen w-full flex border-b-2 bg-gray-100">
          <div className="flex justify-center items-center w-full">
            <div className=" w-full lg:w-1/2 lg:p-6 p-2">
              <div className="">
                <div className="flex  text-gray-900">
                  <div className="w-11/12 p-8 m-auto bg-white rounded-lg sm:w-96 bg-opacity-80 bg-clip-padding shadow-lg">
                    <div className="space-y-2">
                      <div className="flex flex-col justify-center items-center">
                        <Image
                          src={Logo}
                          alt="Flash."
                          width={120}
                          height={100}
                        />
                        <h2 className="p-2 text-xl font-semibold">
                          Admin Login
                        </h2>
                      </div>

                      <div>
                        <h1 className="text-xl font-medium text-center md:text-2xl font-roboto">
                          Welcome Back!
                        </h1>
                      </div>
                    </div>
                    <div className="mt-10">
                      <div>
                        {isError && (
                          <p className="my-2 p-2 bg-red-100 text-red-600 text-center rounded-md">
                            {error?.data?.message || "Something went Wrong!"}
                          </p>
                        )}
                      </div>
                      <form
                        onSubmit={handleLogin}
                        className="text-base font-nunito"
                      >
                        <div className="space-y-4">
                          <div className="relative flex items-center">
                            <svg
                              className="absolute w-5 h-5 ml-3 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            <input
                              className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 border"
                              onChange={(e) =>
                                setLoginInfo({
                                  ...loginInfo,
                                  email: e.target.value,
                                })
                              }
                              type="email"
                              name="email"
                              placeholder="Email"
                              required
                            />
                          </div>
                          <div className="relative flex items-center">
                            <svg
                              className="absolute w-5 h-5 ml-3 text-gray-400 "
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                              />
                            </svg>
                            <input
                              onChange={(e) =>
                                setLoginInfo({
                                  ...loginInfo,
                                  password: e.target.value,
                                })
                              }
                              className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md  border focus:outline-none focus:ring-2 focus:ring-blue-300"
                              type="password"
                              name="password"
                              placeholder="Password"
                              required
                            />
                          </div>
                          <div className="flex items-start space-x-2 md:items-center">
                            <input
                              className="focus:outline-none"
                              type="checkbox"
                              name="terms"
                              id="serviceTerms"
                            />
                            <label
                              className="-mt-1 text-sm sm:mt-0"
                              htmlFor="serviceTerms"
                            >
                              <span>Remember Me</span>
                            </label>
                          </div>
                          <div>
                            <button className="w-full p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg">
                              {isLoading ? "Loading..." : "log in"}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
