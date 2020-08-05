import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import { PROJECT_TASKS, ADD_TASK, DELETE_TASK } from "../../types";

const TareaState = (props) => {
  const initialState = {
    tasks: [
      { id: 1, tarea: "tarea 1", state: false, projectId: 1 },
      { id: 2, tarea: "tarea 2", state: true, projectId: 2 },
      { id: 3, tarea: "tarea 3", state: true, projectId: 3 },
      { id: 4, tarea: "tarea 1", state: false, projectId: 1 },
      { id: 5, tarea: "tarea 2", state: true, projectId: 2 },
      { id: 6, tarea: "tarea 3", state: true, projectId: 3 },
      { id: 7, tarea: "tarea 1", state: false, projectId: 1 },
      { id: 8, tarea: "tarea 2", state: true, projectId: 2 },
      { id: 9, tarea: "tarea 3", state: true, projectId: 3 },
      { id: 10, tarea: "tarea 1", state: false, projectId: 1 },
      { id: 11, tarea: "tarea 2", state: true, projectId: 2 },
      { id: 12, tarea: "tarea 3", state: true, projectId: 3 },
    ],
    projectTask: null,
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const getTask = (projectId) => {
    dispatch({
      type: PROJECT_TASKS,
      payload: projectId,
    });
  };

  const addTask = (task) => {
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  const deleteTask = (taskId) => {
    dispatch({
      type: DELETE_TASK,
      payload: taskId,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        task: state.projectTask,
        getTask,
        addTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TareaState;
