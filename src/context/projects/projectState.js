import React, { useReducer } from "react";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import clientAXios from "../../config/axios";

import {
  PROJECT_FORM,
  GET_PROJECT,
  ADD_PROJECT,
  CURRENT_PROJECT,
  DELETE_PROJECT,
} from "../../types";

const ProjectState = (props) => {
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
    clientAXios
      .get("api/project")
      .then((response) => {
        dispatch({
          type: GET_PROJECT,
          payload: response.data.projects,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addProject = (project) => {
    clientAXios
      .post("api/project", project)
      .then((response) => {
        console.log(response);
        dispatch({
          type: ADD_PROJECT,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const currentProject = (projectId) => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: projectId,
    });
  };

  const deleteProject = (projectId) => {
    clientAXios
      .delete(`api/project/${projectId}`)
      .then((response) => {
        dispatch({
          type: DELETE_PROJECT,
          payload: projectId,
        });
      })
      .catch((error) => {
        console.log(error);
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
