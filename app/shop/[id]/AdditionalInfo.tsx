import React from "react";


interface Props {
    src: string;
  }
const AdditionalInfo = ({src}:Props) => {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-24">
      <div className=" space-y-3" >
     
        <p className="font-semibold text-deepGray text-sm ">
          Weight: <span className="text-lightGray">03</span>
        </p>
        <p className="font-semibold text-deepGray text-sm ">
        color: <span className="text-lightGray">blue</span>
        </p>
        <p className="font-semibold text-deepGray text-sm ">
        type: <span className="text-lightGray">Organic</span>
        </p>
        <p className="font-semibold text-deepGray text-sm ">
        status: <span className="text-lightGray">Available</span>
        </p>
        <p className="font-semibold text-deepGray text-sm ">
        category: <span className="text-lightGray">salad</span>
        </p>
      </div>
      <div className=""> <iframe
          className="lg:w-full lg:min-h-96"
          src={src}
        ></iframe>{" "} </div>
    </div>
  );
};

export default AdditionalInfo;
