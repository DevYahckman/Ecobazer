"use client";
import React from "react";
import { Input } from "antd";

interface Props {
  disabled?: boolean;
  type?: string;
  value?: string;
  onClear?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string | undefined;
  touched?: boolean;
  label?: string;
  name?: string;
}

const CustomInput = ({
  disabled,
  type,
  value,
  onChange,
  onClear,
  placeholder,
  error,
  touched,
  label,
  onBlur,
  name,
}: Props) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor="" className="text-deepGray font-normal text-sm py-5">
          {label}
        </label>
      )}
      {type === "password" ? (
        <Input.Password
          placeholder="input password"
          size="large"
          onChange={onChange}
          onClear={onClear}
          value={value}
          type={type || "text"}
          disabled={disabled}
          onBlur={onBlur}
          name={name}
        />
      ) : (
        <Input
          placeholder={placeholder}
          size="large"
          onChange={onChange}
          onClear={onClear}
          value={value}
          type={type || "text"}
          disabled={disabled}
          onBlur={onBlur}
          name={name}
        />
      )}
      {touched && error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default CustomInput;
