'use client'
import React from 'react'
import { Input } from 'antd';

const { TextArea } = Input;

interface Props{
    placeholder?:string
    label?:string
}


const CustomTextArea = ({placeholder,label}:Props) => {
  return (
    <div>
         {label && (
        <label htmlFor="" className="text-deepGray font-normal text-sm py-5">
          {label}
        </label>
      )}
          <TextArea rows={4} placeholder={placeholder} />
    </div>
  )
}

export default CustomTextArea