import React from "react";
import SideProfile from "../components/SideProfile";

const Dashboard = () => {
  return (
    <div className="section dashboard">
      <SideProfile />
      <div style={{ flex: "0.6" }}>
        <h1>Main</h1>
      </div>
      <SideProfile />
    </div>
  );
};

export default Dashboard;
