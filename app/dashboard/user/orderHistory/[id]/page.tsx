
import React from "react";
import Link from "next/link";
import { ConfigProvider } from "antd";
import { BsDot } from "react-icons/bs";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Steps } from "antd";

const OrderHistory = () => {
  return (
    <div className="shadow-sm rounded-lg border p-5">
      <div className="flex justify-between items-center ">
        <div className="flex items-center  md:space-x-2 text-sm text-gray-700">
          <p className="text-deepGray font-medium text-base md:text-xl">
            Order Details{" "}
          </p>{" "}
          <BsDot />
          <p>April 24, 2024</p>
          <BsDot />
          <p>3 products</p>
        </div>

        <Link
          href={"#"}
          className="cursor-pointer text-success font-medium text-sm md:text-base"
        >
          <span className="hidden md:block">Back to List</span>
          <FaArrowAltCircleLeft className="md:hidden" size={20} />
        </Link>
      </div>

      <div className="md:grid grid-cols-3 gap-5 my-4">
        <div className="col-span-2 shadow-sm rounded-lg border ">
          <div className="md:grid grid-cols-2 gap-5">
            <div className="border-r ">
              <p className="border-b p-3 text-gray-400 text-sm uppercase font-medium">
                Billing Adress
              </p>

              <div className="p-3 space-y-5">
                <p className="text-deepGray text-base ">John Jones</p>
                <p className="text-sm text-gray-600">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </p>

                <div>
                  <p className="uppercase text-gray-400 text-xs font-medium">
                    Email
                  </p>
                  <p className="text-deepGray text-sm">email@mail.com</p>
                </div>
                <div>
                  <p className="uppercase text-gray-400 text-xs font-medium">
                    Phone
                  </p>
                  <p className="text-deepGray text-sm">092563738282</p>
                </div>
              </div>
            </div>
            <div className="">
              <p className="border-b p-3 text-gray-400 text-sm uppercase font-medium">
                Shipping Adress
              </p>

              <div className="p-3 space-y-5">
                <p className="text-deepGray text-base ">John Jones</p>
                <p className="text-sm text-gray-600">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </p>

                <div>
                  <p className="uppercase text-gray-400 text-xs font-medium">
                    Email
                  </p>
                  <p className="text-deepGray text-sm">email@mail.com</p>
                </div>
                <div>
                  <p className="uppercase text-gray-400 text-xs font-medium">
                    Phone
                  </p>
                  <p className="text-deepGray text-sm">092563738282</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>lets go</div>
      </div>

      <div className="my-10">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#00b207", // Change the color globally
            },
          }}
        >
          <Steps
            size="small"
            current={2}
            items={[
              {
                title: "Order Recieved",
              },
              {
                title: "Processing",
              },
              {
                title: "On the way",
              },
              {
                title: "Delivered",
              },
            ]}
          />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default OrderHistory;
