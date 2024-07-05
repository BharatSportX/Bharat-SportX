import React, { useState } from "react";
import "./Blog.css";
import CreatePost from "./createPost/CreatePost";

const Blogs = () => {
  return (
    <>
      <hr className="border-4 border-gray-900 my-2" />
      <CreatePost />
      <hr className="border-4 border-gray-900 my-2" />
    </>
  );
};

export default Blogs;
