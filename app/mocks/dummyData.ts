import apple from "@/app/assets/images/productOne.png";
import cabage from "@/app/assets/images/productTwo.png";
import lettuce from "@/app/assets/images/productThree.png";
import chill from "@/app/assets/images/productFour.png";
import corn from "@/app/assets/images/productFive.png";

import vegitable from "@/app/assets/images/Vegetable.png";
import fruit from "@/app/assets/images/fruits 1.png";
import fish from "@/app/assets/images/fish.png";
import meat from "@/app/assets/images/meat 1.png";
import water from "@/app/assets/images/soft-drink 1.png";
import snacks from "@/app/assets/images/snacks 1.png";

import firstCustomer from "@/app/assets/images/customer-1.png";
import secondCustomer from "@/app/assets/images/customer-2.png";
import thirdCustomer from "@/app/assets/images/customer-3.png";
import {
  ICustomerReview,
  IProducts,
  ITopCategory,
} from "../interfaces/products";

export const productData: IProducts[] = [
  {
    img: apple,
    productName: "Green Apple",
    price: 14.99,
    units: 0,
    description: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                natus dicta sunt tempore perspiciatis iusto repellendus omnis
                corrupti sed ducimus.`,
    category: "fruits",
    additionalInfo: {
      weight: 3,
      color: "blue",
      type: "Organic",
      status: "Available",
    },
  },
  {
    img: cabage,
    productName: "Chanise Cabbage",
    price: 114.99,
    units: 20,
    description: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                natus dicta sunt tempore perspiciatis iusto repellendus omnis
                corrupti sed ducimus.`,
    category: "fruits",
    additionalInfo: {
      weight: 3,
      color: "blue",
      type: "Organic",
      status: "Available",
    },
  },
  {
    img: lettuce,
    productName: "Green Lettuce",
    price: 14.99,
    units: 20,
    description: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                natus dicta sunt tempore perspiciatis iusto repellendus omnis
                corrupti sed ducimus.`,
    category: "vegetables",
    additionalInfo: {
      weight: 3,
      color: "blue",
      type: "Organic",
      status: "Available",
    },
  },
  {
    img: lettuce,
    productName: "Water",
    price: 14.99,
    units: 20,
    description: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                natus dicta sunt tempore perspiciatis iusto repellendus omnis
                corrupti sed ducimus.`,
    category: "water",
    additionalInfo: {
      weight: 3,
      color: "blue",
      type: "Organic",
      status: "Available",
    },
  },
  {
    img: chill,
    productName: "Green Chili ",
    price: 14.99,
    units: 20,
    description: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                natus dicta sunt tempore perspiciatis iusto repellendus omnis
                corrupti sed ducimus.`,
    category: "salad",
    additionalInfo: {
      weight: 3,
      color: "blue",
      type: "Organic",
      status: "Available",
    },
  },
  {
    img: corn,
    productName: "Corn",
    price: 14.99,
    units: 20,
    description: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                natus dicta sunt tempore perspiciatis iusto repellendus omnis
                corrupti sed ducimus.`,
    category: "sald",
    additionalInfo: {
      weight: 3,
      color: "blue",
      type: "Organic",
      status: "Available",
    },
  },
];

export const topCategory: ITopCategory[] = [
  {
    img: vegitable,
    category: "vegetable",
    units: 127,
  },
  {
    img: fruit,
    category: "Fresh Fruit",
    units: 127,
  },
  {
    img: fish,
    category: "River Fish",
    units: 27,
  },
  {
    img: water,
    category: "Water and Drinks ",
    units: 127,
  },
  {
    img: snacks,
    category: "Snacks",
    units: 127,
  },

  {
    img: meat,
    category: "vegetable",
    units: 127,
  },
  {
    img: meat,
    category: "vegetable",
    units: 127,
  },
  {
    img: meat,
    category: "vegetable",
    units: 127,
  },
  {
    img: meat,
    category: "vegetable",
    units: 127,
  },
  {
    img: meat,
    category: "vegetable",
    units: 127,
  },
  {
    img: meat,
    category: "vegetable",
    units: 127,
  },
  {
    img: meat,
    category: "vegetable",
    units: 127,
  },
  {
    img: meat,
    category: "vegetable",
    units: 127,
  },
];

export const customerReview: ICustomerReview[] = [
  {
    img: firstCustomer,
    name: "Jon Jones",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              inventore impedit ducimus. Velit autem provident maxime blanditiis
              enim. Dignissimos vel praesentium sunt, ab optio voluptatem.`,
    rating: 3.5,
  },
  {
    img: secondCustomer,
    name: "Jon Jones",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              inventore impedit ducimus. Velit autem provident maxime blanditiis
              enim. Dignissimos vel praesentium sunt, ab optio voluptatem.`,
    rating: 4,
  },
  {
    img: thirdCustomer,
    name: "Jon Jones",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              inventore impedit ducimus. Velit autem provident maxime blanditiis
              enim. Dignissimos vel praesentium sunt, ab optio voluptatem.`,
    rating: 5,
  },
  {
    img: thirdCustomer,
    name: "Jon Jones",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              inventore impedit ducimus. Velit autem provident maxime blanditiis
              enim. Dignissimos vel praesentium sunt, ab optio voluptatem.`,
    rating: 5.5,
  },
  {
    img: thirdCustomer,
    name: "Jon Jones",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              inventore impedit ducimus. Velit autem provident maxime blanditiis
              enim. Dignissimos vel praesentium sunt, ab optio voluptatem.`,
    rating: 3.7,
  },
  {
    img: thirdCustomer,
    name: "Jon Jones",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              inventore impedit ducimus. Velit autem provident maxime blanditiis
              enim. Dignissimos vel praesentium sunt, ab optio voluptatem.`,
    rating: 4.5,
  },
];
