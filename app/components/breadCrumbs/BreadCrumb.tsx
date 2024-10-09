import React, { ReactNode } from 'react'
import bg from '@/app/assets/images/Breadcrumbs.png'
import Link from 'next/link'
import { MdHome } from "react-icons/md";
import { PiGreaterThanLight } from "react-icons/pi";
interface Props{
  children?: ReactNode
}

const BreadCrumb = ({children}:Props) => {
  return (
    <div>
      <div
      className='h-24 bg-center bg-cover flex items-center px-5 text-sm  md:px-16 text-gray-400 space-x-2'
      style={{backgroundImage:`url(${bg.src})`}}>
        < Link href={'/'} >< MdHome  size={25}/> </Link>
        < PiGreaterThanLight size={10}/>
        {children}
      </div>
    </div>
  )
}

export default BreadCrumb