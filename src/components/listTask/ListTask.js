import React, { useContext } from "react";
import ListTaskStyled from "./listTaskStyled";
import Task from "../task/Task";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/task/taskContext";

const ListTask = () => {
  const { project, deleteProject } = useContext(projectContext);
  const { task } = useContext(taskContext);

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
        {task.length === 0 ? (
          <li>No hay tareas</li>
        ) : (
          task.map((task) => <Task key={task.id} task={task} />)
        )}
      </ul>
      <button
        className="button"
        onClick={() => deleteProject(currentProyect._id)}
      >
        Eliminar proyecto
      </button>
    </ListTaskStyled>
  );
};

export default ListTask;
