import React from "react";
import Avatar from "react-avatar";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import ProfileOne from "/ProfileOne.svg";
const Profile = () => {
  return (
    <>
      <div className="w-[50%] border-l border-r border-gray-200">
        <div>
          <div className="flex items-center hover:bg-gray-100 hover:cursor-pointer py-2">
            <Link to="/" className="p-2 rounded-full bg-gray-100">
              <IoMdArrowBack size="24px" />
            </Link>
            <div className="ml-2">
              <h1 className="font-bold text-lg">Aschis</h1>
              <p className="text-gray-500 text-sm">10 post</p>
            </div>
          </div>
          <img
            src="https://pbs.twimg.com/profile_banners/1581707412922200067/1693248932/1080x360"
            alt=""
          />
        </div>

        <div className="absolute top-52 ml-2 border-4 border-white rounded-full">
          <Avatar
            src={ProfileOne}
            size="120"
            round={true}
            className="w-[40%] cursor-pointer"
          />
        </div>
        <div className="text-right m-4">
          <button className="px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400">
            Edit Profile
          </button>
        </div>
        <div className="m-4">
          <h1 className="font-bold text-xl">Suman</h1>
          <p>@muaokgjgsj</p>
        </div>
        <div className="m-4 text-sm">
          <p>
            🌐 Exploring the web's endless possibilities with MERN Stack 🚀 |
            Problem solver by day, coder by night 🌙 | Coffee lover ☕ | Join me
            on this coding journey!
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
