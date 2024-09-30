"use client";
import React from "react";
import useCheckIsMobile from "@/app/hooks/useCheckIsMobile";
import { SlLocationPin } from "react-icons/sl";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/svg/logo.svg";

interface navProps {
  name: string;
  path: string;
}

const AppHeader = () => {
  const isMobile = useCheckIsMobile();
  const navItem: navProps[] = [
    {
      name: "Home",
      path: "#",
    },
    {
      name: "Shop",
      path: "#",
    },
    {
      name: "Pages",
      path: "#",
    },
    {
      name: "Blog",
      path: "#",
    },
    {
      name: "About Us",
      path: "#",
    },
    {
      name: "Contact Us",
      path: "#",
    },
  ];
  return (
    <div className="">
      {isMobile ? (
        <p>mobile</p>
      ) : (
        <div>
          {/* Top */}
          <div className="flex justify-between  items-center  bg-deepGray px-7 py-2 text-gray-300 text-xs">
            <div className="flex items-center space-x-2 ">
              <SlLocationPin size={18} />
              <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link href={"#"}>ENG </Link>
              <span>|</span>
              <Link href={"#"}>NGN </Link>
              <span>|</span>
              <Link href={"#"}>SignUp </Link>
              <span>|</span>
              <Link href={"#"}>Signin </Link>
            </div>
          </div>
          {/* Mid */}
          <div className="flex justify-between items-center px-7 py-6">
            <div className="flex space-x-3 items-center">
              <Image src={logo} alt="logo" />
              <p className="font-bold text-3xl">Ecobazar</p>
            </div>

            <div className="">3</div>

            <div className="flex text-deepGray items-center space-x-6">
              <div>
                <FiHeart size={30} />
              </div>
              <span>|</span>
              <div className="flex items-center space-x-4">
                <HiOutlineShoppingBag size={30} />
                <div>
                  <p className="text-sx text-lightGray">
                    Shopping Cart:
                    <div className="absolute top-[55px] right-36 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                      5
                    </div>
                  </p>
                  <p className=" text-sm text-deepGray font-bold ">$57.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Last */}

          <div className="flex justify-between items-center bg-gray-50 p-3 px-7">
            <div className="flex space-x-14 ">
              {navItem.map((item, i: number) => (
                <Link href={"#"} className="text-gray-500 text-sm font-bold">
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-deepGray font-bold">
              <FiPhoneCall size={20} />
              <p className="">+34 9474 3434</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppHeader;
