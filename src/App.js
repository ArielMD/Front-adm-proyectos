import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import ProjectState from "./context/projects/projectState";
import TaskState from "./context/task/taskState";

function App() {
  return (
    <ProjectState>
      <TaskState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/nuevaCuenta" component={Register}></Route>
            <Route exact path="/proyectos" component={Home}></Route>
          </Switch>
        </BrowserRouter>
      </TaskState>
    </ProjectState>
  );
}

export default App;
