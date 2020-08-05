import React, { useContext } from "react";
import FormTaskStyled from "./formTaskStyled";
import { useForm } from "react-hook-form";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/task/taskContext";

const FormTask = () => {
  const { errors, handleSubmit, register } = useForm();
  const { project } = useContext(projectContext);
  const { addTask, getTask } = useContext(taskContext);

  if (!project) return null;

  const [currentProject] = project;

  const onSubmit = (task) => {
    task.projectId = currentProject.id;
    task.state = false;
    addTask(task);
    getTask(currentProject.id);
  };

  return (
    <FormTaskStyled>
      <form className="form-task" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <input
            name="tarea"
            type="text"
            placeholder="Nombre de la tarea"
            ref={register({ required: "Debes ingresar una tarea" })}
          ></input>
          {errors.tarea && <small>{errors.tarea.message}</small>}
          <button type="submit"> Agregar tarea </button>
        </div>
      </form>
    </FormTaskStyled>
  );
};

export default FormTask;
