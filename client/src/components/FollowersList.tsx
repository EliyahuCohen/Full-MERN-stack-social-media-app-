import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { IUser, USER } from "../features/userSlice";
import Following from "./Following";

const FollowersList = () => {
  const following = useSelector(
    (state: { user: IUser }) => state.user.user?.following || []
  );
  useEffect(() => {}, [following]);
  return (
    <div className="followingList">
      {following.map((one: USER) => {
        return <Following one={one} />;
      })}
    </div>
  );
};

export default FollowersList;
