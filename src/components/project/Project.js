import React, { useContext } from "react";
import ProjectStyled from "./projectStyled";
import projectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/task/taskContext";

const Project = ({ project }) => {
  const { currentProject } = useContext(projectContext);
  const { getTask } = useContext(TaskContext);

  const selectProject = (projectId) => {
    currentProject(projectId);
    getTask(projectId);
  };

  return (
    <ProjectStyled>
      <button type="button" onClick={() => selectProject(project._id)}>
        {project.name}
      </button>
    </ProjectStyled>
  );
};

export default Project;
