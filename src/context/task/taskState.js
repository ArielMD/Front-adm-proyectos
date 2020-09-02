import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import clientAxios from "../../config/axios";
import {
  PROJECT_TASKS,
  ADD_TASK,
  DELETE_TASK,
  CURRENT_TASK,
  UPDATE_STATE,
  UPDDATE_TASK,
  RESET_CURRENTTASK,
} from "../../types";

const TareaState = (props) => {
  const initialState = {
    projectTask: [],
    currentTask: null,
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const getTask = (projectId) => {
    dispatch({
      type: PROJECT_TASKS,
      payload: projectId,
    });
  };

  const addTask = (task) => {
    console.log(task);
    clientAxios
      .post("api/tasks", task)
      .then((response) => {
        dispatch({
          type: ADD_TASK,
          payload: response.data.newTask,
        });
      })
      .catch((error) => {});
  };

  const deleteTask = (taskId) => {
    dispatch({
      type: DELETE_TASK,
      payload: taskId,
    });
  };

  const selectTask = (task) => {
    dispatch({
      type: CURRENT_TASK,
      payload: task,
    });
  };

  const updateTask = (task) => {
    dispatch({
      type: UPDDATE_TASK,
      payload: task,
    });
  };

  const updateState = (task) => {
    dispatch({
      type: UPDATE_STATE,
      payload: task,
    });
  };

  const resetCurrentTask = () => {
    dispatch({
      type: RESET_CURRENTTASK,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        task: state.projectTask,
        currentTask: state.currentTask,
        getTask,
        addTask,
        deleteTask,
        selectTask,
        updateTask,
        updateState,
        resetCurrentTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TareaState;
