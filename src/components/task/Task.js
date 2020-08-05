import React, { useContext } from "react";
import TaskStyled from "./taskStyled";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/task/taskContext";

const Task = ({ task }) => {
  const { deleteTask, getTask } = useContext(taskContext);
  const { project } = useContext(projectContext);

  const [currentProject] = project;

  const handleDelete = (taskId) => {
    deleteTask(taskId);
    getTask(currentProject.id);
  };

  return (
    <TaskStyled>
      <p>{task.tarea}</p>
      <div className="options">
        {task.state ? (
          <button className="btn-state btn-complete">Completo</button>
        ) : (
          <button className="btn-state btn-incomplete">Incompleto</button>
        )}

        <button className="button btn-edit">Editar</button>
        <button
          className="button btn-delete"
          onClick={() => handleDelete(task.id)}
        >
          Eliminar
        </button>
      </div>
    </TaskStyled>
  );
};

export default Task;
