"use client";
import React from "react";
import { Select } from "antd";
import type { SelectProps } from "antd";

interface Option {
  [key: string]: string;
}
interface CustomnSelectProps {
  onChange?: (value: string) => void ;
  onSearch?: (value: string) => void;
  options?: SelectProps["options"];
  className?: string;
  placholder?: string;
  value?: string | null ;
}
const CustomSelects = ({
  onChange,
  onSearch,
  options,
  className,
  placholder,
  value,
}: CustomnSelectProps) => {
  return (
    <div>
      <Select
        showSearch
        placeholder={`${placholder}`}
        optionFilterProp="label"
        onChange={onChange}
        onSearch={onSearch}
        options={options}
        size="middle"
        dropdownStyle={{ overflow: "hidden" }}
        className={className || "md:w-40 w-24"}
        value={value}
        allowClear
      />
    </div>
  );
};

export default CustomSelects;
