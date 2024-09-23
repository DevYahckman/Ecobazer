import Image from "next/image";
import React from "react";
import banner from "@/app/assets/images/banner.png";

const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-2 space-x-1 p-15 ">
        <div className="relative">
          <Image src={banner} alt="image" />
          <p className="bg-warning text-white absolute top-32 right-9 rounded-[100%] font-semibold text-center text-2xl uppercase px-8 py-6 ">
            70% <span className="font-normal text-base block"> Off</span>
          </p>
        </div>
        <div className="py-20 px-10">
            {/* poppin soggoiscript */}
            <p className="text-base ">Welcome to shopery</p>
            <p className="text-gray-950 font-extrabold text-6xl leading-[80px] my-5 ">Fresh & Healthy Organic Food</p>
            <p className="text-gray-500 text-lg ">Free shipping on all your order. we deliver, you enjoy</p>
            <button className="btn hover:bg-warning bg-warning mt-4 font-semibold text-white">Shop Now &rarr;  </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
