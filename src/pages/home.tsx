import React from "react";
import "../styles/home.css";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

const home = () => {
  return (
    <div className="homeContainer">
      <MainContent />
      <Sidebar />
    </div>
  );
};

export default home;
