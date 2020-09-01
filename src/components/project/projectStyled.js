import styled from "styled-components";

const ProjectStyled = styled.li`
  button {
    width: 100%;
    padding: 10px;
    text-align: left;
    background: var(--lighGrey);
    border: none;
    cursor: pointer;
    font-size: 1.2em;
    outline: none;
    :focus {
      background: var(--darkBlue);
      color: var(--white);
    }
  }
`;

export default ProjectStyled;
