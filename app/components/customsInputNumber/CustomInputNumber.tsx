import React from "react";
import type { InputNumberProps } from "antd";
import { InputNumber } from "antd";

const CustomInputNumber = () => {
  const onChange: InputNumberProps["onChange"] = (value) => {
    console.log("changed", value);
  };
  return (
    <div>
      <InputNumber min={1} max={100} defaultValue={3} onChange={onChange} size="large"/>
    </div>
  );
};

export default CustomInputNumber;
