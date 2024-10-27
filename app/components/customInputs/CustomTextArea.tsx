'use client'
import React from 'react'
import { Input } from 'antd';

const { TextArea } = Input;

interface Props{
    placeholder?:string
    label?:string
    value?:string
}


const CustomTextArea = ({placeholder,label, value}:Props) => {
  return (
    <div>
         {label && (
        <label htmlFor="" className="text-deepGray font-normal text-sm py-5">
          {label}
        </label>
      )}
          <TextArea value={value} rows={4} placeholder={placeholder} />
    </div>
  )
}

export default CustomTextArea