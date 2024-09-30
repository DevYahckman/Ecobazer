import  { StaticImageData } from "next/image";

export interface IProducts {
  img: StaticImageData ;
  productName: string;
  price:number
  rating?:number
}

export interface ITopCategory{
  img: StaticImageData | string;
  category: string
  units:number
  
}

export interface ICustomerReview{
  img: StaticImageData | string;
  name:string
  review:string
}