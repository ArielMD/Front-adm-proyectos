import React from "react";
import TaskStyled from "./taskStyled";
const Task = ({ task }) => {
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
        <button className="button btn-delete">Eliminar</button>
      </div>
    </TaskStyled>
  );
};

export default Task;
