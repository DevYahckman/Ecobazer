import React from "react";
import BreadCrumb from "../components/breadCrumbs/BreadCrumb";
import SideNav from "../sidenav/SideNav";

interface Props {
  children: React.ReactNode;
}

const role = "user";
const Dashboard = ({ children }: Props) => {
  return (
    <div className="">
      <BreadCrumb />

      <div className="flex px-10 py-10 space-x-5">
        <SideNav />
        <div className="flex-1 max-h-screen overflow-y-scroll scrollbar-hide ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
