import React from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import Feed from "./Feed";

const Home = () => {
  return (
    <div className="flex justify-between w-[80%] mx-auto gap-2">
      <LeftSideBar />
      <Feed />
      <RightSideBar />
    </div>
  );
};

export default Home;
