"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button, Divider } from "antd";
import { BsFilter } from "react-icons/bs";
import CustomSearch from "../search/CustomSearch";
import { topCategory } from "@/app/mocks/dummyData";
import { ITopCategory } from "@/app/interfaces/products";
import gallery from "@/app/assets/images/gallery.png";
import gallery4 from "@/app/assets/images/gallery4.png";
import gallery7 from "@/app/assets/images/gallery7.png";

const BlogSide = () => {
  const [selectTag, setSelectTag] = useState<number | null>(0);

  const tags = [
    "Health",
    "Low-fat",
    "Vegeterian",
    "Bread",
    "Kid Foods",
    "Vitamin",
    "Snacks",
    "Tiffin",
    "Meats",
    "Launch",
    "Dinner",
  ];

  const galleryImages = [
    gallery,
    gallery,
    gallery,
    gallery,
    gallery4,
    gallery,
    gallery,
    gallery7,
  ];
  return (
    <div>
      <div className=" scrollbar-hide hidden md:block ">
        <Button
          type="primary"
          icon={<BsFilter />}
          size="large"
          iconPosition="end"
        >
          Filter
        </Button>

        <div className="py-5">
          <CustomSearch placeholder="Search" />
        </div>

        <div className="py-5 ">
          <p className="font-medium text-xl mb-3">Top Categories</p>
          {topCategory.map((item: ITopCategory, i: number) => (
            <p
              key={i}
              className="flex justify-between items-center space-y-4 font-medium text-sm cursor-pointer"
            >
              <span className="text-deepGray ">{item.category}</span>
              <span className="text-gray-500">({item.units})</span>
            </p>
          ))}
        </div>

        <Divider />

        <div>
          <p className="font-medium text-xl mb-3">Popular Tag</p>
          <div className="flex flex-wrap space-x-2  w-[100%] ">
            {tags.map((item, i: number) => (
              <p
                key={i}
                onClick={() => {
                  setSelectTag(i === selectTag ? null : i);
                }}
                className={` mb-3 text-sm cursor-pointer  px-5 py-3 w-fit rounded-full ${
                  selectTag === i
                    ? "text-white bg-success"
                    : "bg-gray-100 text-deepGray"
                }`}
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p className="font-medium text-xl mb-3">Gallery</p>

          <div className="grid grid-cols-4 gap-2">
            {galleryImages.map((item, i: number) => (
              <Image
                key={i}
                src={item}
                alt="gallery Image"
                className="w-36 rounded-md "
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSide;
