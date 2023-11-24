"use client";
import Image from "next/image";
import Logo from "../../assets/logo.webp";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { BiCategoryAlt } from "react-icons/bi";

import React from "react";

const Header = () => {
  return (
    <section className="h-[7vh] sticky top-0 left-0 bg-white border-b-2 border-gray-300">
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex justify-between items-center h-full w-full ">
          <div className="w-full">
            <Image src={Logo} alt="Flash" width={100} height={50} />
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

            {/* seggest category section */}
            {/* <div className="absolute left-0 top-100 w-full h-[300px]">
              <div className="mt-2 bg-white h-full p-2 border shadow-md">
                hello akjsdhflkasjfdlaskjdf;lml
              </div>
            </div> */}
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
    </section>
  );
};

export default Header;
