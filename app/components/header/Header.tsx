"use client";
import React, { useState } from "react";
import useCheckIsMobile from "@/app/hooks/useCheckIsMobile";
import { SlLocationPin } from "react-icons/sl";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FiPhoneCall } from "react-icons/fi";
import { FaHome, FaBloggerB, FaInfoCircle } from "react-icons/fa";
import { FaShop, FaMapLocationDot } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/svg/logo.svg";
import userImage from "@/app/assets/images/customer-2.png";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
// import product from "@/app/assets/images/productOne.png";
import { Divider } from "antd";
import CustomBtn from "../button/CustomBtn";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Spin, Avatar, Badge } from "antd";
// import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useUserStore } from "@/app/store/userStore";
import { useCartStore } from "@/app/store/cartStore";


interface navProps {
  name: string;
  path: string;
  // icon: any
  icon: JSX.Element;
}

const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const isMobile = useCheckIsMobile();
  const { status, data: session } = useSession();
  const route = useRouter();
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  console.log(isLoggedIn, "oti lo home");

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href={"/dashboard"}>Profile</Link>,
      icon: <FaRegUserCircle />,
    },
    {
      key: "2",
      label: <Link href={"/dashboard"}>Notifications</Link>,
      icon: <IoMdNotificationsOutline />,
    },
    {
      key: "3",
      label: <Link href={"/dashboard/user/setting"}>Setting</Link>,
      icon: <IoSettingsSharp />,
    },

    {
      key: "4",
      danger: true,
      label: <Link href={"/api/auth/signout"}>Logout</Link>,
      icon: <RiLogoutBoxLine />,
    },
  ];

  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const subtotal = cartItems.reduce((total, item) => total + (item.price??0), 0)

  console.log(cartItems);
  
  // drop down func
  const DropingDown = () => {

  



    return (
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {/* <p>{session && session.user?.name}</p> */}
            <Avatar
              src={<Image src={userImage} alt="user Image" />}
              size={50}
              className=" cursor-pointer"
            />
          </Space>
        </a>
      </Dropdown>
    );
  };

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOpenCart = () => {
    route.push("/checkout");
    setOpenCart(!openCart);
  };

  // const cartData = [
  //   {
  //     img: product,
  //     name: "Green Apple ",
  //     units: 10,
  //   },
  //   {
  //     img: product,
  //     name: "Green Apple ",
  //     units: 10,
  //   },
  // ];

  const navItem: navProps[] = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome size={19} />,
    },
    {
      name: "Shop",
      path: "/shop",
      icon: <FaShop size={19} />,
    },

    {
      name: "Blogs",
      path: "/blog",
      icon: <FaBloggerB size={19} />,
    },
    {
      name: "About Us",
      path: "/about",
      icon: <FaInfoCircle size={19} />,
    },
    {
      name: "Contact Us",
      path: "/contact",
      icon: <FaMapLocationDot size={19} />,
    },
  ];

  console.log(session, "data");

  return (
    <div className="">
      {isMobile ? (
        <div>
          <div className="flex justify-between items-center px-2 py-4 bg-deepGray">
            <div className="flex space-x-3 items-center">
              <Image src={logo} alt="logo" />
              <p className="font-bold text-3xl text-white">Ecobazar</p>
            </div>

            <div className="flex text-deepGray items-center space-x-6">
              <button onClick={toggleDrawer}>
                <HiOutlineMenuAlt3 size={30} className=" text-white" />
              </button>

              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="left"
                className="p-5"
                size={300}
              >
                <div className="flex items-start space-x-2">
                  <Image src={userImage} alt="" className="rounded-full w-12" />
                  <div>
                    <p className="font-bold text-deepGray ">Cornor McGregor</p>
                    <p className="text-lightGray font-medium">
                      mcgregor@gmail.com
                    </p>
                  </div>
                </div>
                <hr className="my-4" />

                {navItem.map((item, i: number) => (
                  <div
                    key={i}
                    className="flex items-center space-x-5 my-5"
                    onClick={() => {
                      setIsOpen(false);
                      route.push(item.path);
                    }}
                  >
                    <span className="">{item.icon}</span>
                    <p className="font-medium text-lg text-lightGray">
                      {item.name}
                    </p>
                  </div>
                ))}
              </Drawer>
            </div>
          </div>
        </div>
      ) : (
        // Desktop Screen
        <div>
          {/* Top */}

          <div className=" hidden lg:flex justify-between  items-center  bg-deepGray px-7 py-2 text-gray-300 text-xs">
            <div className="flex items-center space-x-2 ">
              <SlLocationPin size={18} />
              <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link href={"#"}>ENG </Link>
              <span>|</span>
              <Link href={"#"}>NGN </Link>
              <span>|</span>
              {status !== "authenticated" && (
                <>
                  <Link href={"/register"}>SignUp </Link>
                  <span>|</span>
                  <Link href={"/login"}>Signin </Link>
                </>
              )}
              {status === "loading" && (
                <div className="text-red-800">
                  <Spin />
                  Loading
                </div>
              )}
            </div>
          </div>

          {/* Mid */}
          <div className="flex justify-between items-center px-7 py-4">
            <div className="flex space-x-3 items-center">
              <Image src={logo} alt="logo" />
              <p className="font-bold text-3xl">Ecobazar</p>
            </div>

            <div className="">
              {/* <div className="input input-bordered rounded flex items-center ">
                <label className="flex items-center ">
                  <input type="text" className="grow" placeholder="Search" />
                 <GrSearch />
                 </label>
                 Search
                 <button className="bg-success p-4">Search</button>
                 </div> */}
            </div>

            <div className="flex text-deepGray items-center space-x-6">
              <div>
                <FiHeart size={30} />
              </div>
              <span>|</span>
              <div className="flex items-center space-x-4">
                <Badge count={cartItems.length }>
                  <HiOutlineShoppingBag
                    size={30}
                    onClick={() => {
                      setOpenCart(!openCart);
                    }}
                  />
                </Badge>
                <div>
                  <div className="text-sx text-lightGray">
                    Shopping Cart:
                    {/* <p className="absolute top-[55px] right-[170px] bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                      5
                    </p> */}
                  </div>
                  <p className=" text-sm text-deepGray font-bold ">$57.00</p>
                </div>
              </div>
              {status === "authenticated" && (
                <>
                  <span>|</span>
                  <div>
                    <p>
                      <DropingDown />
                    </p>
                  </div>
                </>
              )}
              {/* Cart Modal */}

              <Drawer
                open={openCart}
                onClose={() => {
                  setOpenCart(false);
                }}
                direction="right"
                className="p-5 flex flex-col"
                size={300}
              >
                <div className="flex items-center text-deepGray justify-between">
                  <p className="font-semibold ">Shopping Cart (2)</p>
                  <IoCloseSharp
                    className="cursor-pointer"
                    onClick={() => setOpenCart(false)}
                  />
                </div>
                <Divider />
                {cartItems.map((item, i: number) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="my-2 flex space-x-3 items-center">
                      <Image
                        src={item.img}
                        alt="product image"
                        className="w-[100px]"
                      />
                      <div>
                        <p className="text-sm text-deepGray font-semibold ">
                         {item.productName}{" "}
                        </p>
                        <p className="text-lightGray text-sm">
                          1kg x{" "}
                          <span className="text-deepGray font-bold">12</span>
                        </p>
                      </div>
                    </div>

                    <IoIosCloseCircleOutline className="cursor-pointer" onClick={()=> removeFromCart(item.id)} />
                  </div>
                ))}

                <div className="mt-auto ">
                  <div className="flex justify-between text-deepGray text-sm">
                    <p className="font-medium">{cartItems.length} products </p>
                    <p className="font-bold">${subtotal}</p>
                  </div>

                  <div className="space-y-2 my-3">
                    <CustomBtn label="Checkout" onClick={handleOpenCart} />
                    <Link
                      href={"/cart"}
                      className="bg-gray-200 btn w-[100%] rounded-full hover:bg-gray-200  text-success"
                      onClick={() => {
                        setOpenCart(false);
                        
                      }}
                    >
                      Go to Cart
                    </Link>
                  </div>
                </div>
              </Drawer>
            </div>
          </div>

          {/* Last */}

          <div className="flex justify-between items-center bg-gray-50 p-3 px-7">
            <div className="flex space-x-14 ">
              {navItem.map((item, i: number) => (
                <Link
                  href={item.path}
                  className="text-gray-500 text-sm font-bold"
                  key={i}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-deepGray font-bold">
              <FiPhoneCall size={20} />
              <div>+34 9474 3434</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppHeader;
