import React from 'react'

interface Props{
    type?:'submit' | 'reset'
    className?:string
    label:string
}

const CustomBtn = ({type, className, label}:Props) => {
  return (
    <div>
    <button type={type || 'submit'} className={className || ' btn w-[100%] rounded-full hover:bg-success bg-success text-white'}>{label}</button>
    </div>
  )
}

export default CustomBtn