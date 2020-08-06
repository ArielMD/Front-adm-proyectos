import React, { useContext } from "react";
import TaskStyled from "./taskStyled";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/task/taskContext";

const Task = ({ task }) => {
  const { deleteTask, getTask, selectTask, updateState } = useContext(
    taskContext
  );
  const { project } = useContext(projectContext);

  const [currentProject] = project;

  const handleDelete = (taskId) => {
    deleteTask(taskId);
    getTask(currentProject.id);
  };

  const handleEdit = (task) => {
    selectTask(task);
  };

  const changeState = (task) => {
    task.state = !task.state;
    updateState(task);
  };

  return (
    <TaskStyled>
      <p>{task.tarea}</p>
      <div className="options">
        {task.state ? (
          <button
            className="btn-state btn-complete"
            onClick={() => changeState(task)}
          >
            Completo
          </button>
        ) : (
          <button
            className="btn-state btn-incomplete"
            onClick={() => changeState(task)}
          >
            Incompleto
          </button>
        )}

        <button className="button btn-edit" onClick={() => handleEdit(task)}>
          Editar
        </button>
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
