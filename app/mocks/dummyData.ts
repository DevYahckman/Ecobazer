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


import blog1 from "@/app/assets/images/news1.png";
import blog2 from "@/app/assets/images/news2.png";
import blog3 from "@/app/assets/images/news3.png";
import blog4 from "@/app/assets/images/news4.png";
import blog5 from "@/app/assets/images/news5.png";
import blog6 from "@/app/assets/images/news6.png";
// import blog7 from "@/app/assets/images/news7.png";
import blog8 from "@/app/assets/images/news8.png";
import blog9 from "@/app/assets/images/news9.png";


import {
  IBlogs,
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
  // {
  //   img: meat,
  //   category: "vegetable",
  //   units: 127,
  // },
  // {
  //   img: meat,
  //   category: "vegetable",
  //   units: 127,
  // },
  // {
  //   img: meat,
  //   category: "vegetable",
  //   units: 127,
  // },
  // {
  //   img: meat,
  //   category: "vegetable",
  //   units: 127,
  // },
  // {
  //   img: meat,
  //   category: "vegetable",
  //   units: 127,
  // },
  // {
  //   img: meat,
  //   category: "vegetable",
  //   units: 127,
  // },
  // {
  //   img: meat,
  //   category: "vegetable",
  //   units: 127,
  // },
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

export const blogData: IBlogs[] = [
  {
    img: blog1,
    link:'#',
    day:1,
    month:'Nov',
    topic: "food",
    title: "This is about food",
    blog: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui maiores, voluptatem dolore consequatur quis possimus ducimus ipsa in doloremque amet dicta harum earum nobis ea quam debitis porro tempora aut tempore, repellendus esse? Asperiores pariatur quo aspernatur soluta maiores, modi sequi assumenda aliquam dolorem nobis ipsa, iure, necessitatibus tenetur?`,
  },
  {
    img: blog2,
    link:'#',
    day:3,
    month:'Nov',
    topic: "food",
    title: "This is about food",
    blog: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui maiores, voluptatem dolore consequatur quis possimus ducimus ipsa in doloremque amet dicta harum earum nobis ea quam debitis porro tempora aut tempore, repellendus esse? Asperiores pariatur quo aspernatur soluta maiores, modi sequi assumenda aliquam dolorem nobis ipsa, iure, necessitatibus tenetur?`,
  },
  {
    img: blog3,
    link:'#',
    day:6,
    month:'Nov',
    topic: "food",
    title: "This is about food",
    blog: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui maiores, voluptatem dolore consequatur quis possimus ducimus ipsa in doloremque amet dicta harum earum nobis ea quam debitis porro tempora aut tempore, repellendus esse? Asperiores pariatur quo aspernatur soluta maiores, modi sequi assumenda aliquam dolorem nobis ipsa, iure, necessitatibus tenetur?`,
  },
  {
    img: blog4,
    link:'#',
    day:9,
    month:'Nov',
    topic: "food",
    title: "This is about food",
    blog: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui maiores, voluptatem dolore consequatur quis possimus ducimus ipsa in doloremque amet dicta harum earum nobis ea quam debitis porro tempora aut tempore, repellendus esse? Asperiores pariatur quo aspernatur soluta maiores, modi sequi assumenda aliquam dolorem nobis ipsa, iure, necessitatibus tenetur?`,
  },
  {
    img: blog5,
    link:'#',
    day:18,
    month:'Nov',
    topic: "food",
    title: "This is about food",
    blog: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui maiores, voluptatem dolore consequatur quis possimus ducimus ipsa in doloremque amet dicta harum earum nobis ea quam debitis porro tempora aut tempore, repellendus esse? Asperiores pariatur quo aspernatur soluta maiores, modi sequi assumenda aliquam dolorem nobis ipsa, iure, necessitatibus tenetur?`,
  },
  {
    img: blog6,
    link:'#',
    day:11,
    month:'Nov',
    topic: "food",
    title: "This is about food",
    blog: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui maiores, voluptatem dolore consequatur quis possimus ducimus ipsa in doloremque amet dicta harum earum nobis ea quam debitis porro tempora aut tempore, repellendus esse? Asperiores pariatur quo aspernatur soluta maiores, modi sequi assumenda aliquam dolorem nobis ipsa, iure, necessitatibus tenetur?`,
  },
  {
    img: blog6,
    link:'#',
    day:18,
    month:'Nov',
    topic: "food",
    title: "This is about food",
    blog: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui maiores, voluptatem dolore consequatur quis possimus ducimus ipsa in doloremque amet dicta harum earum nobis ea quam debitis porro tempora aut tempore, repellendus esse? Asperiores pariatur quo aspernatur soluta maiores, modi sequi assumenda aliquam dolorem nobis ipsa, iure, necessitatibus tenetur?`,
  },
  {
    img: blog8,
    link:'#',
    day:16,
    month:'Nov',
    topic: "food",
    title: "This is about food",
    blog: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui maiores, voluptatem dolore consequatur quis possimus ducimus ipsa in doloremque amet dicta harum earum nobis ea quam debitis porro tempora aut tempore, repellendus esse? Asperiores pariatur quo aspernatur soluta maiores, modi sequi assumenda aliquam dolorem nobis ipsa, iure, necessitatibus tenetur?`,
  },
  {
    img: blog9,
    link:'#',
    day:19,
    month:'Nov',
    topic: "food",
    title: "This is about food",
    blog: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui maiores, voluptatem dolore consequatur quis possimus ducimus ipsa in doloremque amet dicta harum earum nobis ea quam debitis porro tempora aut tempore, repellendus esse? Asperiores pariatur quo aspernatur soluta maiores, modi sequi assumenda aliquam dolorem nobis ipsa, iure, necessitatibus tenetur?`,
  },
];
