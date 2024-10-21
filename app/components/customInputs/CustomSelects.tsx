"use client";
import React from "react";
import { Select } from "antd";
import type { SelectProps } from "antd";

interface CustomnSelectProps {
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  onBlur?: (value: string) => void;
  options?: SelectProps["options"];
  className?: string;
  placholder?: string;
  value?: string | null;
  label?: string;
  size?: "large" | "middle" | "small";
 touched?:boolean
 error?:string
}
const CustomSelects = ({
  onChange,
  onSearch,
  options,
  className,
  placholder,
  value,
  label,
  size,
  error,touched
  

}: CustomnSelectProps) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor="" className="block -mb-4 text-deepGray font-normal text-sm py-5">
          {label}
        </label>
      )}

      <Select
        showSearch
        placeholder={placholder}
        optionFilterProp="label"
        onChange={onChange}
        onSearch={onSearch}
        options={options}
        size={size || "middle"}
        dropdownStyle={{ overflow: "hidden" }}
        className={className}
        value={value}
        allowClear
      />
      {touched && error && <p className="text-sm text-red-500">{error}</p>}

    </div>
  );
};

export default CustomSelects;
