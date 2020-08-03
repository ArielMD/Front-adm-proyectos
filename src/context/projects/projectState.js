import React, { useReducer } from "react";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { PROJECT_FORM } from "../../types";

const ProjectState = (props) => {
  const initialState = {
    projects: [
      {
        id: 1,
        nombre: "tarea 1",
      },
      {
        id: 2,
        nombre: "tarea 2",
      },
      {
        id: 3,
        nombre: "tarea 3",
      },
      {
        id: 4,
        nombre: "tarea 1",
      },
      {
        id: 5,
        nombre: "tarea 2",
      },
    ],
    form: false,
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);
  const showForm = () => {
    dispatch({
      type: PROJECT_FORM,
    });
  };

  return (
    <projectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        showForm,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
