"use client";
import React, { useState } from "react";
import testImage from "@/app/assets/svg/shopping-bag.svg";
import sideImageOne from "@/app/assets/images/sideImage_1.png";
import sideImageTwo from "@/app/assets/images/sideImage_2.png";
import sideImageThree from "@/app/assets/images/sideImage_3.png";
import sideImageFour from "@/app/assets/images/sideImage_4.png";
import Image, { StaticImageData } from "next/image";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { TiEyeOutline } from "react-icons/ti";
import { LuDot } from "react-icons/lu";
import { Divider } from "antd";
import StarRatings from "../rating/StarRatings";
import CustomModal from "../Modals/CustomModal";
import CustomInputNumber from "../customsInputNumber/CustomInputNumber";

interface Props {
  img: StaticImageData;
  productName?: string;
  price?: number;
  units?: number;
  description?: string;
  category?: string;
}
const ProductCard = ({
  img,
  productName,
  price,
  units,
  description,
  category,
}: Props) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      {" "}
      <div className="bg-[#f7fafc] rounded-lg min-h-28 shadow  hover:cursor-pointer hover:shadow-xl hover:border mt-5 md:mt-0 hover:border-gray-600 transition duration-700 group">
        <div className="relative">
          <Image
            src={img}
            alt="roduct image"
            className="object-contain object-center w-100% h-[250px]"
          />
          {units == 0 && (
            <div className="absolute bg-black text-white top-2 left-3 p-1 rounded-md">
              Out of Stock
            </div>
          )}
          <div className="absolute top-3 right-2 hidden  group-hover:block">
            {
              <div
                className="mb-3 bg-white border border-gray-400 p-2 rounded-full"
                onClick={handleLike}
              >
                {like === false ? <FcLikePlaceholder /> : <FcLike />}
              </div>
            }
            <div
              className="mb-3 bg-white border border-gray-400 p-2 rounded-full "
              onClick={() => setOpenModal(true)}
            >
              <TiEyeOutline color="gray" />
            </div>
          </div>
        </div>

        {/* Modal */}
        <CustomModal
          openModal={openModal}
          closeModal={closeModal}
          width={"1020px"}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-40">
            <div className="flex justify-center items-center">
              <div className="space-y-8">
                {[
                  sideImageOne,
                  sideImageTwo,
                  sideImageThree,
                  sideImageFour,
                ].map((item: StaticImageData, i: number) => (
                  <Image src={item} alt="side product" key={i} />
                ))}
              </div>
              <div>
                <Image src={img} alt="side product" />
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
                  SKU:{" "}
                  <span className="font-normal text-gray-600">$ {price}</span>
                </div>
              </div>
              <Divider />

              <p className="text-gray-500 text-sm">{description}</p>
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
                <span className="text-lightGray font-normal">{category}</span>
              </p>
              <p className="text-sm font-semibold text-deepGray">
                Tag:{" "}
                <span className="text-lightGray font-normal">
                  Vegetables Heathy Chinese Cabage Green cabage{" "}
                </span>
              </p>
            </div>
          </div>
        </CustomModal>

        <div className="flex items-center justify-between my-5 mx-3 ">
          <div>
            <p className="text-gray-700 font-medium text-base">{productName}</p>
            <p className="font-semibold text-deepGray">${price}</p>

            <div>
              <StarRatings rating={3.5} />
            </div>
          </div>
          <div className="bg-white  p-3 rounded-full ">
            <Image src={testImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
