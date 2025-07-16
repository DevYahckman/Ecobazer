"use client";
import React from "react";
// import Image from 'next/image'
import background from "@/app/assets/images/shop-Bannar.png";
import ShopBtn from "../components/button/ShopBtn";
import CustomSelects from "../components/customInputs/CustomSelects";

import { IProducts } from "@/app/interfaces/products";
import ProductCard from "../components/ProductCard/ProductCard";
import useFilterGoods from "./useFilterGoods";

const Shop = () => {
  const {
    categoryOption,
    selectCategories,
    filteredGoods,
    handleCategory,
    handlePrice,
    selectedPrice,
    priceOption,
    // productData,
  } = useFilterGoods();
  const verdictOption = [
    { label: "Approved", value: "approved" },
    { label: "Pending", value: "pending" },
  ];
  return (
    <div className="max-w-full">
      <div
        className="bg-cover bg-left md:bg-center min-h-96 px-10 py-14 space-y-5 text-white"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <p className=" uppercase text-sm font-medium">Best Deals</p>
        <p className="font-bold text-2xl md:text-5xl">Sale of the Month</p>

        <div className="flex  space-x-5 text-success text-2xl text-center">
          <div>
            <p>00</p>
            <p className="text-xs text-white">Days</p>
          </div>
          <div>
            <p>00</p>
            <p className="text-xs text-white">Month</p>
          </div>
          <div>
            <p>00</p>
            <p className="text-xs text-white">Days</p>
          </div>
          <div>
            <p>00</p>
            <p className="text-xs text-white">Seconds</p>
          </div>
        </div>

        <div className="w-[50%]">
          <ShopBtn />
        </div>
      </div>

      <div className="mx-5 min-h-screen max-w-[100%] overflow-x-hidden">
        <div className="md:flex space-y-3 justify-between items-center py-4">
          <div className="flex items-center space-x-5">
            <CustomSelects
              className="md:w-40 w-24"
              options={categoryOption}
              placholder="Select Category"
              value={selectCategories}
              onChange={handleCategory}
            />
            <CustomSelects
              className="md:w-40 w-24"
              options={priceOption}
              placholder="Select Price"
              value={selectedPrice.join("-")}
              onChange={handlePrice}
            />
            <CustomSelects
              className="md:w-40 w-24"
              options={verdictOption}
              placholder="Select Rating"
            />
          </div>

          <div className="flex items-center space-x-5 ">
            <CustomSelects
              className="md:w-40 w-24"
              options={verdictOption}
              placholder="Sortby: Latest"
            />
          </div>
        </div>

        <div className="  my-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:px-10 md:space-x-2">
          {filteredGoods.map((item: IProducts) => (
            <ProductCard
              id={item.id}
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

export default Shop;
