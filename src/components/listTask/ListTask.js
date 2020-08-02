import React from "react";
import ListTaskStyled from "./listTaskStyled";
import Task from "../task/Task";

const tareas = [
  { tarea: "tarea 1" },
  { tarea: "tarea 2" },
  { tarea: "tarea 3" },
];
const ListTask = () => {
  return (
    <ListTaskStyled>
      <h1>Lista de Tareas </h1>
      {tareas.length === 0 ? (
        <ul>No hay tareas</ul>
      ) : (
        tareas.map((task) => <Task />)
      )}
    </ListTaskStyled>
  );
};

export default ListTask;
