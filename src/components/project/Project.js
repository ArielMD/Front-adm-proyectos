import React, { useContext } from "react";
import ProjectStyled from "./projectStyled";
import projectContext from "../../context/projects/projectContext";

const Project = ({ project }) => {
  const { currentProject } = useContext(projectContext);

  return (
    <ProjectStyled>
      <button type="button" onClick={() => currentProject(project.id)}>
        {project.name}
      </button>
    </ProjectStyled>
  );
};

export default Project;
