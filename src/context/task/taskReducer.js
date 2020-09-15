import {
  PROJECT_TASKS,
  ADD_TASK,
  DELETE_TASK,
  CURRENT_TASK,
  UPDDATE_TASK,
  RESET_CURRENTTASK,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case PROJECT_TASKS:
      return {
        ...state,
        projectTask: action.payload,
      };

    case ADD_TASK:
      return {
        ...state,
        projectTask: [...state.projectTask, action.payload],
      };

    case DELETE_TASK:
      return {
        ...state,
        projectTask: state.projectTask.filter(
          (task) => task._id !== action.payload
        ),
      };

    case CURRENT_TASK:
      return {
        ...state,
        currentTask: action.payload,
      };
    case UPDDATE_TASK:
      return {
        ...state,
        projectTask: state.projectTask.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
      };
    case RESET_CURRENTTASK:
      return {
        ...state,
        currentTask: null,
      };
    default: {
      return state;
    }
  }
};
