import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { IUser } from "../features/userSlice";
import FollowersList from "./FollowersList";

const RightSide = () => {
  const user = useSelector((state: { user: IUser }) => state);
  useEffect(() => {}, [user.user.user?.following]);
  return (
    <div className="rightSide">
      <div className="rightsideWrapper">
        <div className="right1">
          <img
            src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="side picture"
          />
        </div>
        <div className="right2">
          <p>Nice Water</p>
          <p>someone</p>
        </div>
        <div className="right3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          nostrum deserunt veniam sapiente, magnam dolor eligendi
        </div>
      </div>
      <FollowersList />
    </div>
  );
};

export default RightSide;
