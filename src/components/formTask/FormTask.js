import React from "react";
import FormTaskStyled from "./formTaskStyled";
import { useForm } from "react-hook-form";
const FormTask = () => {
  const { errors, handleSubmit, register } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <FormTaskStyled>
      <form className="form-task" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <input
            name="newTask"
            type="text"
            placeholder="Nombre de la tarea"
            ref={register({ required: "Debes ingresar una tarea" })}
          ></input>
          {errors.newTask && <small>{errors.newTask.message}</small>}
          <button type="submit"> Agregar tarea </button>
        </div>
      </form>
    </FormTaskStyled>
  );
};

export default FormTask;
