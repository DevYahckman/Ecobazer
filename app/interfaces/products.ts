import Image, { StaticImageData } from "next/image";

export interface IProducts {
  img: StaticImageData;
  name: string;
  price:number
  rating:number
}
