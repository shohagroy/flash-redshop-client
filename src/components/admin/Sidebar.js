"use client";

import Link from "next/link";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { AiOutlineShoppingCart, AiOutlineGift } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BiUser, BiCategoryAlt } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

import Image from "next/image";

import Logo from "../../assets/logo.webp";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathName = usePathname();

  const sideNavItem = [
    {
      name: "dashbord",
      pathname: "/admin",
      icon: <RxDashboard />,
      link: "../admin",
    },
    {
      name: "products",
      pathname: "/admin/products",
      pathname2: "/admin/[updateProductId]",
      pathname3: "/admin/addNewProduct",
      icon: <RiShoppingBag3Fill />,
      link: "../admin/products",
    },
    {
      name: "categories",
      pathname: "/admin/categories",
      icon: <BiCategoryAlt />,
      link: "../admin/categories",
    },
    {
      name: "users",
      pathname: "/admin/users",
      icon: <FiUsers />,
      link: "../admin/users",
    },
    {
      name: "orders",
      pathname: "/admin/orders",
      icon: <AiOutlineShoppingCart />,
      link: "../admin/orders",
    },
  ];

  return (
    <div className="hidden lg:block w-[250px] min-h-screen">
      {/* nav menu  */}
      <div className="  fixed  top-0 bg-white shadow-md left-0 w-[250px] h-screen">
        <div className=" flex p-5 items-center">
          <Link href={"/"}>
            <Image src={Logo} height={50} width={100} alt="logo" />
          </Link>
        </div>

        {/* menu item  */}
        <div className="text-md font-semibold ">
          {sideNavItem?.map((item) => {
            const { name, icon, link, pathname, pathname2, pathname3 } =
              item || {};

            const isActive =
              pathName === pathname || pathname2 || pathName === pathname3;
            return (
              <Link key={name} href={link}>
                <button
                  className={`w-full  relative flex items-center px-6 py-3 duration-300  ${
                    (pathName === pathname && "bg-blue-50 hover:bg-blue-100") ||
                    (pathName === pathname2 &&
                      "bg-blue-50 hover:bg-blue-100") ||
                    (pathName === pathname3 && "bg-blue-50 hover:bg-blue-100")
                  } `}
                >
                  {icon}
                  {/* <{icon} className="mr-4" /> */}
                  <span className="ml-4 capitalize">{name}</span>

                  {(pathName === pathname && (
                    <span className="absolute rounded-r-md left-0 h-full border-l-4 border-blue-500 "></span>
                  )) ||
                    (pathName === pathname2 && (
                      <span className="absolute rounded-r-md left-0 h-full border-l-4 border-blue-500 "></span>
                    )) ||
                    (pathName === pathname3 && (
                      <span className="absolute rounded-r-md left-0 h-full border-l-4 border-blue-500 "></span>
                    ))}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
