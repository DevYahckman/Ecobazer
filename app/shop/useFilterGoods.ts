"use client";
import  { useState } from "react";
import { productData } from "../mocks/dummyData";

const categoryOption = [
  { label: "fruits", value: "fruits" },
  { label: "Vegetables", value: "Vegetables" },
  { label: "water", value: "water" },
  { label: "Salad Ingredients", value: "Salad Ingredients" },
  { label: "Roots & Tubers", value: "Roots & Tubers" },
];
const priceOption = [
  { label: "5-100", value: "5-100" },
  { label: "101-1000", value: "101-1000" },
  { label: "1001-2000", value: "1001-2000" },
  { label: "2001-4000", value: "2001-4000" },
  { label: 2001 - 4000, value: "2001-4000" },
];

const useFilterGoods = () => {
  const [selectCategories, setSelectCategories] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<number[]>([5, 5000]);
  // const [selectRating, setSelectedRating]= useState<string | null>(null)

  const handleCategory = (value: string) => {
    setSelectCategories(value);
  };

  const handlePrice = (value: string) => {
    const [minPrice, maxPrice] = value.split("-").map(Number);
    setSelectedPrice([minPrice, maxPrice]);
  };

  const handleFilterGoods = () => {
    return productData.filter((product) => {
      const categoryFilter = selectCategories
        ? product.category?.toLocaleLowerCase() ===
          selectCategories.toLocaleLowerCase()
        : true;

      const priceFilter =
        product.price >= selectedPrice[0] && product.price <= selectedPrice[1];

      return categoryFilter && priceFilter;
    });
  };

  const filteredGoods = handleFilterGoods();
  return {
    categoryOption,
    filteredGoods,
    handleCategory,
    setSelectCategories,
    selectCategories,
    handlePrice,
    selectedPrice,
    priceOption,
    productData,
  };
};

export default useFilterGoods;
