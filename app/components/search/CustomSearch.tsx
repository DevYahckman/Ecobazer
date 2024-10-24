import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

interface Props {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  value?: string;
  className?: string;
}
const CustomSearch = ({
  placeholder,
  onChange,
  disabled,
  value,
  className,
}: Props) => {
  return (
    <div>
      <Input
        prefix={<SearchOutlined />}
        size="large"
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        value={value}
        className={className}
      />
    </div>
  );
};

export default CustomSearch;
