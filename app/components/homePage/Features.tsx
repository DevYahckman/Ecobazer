import React, { Suspense } from "react";
import ProductCard from "../ProductCard/ProductCard";
import apple from "@/app/assets/images/productOne.png";
import { productData } from "@/app/mocks/dummyData";
import { IProducts } from "@/app/interfaces/products";
import { TiEyeOutline } from "react-icons/ti";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import deal from "@/app/assets/images/deal.png";

import Image, { StaticImageData } from "next/image";

const Features = () => {
  const HotDealCard = ({
    img,
    productName,
    price,
  }: {
    img: StaticImageData;
    productName: string;
    price: number;
  }) => {
    return (
      <div className="flex items-center bg-[#f7fafc] space-x-3 my-4 rounded-lg shadow border px-5 py-2 group">
        <div>
          <Image src={img} alt="productImaage" width={102} />
        </div>
        <div className=" w-[100%] ">
          <div className="group-hover:hidden ">
            <p className="text-gray-700 font-medium text-base">{productName}</p>
            <p className="font-semibold text-deepGray mt-2">${price}</p>
          </div>

          <div className="hidden group-hover:flex space-x-8 ">
            <HiOutlineShoppingBag color="gray" size={30} />
            <TiEyeOutline size={30} />
            <FcLikePlaceholder color="gray" size={30} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen mt-44 md:mt-0">
      <h1 className="header">Featured Products</h1>
      <div className="  my-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-10 space-x-2">
       
        {productData.map((item: any) => (
          <ProductCard
            img={item.img}
            productName={item.productName}
            price={item.price}
            key={item.productName}
          />
        ))}
      
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 mx-10 my-5 gap-x-5">
        <div className="">
          <p className="text-deepGray text-base font-semibold">Hot deal</p>
          {productData.slice(0, 4).map((item: any) => (
            <HotDealCard
              img={item.img}
              productName={item.productName}
              price={item.price}
              key={item.productName}
            />
          ))}
        </div>
        <div className="">
          <p className="text-deepGray text-base font-semibold">Best Seller</p>
          {productData.slice(0, 4).map((item: any) => (
            <HotDealCard
              img={item.img}
              productName={item.productName}
              price={item.price}
              key={item.productName}
            />
          ))}
        </div>
        <div className="">
          <p className="text-deepGray text-base font-semibold">Top Rated</p>
          {productData.slice(0, 4).map((item: any) => (
            <HotDealCard
              img={item.img}
              productName={item.productName}
              price={item.price}
              key={item.productName}
            />
          ))}
        </div>
        <div
          className=" bg-cover bg-center h-[428px] text-center py-12 space-y-3"
          style={{ backgroundImage: `url(${deal.src})` }}
        >
          <p className="text-deepGray uppercase font-semibold text-sm">Summer Sale</p>
          <p className="text-success text-4xl font-bold">75% Off</p>
          <button className="btn bg-white hover:bg-white rounded-full text-success"> Shop Now &rarr;{" "}</button>
        </div>
      </div>
    </div>
  );
};

export default Features;
