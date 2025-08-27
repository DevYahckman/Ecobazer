"use client";
import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

interface Props {
  placeholder?: string;
  label?: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
   error?: string | undefined;
  touched?: boolean;
}

const CustomTextArea = ({
  placeholder,
  label,
  value,
  name,
  onBlur,
  onChange,
  error,
  touched,
}: Props) => {
  return (
    <div>
      {label && (
        <label htmlFor="" className="text-deepGray font-normal text-sm py-5">
          {label}
        </label>
      )}
      <TextArea value={value}  rows={4} placeholder={placeholder} name={name} onChange={onChange} onBlur={onBlur} />
    </div>
  );
};

export default CustomTextArea;
