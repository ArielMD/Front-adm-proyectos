import React, { useReducer } from "react";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { v4 } from "uuid";
import {
  PROJECT_FORM,
  GET_PROJECT,
  ADD_PROJECT,
  CURRENT_PROJECT,
  DELETE_PROJECT,
} from "../../types";

const ProjectState = (props) => {
  const projects = [
    {
      id: 1,
      name: "tarea 1",
    },
    {
      id: 2,
      name: "tarea 2",
    },
    {
      id: 3,
      name: "tarea 3",
    },
    {
      id: 4,
      name: "tarea 1",
    },
    {
      id: 5,
      name: "tarea 2",
    },
  ];

  const initialState = {
    projects: [],
    form: false,
    project: null,
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const showForm = () => {
    dispatch({
      type: PROJECT_FORM,
    });
  };

  const getProjects = () => {
    dispatch({
      type: GET_PROJECT,
      payload: projects,
    });
  };

  const addProject = (project) => {
    project.id = v4();

    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  const currentProject = (projectId) => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: projectId,
    });
  };

  const deleteProject = (projectId) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId,
    });
  };

  return (
    <projectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        project: state.project,
        showForm,
        getProjects,
        addProject,
        currentProject,
        deleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
