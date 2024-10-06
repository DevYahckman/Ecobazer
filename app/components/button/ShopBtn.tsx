import React from "react";
interface Props {
  label?: string;
  onClick?: () => void;
}
const ShopBtn = ({ label }: Props) => {
  return (
    <button className="btn hover:bg-success bg-success mt-4 font-semibold text-white md:w-[30%] rounded-full">
      {label || "Shop Now"}   &rarr;{" "}
    </button>
  );
};

export default ShopBtn;
