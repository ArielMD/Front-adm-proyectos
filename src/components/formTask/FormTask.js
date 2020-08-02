import React from "react";
import FormTaskStyled from "./formTaskStyled";
const FormTask = () => {
  return (
    <FormTaskStyled>
      <form className="form-task">
        <div className="input-group">
          <input type="text" placeholder="Nombre de la tarea"></input>
          <button type="submit"> Agregar tarea </button>
        </div>
      </form>
    </FormTaskStyled>
  );
};

export default FormTask;
