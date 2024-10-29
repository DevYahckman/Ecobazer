"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiDashboardFill, RiHistoryLine } from "react-icons/ri";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";

const userNav = [
  {
    label: "Dashboard",
    icon: <RiDashboardFill size={18} />,
    path: "/dashboard",
  },
  {
    label: "Order History",
    icon: <RiHistoryLine size={18} />,
    path: "/dashboard",
  },
  {
    label: "Shopping Cart",
    icon: <GiShoppingCart size={18} />,
    path: "/dashboard",
  },
  {
    label: "Setting",
    icon: <IoIosSettings size={18} />,
    path: "/dashboard",
  },
  {
    label: "Logout",
    icon: <TbLogout2 size={18} />,
    path: "/dashboard",
  },
];
const adminNav = [
  {
    label: "Dashboard",
    icon: <RiDashboardFill size={18} />,
    path: "/dashboard",
  },
  {
    label: "Users",
    icon: <RiHistoryLine size={18} />,
    path: "/dashboard",
  },
  {
    label: "Manage Orders",
    icon: <GiShoppingCart size={18} />,
    path: "/dashboard",
  },
  {
    label: "Setting",
    icon: <IoIosSettings size={18} />,
    path: "/dashboard",
  },
  {
    label: "Logout",
    icon: <TbLogout2 size={18} />,
    path: "/dashboard",
  },
];

const SideNav = () => {
  const [selectedPath, setSelectedPath] = useState<number | null>(0);
  const roleType = "user";

  const navItems = roleType === "user" ? userNav : adminNav;
  return (
    
    <div className="w-64 border rounded-lg shadow-sm py-5 space-y-4 max-h-screen">
      <p className="font-medium text-deepGray text-lg px-5">Navigation</p>

      {navItems.map((item, i: number) => (
        <div
          key={i}
          onClick={() => {
            setSelectedPath(i === selectedPath ? null : i);
          }}
          className={`text-gray-600  text-base 
            ${
              selectedPath === i
                ? "text-deepGray font-semibold bg-gray-50 border-l-2 border-success "
                : ""
            }
            `}
        >
          <Link
            href={item.path}
            className="flex space-x-2 items-center px-5 py-3"
          >
            {" "}
            {item.icon} <span>{item.label}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SideNav;
