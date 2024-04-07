import React from "react";
import Avatar from "react-avatar";
import ProfileOne from "/ProfileOne.svg";
import { MdOutlineComment } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { AiOutlineRetweet } from "react-icons/ai";
import { LiaPollSolid } from "react-icons/lia";
import { CiBookmark } from "react-icons/ci";

const Tweet = () => {
  return (
    <div className="my-4 border-b border-gray-200">
      <div className="flex gap-5">
        <div>
          <Avatar src={ProfileOne} size="60" round={true} />
        </div>

        <div className="w-full ml-2">
          <div className="flex items-center ">
            <h1 className="font-bold">Ashish Mohanty</h1>
            <p className="ml-1 text-sm text-gray-500">@ashishmohanty</p>
          </div>

          <div>
            <p>Hello devs! Let's connect and grow together....</p>
          </div>

          <div className="flex items-center justify-between my-4">
            <div className="flex items-center">
              <div className="p-2 rounded-full cursor-pointer hover:text-green-600 hover:bg-green-100">
                <MdOutlineComment size={20} />
              </div>
              <p className="ml-1">0</p>
            </div>
            <div className="flex items-center">
              <div className="p-2 rounded-full cursor-pointer hover:text-red-600 hover:bg-red-100">
                <GoHeart size={20} />
              </div>
              <p className="ml-1">0</p>
            </div>
            <div className="flex items-center">
              <div className="p-2 rounded-full cursor-pointer hover:text-green-600 hover:bg-green-100">
                <AiOutlineRetweet size={20} />
              </div>
              <p className="ml-1">0</p>
            </div>
            <div className="flex items-center">
              <div className="p-2 rounded-full cursor-pointer hover:text-twitterColor hover:bg-blue-100">
                <LiaPollSolid size={20} />
              </div>
              <p className="ml-1">0</p>
            </div>

            <div className="flex items-center">
              <div className="p-2 rounded-full cursor-pointer hover:text-twitterColor hover:bg-blue-100">
                <CiBookmark size={20} />
              </div>
              <p className="ml-1">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
