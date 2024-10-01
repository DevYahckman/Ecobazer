"use client";
import React, { useState } from "react";
import useCheckIsMobile from "@/app/hooks/useCheckIsMobile";
import { SlLocationPin } from "react-icons/sl";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FiPhoneCall } from "react-icons/fi";
// import { GrSearch } from "react-icons/gr";
import { FaHome,FaBloggerB, FaInfoCircle   } from "react-icons/fa";
import { FaShop, FaMapLocationDot  } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/svg/logo.svg";
import userImage from "@/app/assets/images/customer-2.png";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

interface navProps {
  name: string;
  path: string;
  icon: any
  // icon: JSX.Element
}

const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useCheckIsMobile();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navItem: navProps[] = [
    {
      name: "Home",
      path: "#",
      icon:<FaHome  size={19}/>
      
    },
    {
      name: "Shop",
      path: "/shop",
      icon:<FaShop size={19}/>
    },

    {
      name: "Blog",
      path: "#",
      icon:<FaBloggerB size={19}/>
    },
    {
      name: "About Us",
      path: "#",
      icon:<FaInfoCircle size={19}/>
    },
    {
      name: "Contact Us",
      path: "#",
      icon:<FaMapLocationDot size={19}/>
    },
  ];
  return (
    <div className="">
      {isMobile ? (
        <div>
          <div className="flex justify-between items-center px-2 py-4 bg-deepGray">
            <div className="flex space-x-3 items-center">
              <Image src={logo} alt="logo" />
              <p className="font-bold text-3xl text-white">Ecobazar</p>
            </div>

            <div className="flex text-deepGray items-center space-x-6">
              <button onClick={toggleDrawer}>
              <HiOutlineMenuAlt3 size={30} className=" text-white"/>
              </button>

              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="left"
                className="p-5"
                size={300}
              >
                <div className="flex items-start space-x-2" >
                  <Image src={userImage} alt="" className="rounded-full w-12" />
                  <div>
                    <p className="font-bold text-deepGray ">Cornor McGregor</p>
                    <p className="text-lightGray font-medium">
                      mcgregor@gmail.com
                    </p>
                  </div>
                </div>
                <hr className="my-4" />

                {navItem.map((item, i: number) => (
                  <div className="flex items-center space-x-5 my-5" onClick={()=>{setIsOpen(false)}}>
                    <span className="">

                    {item.icon}
                    </span>
                    <p className="font-medium text-lg text-lightGray">{item.name}</p>
                  </div>
                ))}
              </Drawer>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Top */}
          <div className=" hidden lg:flex justify-between  items-center  bg-deepGray px-7 py-2 text-gray-300 text-xs">
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
          <div className="flex justify-between items-center px-7 py-4">
            <div className="flex space-x-3 items-center">
              <Image src={logo} alt="logo" />
              <p className="font-bold text-3xl">Ecobazar</p>
            </div>

            <div className="">
              {/* <div className="input input-bordered rounded flex items-center ">
                <label className="flex items-center ">
                  <input type="text" className="grow" placeholder="Search" />
                 <GrSearch />
                 </label>
                 Search
                 <button className="bg-success p-4">Search</button>
                 </div> */}
            </div>

            <div className="flex text-deepGray items-center space-x-6">
              <div>
                <FiHeart size={30} />
              </div>
              <span>|</span>
              <div className="flex items-center space-x-4">
                <HiOutlineShoppingBag size={30} />
                <div>
                  <div className="text-sx text-lightGray">
                    Shopping Cart:
                    <p className="absolute top-[55px] right-36 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                      5
                    </p>
                  </div>
                  <p className=" text-sm text-deepGray font-bold ">$57.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Last */}

          <div className="flex justify-between items-center bg-gray-50 p-3 px-7">
            <div className="flex space-x-14 ">
              {navItem.map((item, i: number) => (
                <Link
                  href={item.path}
                  className="text-gray-500 text-sm font-bold"
                  key={i}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-deepGray font-bold">
              <FiPhoneCall size={20} />
              <div>+34 9474 3434</div>
            </div>
          </div>
        </div>



      )}
    </div>
  );
};

export default AppHeader;
