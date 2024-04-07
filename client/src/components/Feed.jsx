import React from "react";
import CreatePost from "./CreatePost";
import Tweet from "./Tweet";

const Feed = () => {
  return (
    <div className="w-[50%] border-x">
      <div className="p-2">
        <CreatePost />
        <Tweet />
      </div>
    </div>
  );
};

export default Feed;
