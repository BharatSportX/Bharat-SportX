import React from "react";
import PostStruct from "./PostStruct";
import { NavLink } from "react-router-dom";
import FriendCard from "./Friends/FriendCard";
import SuggestedFriend from "./Friends/SuggestedFriend";
import SpecialGift from "./SpecialGift";

const PostBlogs = () => {
  return (
    <>
      <section className="bg-gray-200 py-1 antialiased dark:bg-slate-950 ">
        <div className="mx-auto max-w-screen-xl px-4 md:px-28 lg:px-0 lg:pr-16  2xl:px-0">
          <div className="mt-6 2xl:mr-16 sm:mt-8 md:gap-6 lg:gap-0 lg:flex lg:items-start ">
            <div className="mx-auto lg:mx-0 w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <PostStruct />
              {/* <FriendCard/> */}
            </div>
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <SuggestedFriend />
              {/* <SpecialGift/> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostBlogs;
