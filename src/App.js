import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import ProjectState from "./context/projects/projectState";
import TaskState from "./context/task/taskState";
import AuthState from "./context/auth/authState";
import tokenAuth from "./config/token";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";

const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <ProjectState>
      <TaskState>
        <AuthState>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login}></Route>
              <Route exact path="/nuevaCuenta" component={Register}></Route>
              <ProtectedRoutes
                exact
                path="/proyectos"
                component={Home}
              ></ProtectedRoutes>
            </Switch>
          </BrowserRouter>
        </AuthState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
