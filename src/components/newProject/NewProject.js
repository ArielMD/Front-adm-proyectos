import React, { useContext } from "react";
import NewProjectStyled from "./newProjectStyled";
import iconProject from "../../assets/tareas.svg";
import { useForm } from "react-hook-form";
import projectContext from "../../context/projects/projectContext";

const NewProject = () => {
  const { errors, handleSubmit, register } = useForm();
  const { form, showForm, addProject } = useContext(projectContext);

  const onSubmit = (values, e) => {
    addProject(values);
    e.target.reset();
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
                name="name"
                placeholder="Nombre del Proyecto"
                ref={register({
                  required: "Nombre del proyecto obligatorio",
                  validate: (name) =>
                    name.trim() !== "" || "El campo no pueden estar vacios",
                })}
              ></input>
            </label>
            {errors.name && <small>{errors.name.message}</small>}
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
