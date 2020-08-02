import styled from "styled-components";

const TaskStyled = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  p {
    margin: 0px;
    color: var(--darkBlue);
  }

  .options {
    display: flex;
  }

  .button {
    padding: 10px;
    margin: 5px;
  }

  .btn-edit {
    border: 1px solid var(--warning);
    color: var(--warning);
    background-color: var(--white);
    :hover {
      background-color: var(--warning);
      color: var(--white);
    }
  }

  .btn-delete {
    border: 1px solid var(--danger);
    color: var(--danger);
    background-color: var(--white);
    :hover {
      background-color: var(--danger);
      color: var(--white);
    }
  }

  .btn-state {
    border: none;
    margin: 10px;
    border-radius: 10px;
  }
  .btn-incomplete {
    background-color: #f8d7da;
    color: var(--danger);
  }
  .btn-complete {
    background-color: #d4edda;
    color: var(--success);
  }
`;

export default TaskStyled;
