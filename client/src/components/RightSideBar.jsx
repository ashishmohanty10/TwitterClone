import React from "react";
import { FiSearch } from "react-icons/fi";
import Avatar from "react-avatar";
import ProfileThree from "/ProfileThree.svg";
import ProfileTwo from "/ProfileTwo.svg";
import ProfileFour from "/ProfileFour.svg";
import ProfileFive from "/ProfileFive.svg";

const RightSideBar = () => {
  return (
    <div className="w-[20%] my-3 ">
      {/* Search */}
      <div className="flex items-center w-full p-2 text-gray-500 bg-gray-100 rounded-full">
        <FiSearch size={20} />
        <input
          type="text"
          placeholder="Search"
          className="px-2 outline-none bg-inherit"
        />
      </div>

      {/* Who to follow section */}
      <div className="w-full p-4 my-4 bg-gray-200 rounded-lg">
        <h1 className="mb-5 text-xl font-semibold">Who to follow</h1>

        <div className="flex flex-col space-y-4">
          <div className="flex justify-between">
            <div className="flex">
              <Avatar
                src={ProfileThree}
                size="40"
                round={true}
                className="w-[40%]"
              />

              <div className="ml-2">
                <h1 className="font-bold">Suman</h1>
                <p className="text-sm">@sumanpatra</p>
              </div>
            </div>
            <div>
              <button className="px-4 py-2 text-sm text-white bg-black rounded-full">
                Follow
              </button>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex">
              <Avatar
                src={ProfileTwo}
                size="40"
                round={true}
                className="w-[40%]"
              />

              <div className="ml-2">
                <h1 className="font-bold">Surjo</h1>
                <p className="text-sm">@surjonaskar23</p>
              </div>
            </div>
            <div>
              <button className="px-4 py-2 text-sm text-white bg-black rounded-full">
                Follow
              </button>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex">
              <Avatar
                src={ProfileFour}
                size="40"
                round={true}
                className="w-[40%]"
              />

              <div className="ml-2">
                <h1 className="font-bold">Riya</h1>
                <p className="text-sm">@riyasingh</p>
              </div>
            </div>
            <div>
              <button className="px-4 py-2 text-sm text-white bg-black rounded-full">
                Follow
              </button>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex">
              <Avatar
                src={ProfileFive}
                size="40"
                round={true}
                className="w-[40%]"
              />

              <div className="ml-2">
                <h1 className="font-bold">Habibulla</h1>
                <p className="text-sm truncate ">@seikhhabibulla</p>
              </div>
            </div>
            <div>
              <button className="px-4 py-2 text-sm text-white bg-black rounded-full">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
