import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import apple from "@/app/assets/images/productOne.png";
import { productData } from "@/app/mocks/dummyData";
import { IProducts } from "@/app/interfaces/products";

const Features = () => {
  return (
    <div className="min-h-screen mt-44 md:mt-0">
      <h1 className="header">Featured Products</h1>
      <div className="my-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-10 space-x-2">
        {productData.map((item: any) => (
          <ProductCard
            img={item.img}
            productName={item.productName}
            price={item.price}
            key={item.productName}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
