

import React from "react";

interface Props {
  type?: "submit" | "reset";
  className?: string;
  label: string;
  onClick?:()=>void
}

const CustomBtn = ({ type, className, label, onClick }: Props) => {
  return (
    <div>
      <button

        type={type || "submit"}
        className={
          className ||
          " btn w-[100%] rounded-full hover:bg-success bg-success text-white"
        }
        onClick={onClick}
      >
        {label}
      </button>

 
    </div>
  );
};

export default CustomBtn;
