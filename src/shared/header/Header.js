"use client";
import Image from "next/image";
import Logo from "../../assets/logo.webp";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { BiCategoryAlt } from "react-icons/bi";

import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <section>
      <div className="hidden lg:block h-[7vh] fixed z-50 w-full border-b-2 top-0 left-0 bg-white ">
        <div className="max-w-5xl mx-auto h-full">
          <div className="flex justify-between items-center h-full w-full ">
            <div className="w-full">
              <Link href={"/"}>
                <Image src={Logo} alt="Flash" width={100} height={50} />
              </Link>
            </div>

            <div className="relative w-full">
              <div className=" w-full flex bg-white justify-center items-center rounded-md border">
                <p className="text-xl pl-2 text-gray-400">
                  <IoSearchOutline />
                </p>
                <input
                  className="p-2 w-[400px] focus:outline-none"
                  type="text"
                  placeholder="Search..."
                />
              </div>
            </div>

            <div className="flex justify-end w-full">
              <button className="p-2 mx-1 flex justify-center items-center">
                <span className="text-xl p-1">
                  <BiCategoryAlt />
                </span>
                <span>Category</span>
              </button>

              <button className="p-2 mx-1 flex justify-center items-center">
                <span className="text-xl p-1">
                  <FiShoppingBag />
                </span>
                <span>Bag</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" lg:hidden w-full h-[10vh] top-0 left-0 bg-white z-50 px-4">
        <div className="flex h-full w-full justify-between items-center">
          <Image src={Logo} alt="Flash" width={80} height={50} />

          <div className="flex justify-end w-full">
            <button className="p-2 mx-1 flex justify-center items-center">
              <span className="text-xl p-1">
                <BiCategoryAlt />
              </span>
              <span>Category</span>
            </button>

            <button className="p-2 mx-1 flex justify-center items-center">
              <span className="text-xl p-1">
                <FiShoppingBag />
              </span>
              <span>Bag</span>
            </button>
          </div>
        </div>

        <div className="w-full">
          <div className=" w-full flex bg-white justify-center items-center rounded-md border">
            <p className="text-xl pl-2 text-gray-400">
              <IoSearchOutline />
            </p>
            <input
              className="p-2 w-[400px] focus:outline-none"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
