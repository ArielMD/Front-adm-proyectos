import React from "react";
import HomeStyled from "./homeStyled";
import Sidebar from "../../components/sidebar/Sidebar";
const Home = () => {
  return (
    <HomeStyled>
      <Sidebar />
      <h1 className="sidebar-title">Home</h1>
    </HomeStyled>
  );
};

export default Home;
