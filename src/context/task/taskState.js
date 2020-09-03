import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import clientAxios from "../../config/axios";
import {
  PROJECT_TASKS,
  ADD_TASK,
  DELETE_TASK,
  CURRENT_TASK,
  UPDDATE_TASK,
  RESET_CURRENTTASK,
} from "../../types";

const TareaState = (props) => {
  const initialState = {
    projectTask: [],
    currentTask: null,
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const getTask = (project) => {
    clientAxios
      .get(`api/tasks/${project}`)
      .then((response) => {
        dispatch({
          type: PROJECT_TASKS,
          payload: response.data.tasks,
        });
      })
      .catch((error) => {
        console.log(error.response);
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

  const deleteTask = (taskId, projectId) => {
    console.log(taskId, projectId);
    clientAxios
      .delete(`api/tasks/${taskId}/${projectId}`)
      .then((response) => {
        dispatch({
          type: DELETE_TASK,
          payload: taskId,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const selectTask = (task) => {
    dispatch({
      type: CURRENT_TASK,
      payload: task,
    });
  };

  const updateTask = (task) => {
    console.log(task);

    clientAxios
      .put(`api/tasks/${task._id}`, task)
      .then((response) => {
        dispatch({
          type: UPDDATE_TASK,
          payload: task,
        });
      })
      .catch((error) => {
        console.log(error);
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
        resetCurrentTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TareaState;
