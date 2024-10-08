'use client'
import React from "react";
import sideImageOne from "@/app/assets/images/sideImage_1.png";
import sideImageTwo from "@/app/assets/images/sideImage_2.png";
import sideImageThree from "@/app/assets/images/sideImage_3.png";
import sideImageFour from "@/app/assets/images/sideImage_4.png";
import { FcLikePlaceholder } from "react-icons/fc";
import { LuDot } from "react-icons/lu";
import StarRatings from "@/app/components/rating/StarRatings";
import CustomInputNumber from "@/app/components/customsInputNumber/CustomInputNumber";
import Image, { StaticImageData } from "next/image";
import cabbage from "@/app/assets/images/productTwo.png";
import { Divider, Tabs, TabsProps } from "antd";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import { IProducts } from "@/app/interfaces/products";
import { productData } from "@/app/mocks/dummyData";
import Descriptions from "./Descriptions";
import Feedback from "./Feedback";
import AdditionalInfo from "./AdditionalInfo";


const SingleProduct = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <span className="text-base text-deepGray font-medium ">Descriptions </span>,
      children: <Descriptions/>
    },
    {
      key: "2",
      label: <span className="text-base text-deepGray font-medium ">Additional Information </span>,
      children:< AdditionalInfo/>
    },
    {
      key: "3",
      label: <span className="text-base text-deepGray font-medium ">Customer Feedback </span>,
      children: <Feedback/>
    },
    
  ];
  return (
    <div className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-40">
        <div className="flex justify-center items-center">
          <div className="space-y-8">
            {[sideImageOne, sideImageTwo, sideImageThree, sideImageFour].map(
              (item: StaticImageData, i: number) => (
                <Image src={item} alt="side product" key={i} />
              )
            )}
          </div>
          <div>
            <Image src={cabbage} alt="side product" />
          </div>
        </div>

        <div className="w-[100%]">
          <p className="text-deepGray font-semibold text-3xl items-center">
            Chinese Cabbage{" "}
            <span className="text-success bg-gray-200 text-sm p-1 rounded-sm px-2 font-normal">
              In Stock
            </span>
          </p>

          <div className="flex items-center space-x-4 my-2 ">
            <div className="flex items-center space-x-2 ">
              <StarRatings rating={5} />
              <span className="text-base">4 Review</span>
            </div>
            <div className="text-success">
              <LuDot size={20} />
            </div>
            <div className="font-medium text-sm text-deepGray ">
              SKU: <span className="font-normal text-gray-600">$ {'price'}</span>
            </div>
          </div>
          <Divider />

          <p className="text-gray-500 text-sm">{"description"}</p>
          <Divider />
          <div className="flex items-center space-x-3 w-[100%] justify-between px-3">
            <div>
              <CustomInputNumber />
            </div>
            <div className="flex-grow">
              <button className="btn hover:bg-success rounded-md flex-2 bg-success text-white font-semibold p-4 py-2 w-[100%]">
                Add to Cart
              </button>
            </div>
            <div className="bg-gray-200  rounded-full p-4">
              <FcLikePlaceholder size={20} color="black" />
            </div>
          </div>
          <Divider />
          <p className="text-sm font-semibold text-deepGray py-3">
            Category:{" "}
            <span className="text-lightGray font-normal">{"category"}</span>
          </p>
          <p className="text-sm font-semibold text-deepGray">
            Tag:{" "}
            <span className="text-lightGray font-normal">
              Vegetables Heathy Chinese Cabage Green cabage{" "}
            </span>
          </p>
        </div>
      </div>
      <div className="min-h-screen">
      <Tabs
            defaultActiveKey="1"
            items={items}
            // onChange={handleTabChange}
            className="my-5"
            centered
          />

      </div>


      <div>
        <p className="header"> Related Products</p>

        <div className="  my-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:px-10 md:space-x-2">
          {productData.slice(0,4).map((item: IProducts) => (
            <ProductCard
              img={item.img}
              productName={item.productName}
              price={item.price}
              key={item.productName}
              units={item.units}
              description={item.description}
              category={item.category}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default SingleProduct;
