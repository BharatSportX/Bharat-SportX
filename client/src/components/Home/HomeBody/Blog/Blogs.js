import React, { useState } from "react";
import "./Blog.css";
import CreatePost from "./createPost/CreatePost";
import PostBlogs from "./Post/PostBlogs";

const Blogs = () => {
  return (
    <>
      <hr className="border-4 border-[#272727] my-2" />
      <CreatePost />
      <hr className="border-4 border-[#272727] my-2" />
      <PostBlogs/>
      <hr className="border-4 border-[#272727] my-8" />
    </>
  );
};

export default Blogs;
