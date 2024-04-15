import React from "react";
import { FiSearch } from "react-icons/fi";
import ProfileThree from "/ProfileThree.svg";
import ProfileTwo from "/ProfileTwo.svg";
import ProfileFour from "/ProfileFour.svg";
import ProfileFive from "/ProfileFive.svg";

import WhoToFollow from "./WhoToFollow";

const RightSideBar = () => {
  return (
    <>
    <div className="w-[25%] my-3 ">
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

        <div className="flex flex-col space-y-5">
          <WhoToFollow img={ProfileThree} name="Suman" id="@sumanpatra" />
          <WhoToFollow img={ProfileTwo} name="Surjo" id="@surjonaskar" />
          <WhoToFollow img={ProfileFour} name="Riya" id="@riyasingh" />
          <WhoToFollow
            img={ProfileFive}
            name="Habibulla"
            id="@seikhhabibulla"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default RightSideBar;
