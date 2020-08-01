import React from "react";
import ListProjectsStyled from "./listProjectStyled";
import Project from "../project/Project";

const ListProjects = () => {
  const test = [
    {
      nombre: "tarea 1",
    },
    {
      nombre: "tarea 2",
    },
    {
      nombre: "tarea 3",
    },
    {
      nombre: "tarea 1",
    },
    {
      nombre: "tarea 2",
    },
  ];
  return (
    <ListProjectsStyled>
      <h1>Mis proyectos</h1>
      <ul>
        {test.map((project) => (
          <Project project={project} />
        ))}
      </ul>
    </ListProjectsStyled>
  );
};

export default ListProjects;
