import React from "react";
import Avatar from "react-avatar";

const WhoToFollow = (props) => {
  return (
    <>
      <div className="flex items-center gap-5">
        <div className="flex items-center  gap-2 w-[60%] cursor-pointer">
          <Avatar round={true} src={props.img} size="50" />

          <div>
            <h1 className="font-semibold">{props.name}</h1>
            <span className="text-sm font-normal text-gray-500">
              {props.id}
            </span>
          </div>
        </div>

        <div>
          <button className="px-4 py-2 font-bold text-white bg-black rounded-full">
            Follow
          </button>
        </div>
      </div>
    </>
  );
};

export default WhoToFollow;
