import React from "react";
import { useSelector } from "react-redux";
import { IUser } from "../features/userSlice";
import Post from "./Post";

const PrintPosts = () => {
  const posts = useSelector((state: { user: IUser }) => state.user.posts);
  return (
    <div className="printPosts">
      {posts?.map((one) => {
        return <Post key={one._id} post={one} />;
      })}
    </div>
  );
};

export default PrintPosts;
