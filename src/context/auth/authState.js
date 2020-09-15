import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import clientAxios from "../../config/axios";
import tokenAuth from "../../config/token";
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
    loading: true,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const registerUser = (data) => {
    clientAxios
      .post("api/users", data)
      .then((response) => {
        console.log(response.data);

        dispatch({
          type: REGISTRY_SUCCESSFUL,
          payload: response.data,
        });
        authenticatedUser();
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({
          type: REGISTRY_ERROR,
          payload: error.response.data,
        });
      });
  };

  const authenticatedUser = () => {
    const token = localStorage.getItem("token");

    if (token) {
      tokenAuth(token);
    }
    clientAxios
      .get("api/auth")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_USER,
          payload: response.data.user,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const login = (data) => {
    clientAxios
      .post("api/auth/login", data)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: LOGIN_SUCCESSFUL,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({
          type: LOGIN_ERROR,
          payload: error.response.data,
        });
      });
  };

  const logout = () => {
    dispatch({
      type: LOG_OUT,
    });
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        auth: state.auth,
        user: state.user,
        message: state.message,
        loading: state.loading,
        authenticatedUser,
        registerUser,
        login,
        logout,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
