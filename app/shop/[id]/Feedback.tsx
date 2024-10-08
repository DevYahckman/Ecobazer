import React from "react";
import Image from "next/image";
import userImage from "@/app/assets/images/customer-2.png";
import StarRatings from "@/app/components/rating/StarRatings";
import { Divider } from "antd";

const Feedback = () => {
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


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-24 gap-4">

      <div className="">
      {feedback.map((item)=>(
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
              <StarRatings rating={item.rating} />
            </div>
          </div>
          <p className="text-sm font-semibold text-lightGray ">2 min ago</p>
        </div>
        <p className="text-base d text-lightGray my-2 ">
          {item.comment}
        </p>
        <Divider />
              </>
            ))}
      </div>
      <div className="">Youtube Video </div>
    </div>
  );
};

export default Feedback;
