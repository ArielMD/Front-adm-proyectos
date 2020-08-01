import React from "react";
import ProjectStyled from "./projectStyled";
const Project = ({ project }) => {
  return (
    <ProjectStyled>
      <button type="button">{project.nombre}</button>
    </ProjectStyled>
  );
};

export default Project;
