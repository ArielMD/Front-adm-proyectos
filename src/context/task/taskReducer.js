import {
  PROJECT_TASKS,
  ADD_TASK,
  DELETE_TASK,
  CURRENT_TASK,
  UPDATE_STATE,
  UPDDATE_TASK,
  RESET_CURRENTTASK,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case PROJECT_TASKS:
      return {
        ...state,
        projectTask: state.tasks.filter(
          (task) => task.projectId === action.payload
        ),
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case CURRENT_TASK:
      return {
        ...state,
        currentTask: action.payload,
      };
    case UPDATE_STATE:
    case UPDDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
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
