import BlogSide from "@/app/components/blogSide/BlogSide";
import React from "react";

const SingleBlog = () => {
  return (
    <div>
      <div className="grid md:grid-cols-4 md:px-10 p-5 gap-3">
        <div className="col-span-3">Side One</div>
     

        <BlogSide />
      </div>
    </div>
  );
};

export default SingleBlog;
