import React from "react";
import BreadCrumb from "../components/breadCrumbs/BreadCrumb";
import SideNav from "../sidenav/SideNav";

interface Props {
  children: React.ReactNode;
}

const Dashboard = ({ children }: Props) => {
  return (
    <div className="">
      <BreadCrumb />

      <div className="md:flex p-3 md:p-10  md:space-x-5">
        <SideNav />
        <div className="md:flex-1 max-h-screen overflow-y-scroll scrollbar-hide ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
