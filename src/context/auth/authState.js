import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTRY_SUCCESSFUL,
  REGISTRY_ERROR,
  GET_USER,
  LOGIN_SUCCESSFUL,
  LOGIN_ERROR,
  LOG_OUT,
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    auth: null,
    user: null,
    message: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <authContext.Provider
      value={{
        token: state.token,
        auth: state.auth,
        user: state.user,
        message: state.message,
      }}
    >
      {props.Children}
    </authContext.Provider>
  );
};

export default AuthState;
