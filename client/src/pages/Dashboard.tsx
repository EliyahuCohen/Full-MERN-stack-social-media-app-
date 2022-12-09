import React from "react";
import SideProfile from "../components/SideProfile";
import Upload from "../components/Upload";

const Dashboard = () => {
  return (
    <div className="section dashboard">
      <SideProfile />
      <div style={{ flex: "0.6" }}>
        <Upload />
      </div>
      <SideProfile />
    </div>
  );
};

export default Dashboard;
