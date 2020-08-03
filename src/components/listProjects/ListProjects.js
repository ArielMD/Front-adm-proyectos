import React, { useContext } from "react";
import ListProjectsStyled from "./listProjectStyled";
import Project from "../project/Project";
import projectContext from "../../context/projects/projectContext";

const ListProjects = () => {
  const { projects } = useContext(projectContext);
  return (
    <ListProjectsStyled>
      <h1>Mis proyectos</h1>
      <ul>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </ul>
    </ListProjectsStyled>
  );
};

export default ListProjects;
