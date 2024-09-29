'use client'
import React from "react";
import sales from "@/app/assets/images/bg-1.png";
import meat from "@/app/assets/images/bg-2.png";
import fruit from "@/app/assets/images/bg-3.png";
import Countdown from "react-countdown";

const TopCategory = () => {
  return (
    <div className="mx-10 min-h-screen">
      <p className="header">Top Category</p>

      <div className=" grid grid-cols-1 lg:grid-cols-3 lg:space-x-5 space-y-5 lg:space-y-0 my-5 text-center">
        <div
          className="bg-center bg-cover rounded-md min-h-[429px] py-10 space-y-4"
          style={{ backgroundImage: `url(${sales.src})` }}
        >
          <p className="text-white uppercase  text-sm">Best Deal</p>
          <p className="text-white text-4xl font-bold">Sales of the Month</p>
          <div className="flex justify-center space-x-5 text-white text-base uppercase font-medium">
           < Countdown date={Date.now()+1000000000}
           renderer={({days,hours,minutes,seconds})=>(

               <>
            <div><p>{days}</p> <p>Day</p></div>
            <div><p>{hours}</p> <p>Hour</p></div>
            <div><p>{minutes}</p> <p>Min</p></div>
            <div><p>{seconds}</p> <p>Sec</p></div>
           </>
           )}/>
         
          </div>

          <button className="btn bg-white hover:bg-white rounded-full text-success font-semibold">
            {" "}
            Shop Now &rarr;{" "}
          </button>
        </div>

        <div
          className="bg-center bg-cover rounded-md min-h-[429px] py-10 space-y-4"
          style={{ backgroundImage: `url(${meat.src})` }}
        >
          <p className="text-white uppercase  text-sm">85% Fat free</p>
          <p className="text-white text-4xl font-bold">Low-Fat Meat</p>
          <p className="text-white text-base">
            Started at <span className="font-bold text-warning"> $79.99</span>
          </p>

          <button className="btn bg-white hover:bg-white rounded-full text-success font-semibold">
            {" "}
            Shop Now &rarr;{" "}
          </button>
        </div>

        <div
          className="bg-center bg-cover rounded-md min-h-[429px] py-10 space-y-4"
          style={{ backgroundImage: `url(${fruit.src})` }}
        >
          <p className="text-deepGray uppercase  text-sm">summer sale</p>
          <p className="text-deepGray text-4xl font-bold">100% fresh Friut</p>
          <p className="text-deepGray text-base">
            Up to{" "}
            <span className="font-bold  text-[#FCC900] bg-deepGray px-3 py-2 rounded-md">
              {" "}
              64% OFF
            </span>
          </p>

          <button className="btn bg-white hover:bg-white rounded-full text-success font-semibold">
            {" "}
            Shop Now &rarr;{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
