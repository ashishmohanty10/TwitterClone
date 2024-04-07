import React from "react";
import Avatar from "react-avatar";
import ProfileOne from "/ProfileOne.svg";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { MdOutlinePoll } from "react-icons/md";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { GrScheduleNew } from "react-icons/gr";
import { MdOutlineLocationOn } from "react-icons/md";

const CreatePost = () => {
  return (
    <div className="border-b border-slate-200">
      <div className="my-3">
        <div className="flex items-center justify-between border-b ">
          <div className="w-full px-4 py-2 text-center border-r cursor-pointer hover:bg-gray-200">
            <h1 className="text-lg font-bold text-gray-600">For You</h1>
          </div>
          <div className="w-full px-4 py-2 text-center cursor-pointer hover:bg-gray-200">
            <h1 className="text-lg font-bold text-gray-600">Following</h1>
          </div>
        </div>
      </div>

      <div className="flex items-center w-full p-2">
        <Avatar
          src={ProfileOne}
          size="60"
          round={true}
          className="w-[40%] cursor-pointer"
        />
        <input
          className="ml-2 text-lg border-none outline-none w-[60%]"
          type="text"
          placeholder="What is happening"
        />
      </div>

      <div className="flex items-center justify-between my-4">
        <div className="flex items-center gap-x-3 text-twitterColor">
          <CiImageOn size={24} className="cursor-pointer" />
          <MdOutlineGifBox size={24} className="cursor-pointer" />
          <MdOutlinePoll size={24} className="cursor-pointer" />
          <HiOutlineFaceSmile size={24} className="cursor-pointer" />
          <GrScheduleNew size={24} className="cursor-pointer" />
          <MdOutlineLocationOn size={24} className="cursor-pointer" />
        </div>
        <button className="px-4 py-2 text-sm font-medium text-white border-none rounded-full bg-twitterColor">
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
