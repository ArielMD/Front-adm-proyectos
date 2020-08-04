import React, { useContext } from "react";
import ListTaskStyled from "./listTaskStyled";
import Task from "../task/Task";
import projectContext from "../../context/projects/projectContext";

const tareas = [
  { tarea: "tarea 1", state: false },
  { tarea: "tarea 2", state: true },
  { tarea: "tarea 3", state: true },
];

const ListTask = () => {
  const { project, deleteProject } = useContext(projectContext);

  if (!project) {
    return (
      <ListTaskStyled>
        <h1>Seleccione un proyecto</h1>
      </ListTaskStyled>
    );
  }

  const [currentProyect] = project;

  return (
    <ListTaskStyled>
      <h1>Tareas de {currentProyect.name} </h1>

      <ul>
        {tareas.length === 0 ? (
          <li>No hay tareas</li>
        ) : (
          tareas.map((task) => <Task task={task} />)
        )}
      </ul>
      <button
        className="button"
        onClick={() => deleteProject(currentProyect.id)}
      >
        Eliminar proyecto
      </button>
    </ListTaskStyled>
  );
};

export default ListTask;
