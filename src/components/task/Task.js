import React from "react";
import TaskStyled from "./taskStyled";
const Task = ({ task }) => {
  return (
    <TaskStyled>
      <p>{task.tarea}</p>
      <div className="options">
        {task.state ? (
          <button class="btn-state btn-complete">Completo</button>
        ) : (
          <button class="btn-state btn-incomplete">Incompleto</button>
        )}

        <button class="button btn-edit">Editar</button>
        <button class="button btn-delete">Eliminar</button>
      </div>
    </TaskStyled>
  );
};

export default Task;
