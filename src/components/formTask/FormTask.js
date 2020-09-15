import React, { useContext, useEffect } from "react";
import FormTaskStyled from "./formTaskStyled";
import { useForm } from "react-hook-form";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/task/taskContext";

const FormTask = () => {
  const { errors, handleSubmit, register, setValue } = useForm();
  const { project } = useContext(projectContext);
  const {
    addTask,
    getTask,
    currentTask,
    updateTask,
    resetCurrentTask,
  } = useContext(taskContext);

  useEffect(() => {
    if (currentTask) {
      setValue("name", currentTask.name);
    }
  }, [currentTask, setValue]);

  if (!project) return null;

  const [currentProject] = project;

  const onSubmit = (task, e) => {
    if (!currentTask) {
      task.project = currentProject._id;
      addTask(task);
    } else {
      task = { ...currentTask, name: task.name };
      updateTask(task);
      resetCurrentTask();
    }
    e.target.reset();
    getTask(currentProject.id);
  };

  return (
    <FormTaskStyled>
      <form className="form-task" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <input
            name="name"
            type="text"
            placeholder="nombre de la tarea"
            ref={register({
              required: "Debes ingresar una tarea",
              validate: (tarea) =>
                tarea.trim() !== "" || "El campo no puede estar vacio",
            })}
          ></input>
          {errors.name && <small>{errors.name.message}</small>}
          <button type="submit">
            {" "}
            {!currentTask ? "Agregar tarea" : "Editar tarea"}{" "}
          </button>
        </div>
      </form>
    </FormTaskStyled>
  );
};

export default FormTask;
