import BlogSide from "@/app/components/blogSide/BlogSide";
import React from "react";
import { twoHundredDummyText } from "@/app/mocks/dummyData";
import Image from "next/image";
import { BsDot, BsTag } from "react-icons/bs";
import { FaRegUser, FaInstagram } from "react-icons/fa";
import { FaRegMessage, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { TiSocialPinterest } from "react-icons/ti";
import { IoMdLink } from "react-icons/io";
import Link from "next/link";
import blog from "@/app/assets/images/blogSingle.png";
import intextMsg1 from "@/app/assets/images/inTextImage1.png";
import intextMsg2 from "@/app/assets/images/inTextImage2.png";
import userImage from "@/app/assets/images/customer-2.png";

import blogBg from "@/app/assets/images/blogBg.png";
import ShopBtn from "@/app/components/button/ShopBtn";
import CustomInput from "@/app/components/customInputs/CustomInput";
import CustomBtn from "@/app/components/button/CustomBtn";
import { Divider } from "antd";
import CustomTextArea from "@/app/components/customInputs/CustomTextArea";

const SingleBlog = () => {
  const feedback = [
    {
      img: userImage,
      name: "Cornor McGreggor",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tempora alias corporis illo a cupiditate dignissimos architecto. Laborum, fugit exercitationem!",
    },
    {
      img: userImage,
      name: "Cornor McGreggor",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tempora alias corporis illo a cupiditate dignissimos architecto. Laborum, fugit exercitationem!",
    },
    {
      img: userImage,
      name: "Cornor McGreggor",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tempora alias corporis illo a cupiditate dignissimos architecto. Laborum, fugit exercitationem!",
    },
    {
      img: userImage,
      name: "Cornor McGreggor",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tempora alias corporis illo a cupiditate dignissimos architecto. Laborum, fugit exercitationem!",
    },
  ];

  const socials = [
    {
      link: "#",
      icon: <FaFacebookF size={18} />,
    },
    {
      link: "#",
      icon: <FaXTwitter size={18} />,
    },
    {
      link: "#",
      icon: <TiSocialPinterest size={18} />,
    },
    {
      link: "#",
      icon: <FaInstagram size={18} />,
    },
    {
      link: "#",
      icon: <IoMdLink size={18} />,
    },
  ];

  return (
    <div>
      <div className="grid md:grid-cols-4 md:px-10 p-5 gap-3">
        <div className="col-span-3 md:mx-14 space-y-5 overflow-y-scroll max-h-[140vh] scrollbar-hide ">
          <Image src={blog} alt="productImage" className="w-full rounded-lg" />

          <div className="flex space-x-9 items-center py-4">
            <div className="flex space-x-2 items-center">
              <BsTag className="text-gray-400" size={15} />
              <p className="text-gray-700 text-sm">Food</p>
            </div>
            <div className="flex space-x-2 items-center">
              <FaRegUser className="text-gray-400" size={15} />
              <p className="text-gray-700 text-sm">By Admin</p>
            </div>
            <div className="flex space-x-2 items-center">
              <FaRegMessage className="text-gray-400" size={15} />
              <p className="text-gray-700 text-sm">65 Comments</p>
            </div>
          </div>

          <p className=" text-2xl  md:text-3xl text-deepGray font-medium">
            Maecenas tempor urna sed quam mollis, a placerat dui fringill
            Suspendisse.
          </p>

          <div className="md:flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Image
                src={blog}
                alt="productImage"
                className="w-14 h-14 rounded-full "
              />
              <div>
                <p>Cameron Williamson</p>
                <p className="flex space-x-2 items-center text-gray-500 text-sm">
                  4 April, 2021{" "}
                  <span>
                    {" "}
                    <BsDot />{" "}
                  </span>{" "}
                  6 min read{" "}
                </p>
              </div>
            </div>

            <div className=" hidden md:flex items-center space-x-3 ">
              {socials.map((item, i: number) => (
                <Link
                  key={i}
                  href={item.link}
                  className="hover:bg-success hover:text-white hover:p-1 rounded-full "
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <p className="text-xl text-deepGray font-medium py-3">
            Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat
            dolor at scelerisque imperdiet. Phasellus tristique felis dolor
          </p>

          <p className="text-gray-500 text-base text-justify ">
            {twoHundredDummyText}
          </p>

          <div className="grid  md:grid-cols-2 gap-3">
            <Image
              src={intextMsg1}
              alt="intextMsgImg"
              className=" rounded-lg"
            />
            <Image
              src={intextMsg2}
              alt="intextMsgImg"
              className=" rounded-lg"
            />
          </div>
          <p className="text-gray-500 text-base text-justify ">
            {twoHundredDummyText.slice(0, 500)}
          </p>

          <div
            className="w-full bg-cover bg-center rounded-lg bg-no-repeat h-[250px] px-10 py-14"
            style={{ backgroundImage: `url(${blogBg.src})` }}
          >
            <p className="text-gray-500 uppercase font-medium text-sm">
              Summer Sales
            </p>
            <p className="text-white text-4xl font-semibold ">Fresh Fruit</p>
            <ShopBtn />
          </div>

          <section>
            <div className="grid gap-5 grid-cols-2">
              <CustomInput label="Fullname" placeholder="Jon Jones" />
              <CustomInput
                label="Email"
                placeholder="jones@gmail.com"
                type="email"
              />
            </div>
            <CustomTextArea
              label="Message"
              placeholder="Write your comment here "
            />

            <div className="w-56 my-5">
              <CustomBtn label="Post Comment" />
            </div>
          </section>

          <section>

            <p className="text-deepGray font-semibold py-4 text-2xl">Comments</p>
            {feedback.map((item) => (
              <>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 items-center">
                    <Image
                      src={item.img}
                      className="rounded-full w-13"
                      alt="User Image"
                    />
                    <div>
                      <p className="text-deepGray font-semibold text-base">
                        {item.name}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-lightGray ">
                    2 min ago
                  </p>
                </div>
                <p className="text-base d text-lightGray my-2 ">
                  {item.comment}
                </p>
                <Divider />
              </>
            ))}

            <CustomBtn
              label="load more"
              className="btn bg-white hover:bg-white font-semibold brder border-success text-success rounded-full "
            />
          </section>
        </div>

        {/* Blog Side bar */}
        <BlogSide />
      </div>
    </div>
  );
};

export default SingleBlog;
