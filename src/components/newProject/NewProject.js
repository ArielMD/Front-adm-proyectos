import React from "react";
import NewProjectStyled from "./newProjectStyled";
import iconProject from "../../assets/tareas.svg";
import { useForm } from "react-hook-form";

const NewProject = () => {
  const { errors, handleSubmit, register } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <NewProjectStyled>
      <button className="new button">Nuevo Proyecto</button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <label className="input">
            <img src={iconProject}></img>
            <input
              name="newProject"
              placeholder="Nombre del Proyecto"
              ref={register({ required: "Nombre del proyecto obligatorio" })}
            ></input>
          </label>
          {errors.newProject && <small>{errors.newProject.message}</small>}
        </div>
        <button type="submit" className="add button">
          Agregar Proyecto
        </button>
      </form>
    </NewProjectStyled>
  );
};

export default NewProject;
