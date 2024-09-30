"use client";
import React from "react";
import sales from "@/app/assets/images/bg-1.png";
import meat from "@/app/assets/images/bg-2.png";
import fruit from "@/app/assets/images/bg-3.png";
import quote from "@/app/assets/images/doubleQuote.png";
import Countdown from "react-countdown";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  customerReview,
  productData,
  topCategory,
} from "@/app/mocks/dummyData";
import ProductCard from "../ProductCard/ProductCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import Image from "next/image";
import { ICustomerReview, IProducts, ITopCategory } from "@/app/interfaces/products";
import StarRatings from "../rating/StarRatings";

const TopCategory = () => {
  const splideRef = React.useRef<number | null>(null);

  const settings = {
    type: "loop",
    perPage: 6,
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    perMove: 1,
    gap: "1rem",

    breakpoints: {
      1024: {
        perPage: 2, // Show 2 slides at a time for screens smaller than 1024px
        gap: "0.5rem", // Adjust gap for medium screens
      },
      768: {
        perPage: 1, // Show 1 slide at a time for screens smaller than 768px
        gap: "0.5rem", // Adjust gap for smaller screens
      },
      480: {
        perPage: 1, // Show 1 slide for mobile devices
        gap: "0.3rem", // Smaller gap for mobile devices
      },
    },

    autoScroll: {
      speed: 1,
    },
  };
  const customerSettings = {
    type: "loop",
    perPage: 3,
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    gap: "1rem",
    arrows: false,

    breakpoints: {
      1024: {
        perPage: 2, // Show 2 slides at a time for screens smaller than 1024px
        gap: "0.5rem", // Adjust gap for medium screens
      },
      768: {
        perPage: 1, // Show 1 slide at a time for screens smaller than 768px
        gap: "0.5rem", // Adjust gap for smaller screens
      },
      480: {
        perPage: 1, // Show 1 slide for mobile devices
        gap: "0.3rem", // Smaller gap for mobile devices
      },
    },

    autoScroll: {
      speed: 1,
    },
  };

  return (
    <div className="  min-h-screen">
      <p className="header">Top Category</p>

      <div className=" my-14   gap-x-7">
        <Splide options={settings}>
          {topCategory.map((item: ITopCategory, i: number) => (
            <SplideSlide
              key={i}
              className="bg-[#f7fafc] rounded-lg shadow hover:shadow-md cursor-pointer  border border-gray-300 space-y-2 p-3 flex flex-col items-center justify-between group"
            >
              <Image src={item.img} alt={item.category} />

              <p className="text-deepGray font-semibold group-hover:text-success">
                {item.category}
              </p>
              <p className="text-lightGray font-medium">
                {item.units} products{" "}
              </p>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div className=" mx-5 md:mx-10 grid grid-cols-1 lg:grid-cols-3 lg:space-x-5 space-y-5 lg:space-y-0 my-5 text-center">
        <div
          className="bg-center bg-cover rounded-md min-h-[429px] py-10 space-y-4"
          style={{ backgroundImage: `url(${sales.src})` }}
        >
          <p className="text-white uppercase  text-sm">Best Deal</p>
          <p className="text-white text-4xl font-bold">Sales of the Month</p>
          <div className="flex justify-center space-x-5 text-white text-base uppercase font-medium">
            <Countdown
              date={Date.now() + 1000000000}
              renderer={({ days, hours, minutes, seconds }) => (
                <>
                  <div>
                    <p>{days}</p> <p>Day</p>
                  </div>
                  <div>
                    <p>{hours}</p> <p>Hour</p>
                  </div>
                  <div>
                    <p>{minutes}</p> <p>Min</p>
                  </div>
                  <div>
                    <p>{seconds}</p> <p>Sec</p>
                  </div>
                </>
              )}
            />
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

      <div className=" mx-5 md:mx-10 my-10 bg-white">
        <div className="flex justify-between items-center my-5">
          <p className="header text-left"> Newest Products</p>
          <p className="text-success cursor-pointer">View All &rarr;</p>
        </div>

        <div className="  my-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:px-10 md:space-x-2">
          {productData.map((item: IProducts) => (
            <ProductCard
              img={item.img}
              productName={item.productName}
              price={item.price}
              key={item.productName}
            />
          ))}
        </div>
      </div>

      <div className="  bg-[#edf2ee] h-[630px]">
        <div className="flex justify-between items-center my-5 p-5 md:py-10 md:px-10">
          <p className="header text-left"> Client Testimonial</p>
          <div className="flex items mb-4 md:space-x-3">
            <button
              className="bg-white text-black p-2 rounded-full hover:bg-success hover:text-white transition duration-300"
              onClick={() => splideRef.current?.splide.go("<")} // Go to previous slide
            >
              <FaArrowLeft />
            </button>
            <button
              className="bg-white text-black p-2 rounded-full hover:bg-success hover:text-white transition duration-300"
              onClick={() => splideRef.current?.splide.go(">")} // Go to next slide
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className=" ">
          

          <Splide ref={splideRef} options={customerSettings}>
            {customerReview.map((item: ICustomerReview, i: number) => (
              <SplideSlide key={i} className="bg-[#f7fafc] w-full rounded-lg space-y-4 shadow hover:shadow-md cursor-pointer  border border-gray-300  p-5 ">
                <Image src={quote} alt="quaote" />

                <p className="text-lightGray font-medium text-base">
                  {item.review}
                </p>

                <div className="flex justify-between">
                  <div className="flex space-x-5 items-center">
                    <Image src={item.img} alt="quaote" />
                    <div>
                      <p className="text-deepGray font-semibold">{item.name}</p>
                      <p className="text-lightGray font-medium">Customer</p>
                    </div>
                  </div>

                  <div>
                    < StarRatings rating={item.rating} size={24}/>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
