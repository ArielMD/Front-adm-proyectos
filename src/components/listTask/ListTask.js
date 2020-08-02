import React from "react";
import ListTaskStyled from "./listTaskStyled";
import Task from "../task/Task";

const tareas = [
  { tarea: "tarea 1", state: false },
  { tarea: "tarea 2", state: true },
  { tarea: "tarea 3", state: true },
];
const ListTask = () => {
  return (
    <ListTaskStyled>
      <h1>Lista de Tareas </h1>

      <ul>
        {tareas.length === 0 ? (
          <li>No hay tareas</li>
        ) : (
          tareas.map((task) => <Task task={task} />)
        )}
      </ul>
      <button className="button">Eliminar proyecto</button>
    </ListTaskStyled>
  );
};

export default ListTask;
