import {
  REGISTRY_SUCCESSFUL,
  REGISTRY_ERROR,
  GET_USER,
  LOGIN_SUCCESSFUL,
  LOGIN_ERROR,
  LOG_OUT,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
    case REGISTRY_SUCCESSFUL:
      localStorage.setItem("token", action.payload.token);
      return { ...state, auth: true, message: null };

    case GET_USER:
      return { ...state, user: action.payload };

    case LOGIN_ERROR:
    case REGISTRY_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        message: action.payload,
      };

    default:
      return state;
  }
};
