import React from "react";
import ReactStars from "react-stars";

interface Props{
  size?:number
  rating?:number 
}
const StarRatings = ({size, rating}:Props) => {


  return (
    <div>
      <ReactStars
        count={5}
        color2={"#ffd700"}
        size={ size || 24}
        value={rating || 0}
        edit={false}
      />
    </div>
  );
};

export default StarRatings;
