import React from "react";
import RightSide from "../components/RightSide";
import SideProfile from "../components/SideProfile";
import Upload from "../components/Upload";

const Dashboard = () => {
  return (
    <div className="section dashboard ">
      <SideProfile />
      <div className="wrapperPostss">
        <Upload />
      </div>
      <RightSide />
    </div>
  );
};

export default Dashboard;
