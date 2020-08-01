import React from "react";
import SidebarStyled from "./sidebarStyled";
import NewProject from "../newProject/NewProject";
import ListProjects from "../listProjects/ListProjects";
const Sidebar = () => {
  return (
    <SidebarStyled>
      <h1 className="sidebar-title">MERN APP</h1>
      <div className="wrapper">
        <NewProject />
        <ListProjects />
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
