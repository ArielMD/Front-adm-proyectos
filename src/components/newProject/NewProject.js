import React, { useContext } from "react";
import NewProjectStyled from "./newProjectStyled";
import iconProject from "../../assets/tareas.svg";
import { useForm } from "react-hook-form";
import projectContext from "../../context/projects/projectContext";

const NewProject = () => {
  const { errors, handleSubmit, register } = useForm();
  const { form, showForm } = useContext(projectContext);

  const onSubmit = (values) => {
    console.log(values);
  };

  const onClick = () => {
    showForm();
  };

  return (
    <NewProjectStyled>
      <button className="new button" onClick={onClick}>
        Nuevo Proyecto
      </button>

      {form && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label className="input">
              <img src={iconProject} alt=""></img>
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
      )}
    </NewProjectStyled>
  );
};

export default NewProject;
