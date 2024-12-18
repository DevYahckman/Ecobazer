import Image from "next/image";
import React from "react";
import user from "@/app/assets/images/team2.png";
import Link from "next/link";
import { Table } from "antd";
import useOrderHistory from "../user/useOrderHistory";
import { columns } from "../user/columns";

const UserDashboard = () => {
  const { orderHistory } = useOrderHistory();

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="shadow-sm py-4 rounded-lg border flex flex-col space-y-2 justify-center items-center">
          <Image
            src={user}
            alt=""
            className="w-[100px] h-[100px] rounded-full"
          />
          <p className="text-deepGray font-semibold text-lg">
            Cornor McGreggor
          </p>
          <p className="text-gray-500 text-sm">Customer</p>
          <Link href={"#"} className="text-success font-medium text-sm">
            Edit Profile
          </Link>
        </div>
        <div className="shadow-sm rounded-lg border p-5 space-y-3">
          <p className="text-gray-500 uppercase "> Billing Address</p>
          <p className="text-deepGray font-semibold text-base">
            Cornor McGreggor
          </p>
          <p className="text-gray-500 ">
            {" "}
            4140 Parker Rd. Allentown, New Mexico 31134
          </p>

          <p className="text-deepGray">dainne.ressell@gmail.com</p>
          <p className="text-deepGray">09082435368</p>
          <Link href={"#"} className="text-success font-medium text-sm">
            Email Address
          </Link>
        </div>
      </div>
      <div>
        <div className="shadow-sm p-4 rounded-lg border flex items-center justify-between ">
          <p className="font-semibold text-deepGray">Recent Order History</p>
          <Link href={"#"} className="text-success font-medium text-sm">
            View All
          </Link>
        </div>

        <div>
          <Table
            dataSource={orderHistory}
            columns={columns}
            pagination={false}
          />
          ;
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
