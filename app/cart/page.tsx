"use client";
import { Table } from "antd";
import React from "react";
import BreadCrumb from "../components/breadCrumbs/BreadCrumb";
// import img from "@/app/assets/images/productOne.png";
import CustomInputNumber from "../components/customsInputNumber/CustomInputNumber";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Image, { StaticImageData } from "next/image";
import CustomBtn from "../components/button/CustomBtn";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/store/cartStore";



const Cart = () => {


    // const {cartItems, removeFromCart, clearCart}=useCartStore((state:any)=>({
    // cartItems: state.cartItems,
    // removeFromCart: state.removeFromCart,
    // clearCart: state.clearCart,
    // }));

  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cartItems = useCartStore((state) => state.cartItems);

  console.log(cartItems);
  


  interface ICart {
    product: { img: StaticImageData; name: string };
    price: { price: number };
    quantity: React.ReactNode;
    subtotal: { price: number; icon: React.ReactNode };
  }


  const route = useRouter();
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0)
  const checkoutData = {
    price: subtotal,
    shipping: "Free",
    Total: subtotal+2,
  };
 

  const data = cartItems.map((item, index) => ({
  key: `${index}`,
  product: {
    img: item.img,
    name: item.productName,
  },
  price: {
    price: item.price,
  },
  quantity: <CustomInputNumber />, //  later with real quantity support
  subtotal: {
    price: item.price, // You can multiply by quantity later
    icon: <IoIosCloseCircleOutline className="cursor-pointer"
     onClick={() => removeFromCart(item.id)} 
     />,
  },
}));

  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      render: ({ img, name }: ICart["product"]) => {
        return (
          <div className="md:flex md:space-x-4 items-center whitespace-nowrap">
            <Image src={img} className="w-24 " alt="productImage"></Image>
            <p className="text-base text-deepGray">{name}</p>
          </div>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: ({ price }: ICart["price"]) => {
        return <p className="whitespace-nowrap ">{price}</p>;
      },
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Subtotal",
      dataIndex: "subtotal",
      key: "subtotal",
      render: ({ price, icon }: ICart["subtotal"]) => {
        return (
          <div className="flex items-center justify-between space-x-1">
            <div className="font-semibold text-base text-deepGray">{price}</div>
            <div className="text-2xl">{icon}</div>
          </div>
        );
      },
    },
  ];
 


  
  


  return (





    <div>
      <BreadCrumb />

      <div className="py-5 p-5 md:px-16">
        <p className="header py-10"> My Shopping Cart</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className=" overflow-x-scroll w-full md:col-span-2">
            <Table
              dataSource={data}
              columns={columns}
              pagination={
                data.length >= 10 ? { position: ["bottomCenter"] } : false
              }
            />
          </div>
          <div>
            <div className="border border-gray-200 rounded-lg p-5">
              <p className="text-deepGray text-xl font-semibold">Cart total</p>

              <p className="flex justify-between items center py-5 text-sm ">
                <span className="text-gray-700 ">Price:</span>{" "}
                <span className="text-deepGray">${checkoutData.price}</span>
              </p>
              <p className="flex justify-between items center py-5 text-sm ">
                <span className="text-gray-700 ">Shipping:</span>{" "}
                <span className="text-deepGray">{checkoutData.shipping}</span>
              </p>
              <p className="flex justify-between items center py-5 text-sm ">
                <span className="text-gray-700 ">Total:</span>{" "}
                <span className="text-deepGray">{checkoutData.Total}</span>
              </p>

              <CustomBtn
                label="Proceed to checkout"
            
                onClick={() => {
                  route.push("/checkout");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
