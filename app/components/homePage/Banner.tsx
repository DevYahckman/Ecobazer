import Image,{StaticImageData} from "next/image";
import React from "react";
import banner from "@/app/assets/images/banner.png";
import packageImg from "@/app/assets/svg/package.svg";
import group from "@/app/assets/svg/Group.svg";
import vector from "@/app/assets/svg/Vector.svg";
import shoppingBag from "@/app/assets/svg/shopping-bag.svg";

interface shoppingProps {
  img: StaticImageData | string;
  name: string;
  subText: string;
}

const Banner = () => {
  const shoppingData: shoppingProps[] = [
    {
      img: vector,
      name: "Free Shipping",
      subText: "Free shipping on all your order",
    },
    {
      img: group,
      name: "Customer Support 24/7",
      subText: "Instant access to Support",
    },
    {
      img: shoppingBag,
      name: "100% Secure Payment",
      subText: "We ensure your money is save",
    },
    {
      img: packageImg,
      name: "Money-Back Guarantee",
      subText: "30 Days Money-Back Guarantee",
    },
  ];

  return (
    <div>
      <div>
        <div className="grid md:grid-cols-2 space-x-1 p-15  ">
          <div className="relative ">
            <Image src={banner} alt="image" />
            <p className="bg-warning text-white absolute top-10 right-3 md:top-32 md:right-9 rounded-[100%] font-semibold text-center text-2xl uppercase p-3 px-4 md:px-8 md:py-6 ">
              70% <span className="font-normal text-base block"> Off</span>
            </p>
          </div>
          <div className="py-20 px-5 md:px-10">
            {/* poppin soggoiscript */}
            <p className="text-base ">Welcome to shopery</p>
            <p className="text-gray-950 font-extrabold text-3xl md:text-6xl md:leading-[80px] my-5 ">
              Fresh & Healthy Organic Food
            </p>
            <p className="text-gray-500 text-lg  ">
              Free shipping on all your order. we deliver, you enjoy
            </p>
            <button className="btn hover:bg-success bg-success mt-4 font-semibold text-white md:w-[30%] rounded-full">
              Shop Now &rarr;{" "}
            </button>
          </div>
        </div>
      </div>

      {/* Test here  */}

      <div className="h-[30vh]">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  md:mx-24 min-h-32 py-5 px-5  md:shadow-lg bg-white rounded-lg 
        "
        >
          {/* shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] */}
          {shoppingData.map((item: shoppingProps) => (
            <div className=" flex space-x-5 items-center my-5" key={item.name}>
              <div>
                <Image src={item.img} alt="free shipping" />
              </div>
              <div>
                <p className="font-bold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-400">{item.subText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
