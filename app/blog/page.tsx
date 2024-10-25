// "use client";
import React from "react";
import BreadCrumb from "../components/breadCrumbs/BreadCrumb";
import Link from "next/link";
import { blogData } from "../mocks/dummyData";
import { IBlogs } from "../interfaces/products";
import CustomSelects from "../components/customInputs/CustomSelects";
import { BsTag } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import BlogSide from "../components/blogSide/BlogSide";

const Blogs = () => {
  return (
    <div>
      <BreadCrumb>
        <Link href={"#"}>Blog</Link>
      </BreadCrumb>

      <div className="grid md:grid-cols-4 md:px-10 p-5 gap-3">
        {/* Blog Side Nav */}
        <BlogSide />

        <div className="col-span-3 overflow-y-scroll max-h-[140vh] scrollbar-hide">
          <div className="flex items-center justify-between">
            <CustomSelects placholder="Sort-by" className="w-40" />
            <p className="text-lightGray text-sm">
              {" "}
              <span className="text-deepGray font-semibold">52</span> Result
              Found
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {blogData.map((item: IBlogs, i: number) => (
              <div
                key={i}
                className="w-full min-h-32 rounded-xl border border-gray-200 hover:shadow-xl  transition duration-700 mb-3 md:mb-0"
              >
                <div
                  className=" bg-center bg-cover h-[324px] rounded-xl flex  "
                  style={{ backgroundImage: `url(${item.img.src})` }}
                >
                  {/* text */}

                  <div className="mt-auto px-10 py-9 ">
                    <p className="bg-white text-center px-6 py-3 rounded-md font-medium shadow-sm ">
                      <span className="block text-deepGray text-xl ">
                        {item.day}
                      </span>
                      <span className="uppercase text-gray-500 text-xs ">
                        {item.month}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="py-4 px-4">
                  <div className="flex space-x-9 items-center ">
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

                  <p className="font-semibold py-4 text-lg text-deepGray">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Odit, sunt tenetur nam quo eveniet aspernatur sint expedita
                    in ea porro!
                  </p>

                  <Link
                    href={"#"}
                    className="font-semibold text-success text-base"
                  >
                    Read More{" "}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
