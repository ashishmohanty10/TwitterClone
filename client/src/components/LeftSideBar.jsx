import React from "react";
import Logo from "/twitter.svg";
import { LeftSideBarLinks } from "../lib/LeftSideBarData";

const LeftSideBar = () => {
  return (
    <>
    <div className="w-[25%] my-3">
      <div>
        <a href="/">
          <img src={Logo} alt="Twitter Logo" className="w-[40px] h-[40px]" />
        </a>
      </div>

      <div className="my-4">
        <div>
          {LeftSideBarLinks.map((data) => {
            return (
              <a
                key={data.id}
                href={data.href}
                className="flex items-center gap-5 px-4 py-2 rounded-full hover:bg-gray-100 w-fit"
              >
                <data.icon size={30} className=" text-primaryTextColor" />

                <h1 className="text-lg font-bold text-primaryTextColor">
                  {data.title}
                </h1>
              </a>
            );
          })}
        </div>

        <div>
          <button className="w-full px-4 py-2 mt-5 font-bold text-white border-none rounded-full bg-twitterColor">
            POST
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default LeftSideBar;
