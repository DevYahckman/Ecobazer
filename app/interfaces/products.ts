import { StaticImageData } from "next/image";

export interface IProducts {
  id:number;
  img: StaticImageData;
  productName: string;
  price: number;
  rating?: number;
  units?: number;
  category?: string;
  description: string;
  additionalInfo?: {
    weight?: number;
    color?: string;
    type?: string;
    status?: "Available";
  };
  // products?: IProducts[];
}

export interface ITopCategory {
  img: StaticImageData | string;
  category: string;
  units: number;
}

export interface ICustomerReview {
  img: StaticImageData | string;
  name: string;
  review: string;
  rating?: number;
}

export interface IBlogs {
  img: {src:string};
  topic: string;
  title: string;
  blog: string;
  link:string
  day:number
  month:string
}
