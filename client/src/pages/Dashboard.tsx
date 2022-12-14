import React from "react";
import SideProfile from "../components/SideProfile";
import Upload from "../components/Upload";

const Dashboard = () => {
  return (
    <div className="section dashboard ">
      <SideProfile />
      <div className="wrapperPostss">
        <Upload />
      </div>
      <SideProfile />
    </div>
  );
};

export default Dashboard;
