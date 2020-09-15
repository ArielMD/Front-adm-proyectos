import styled from "styled-components";

const ListProjectsStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  h1 {
    width: 100%;
    text-align: center;
  }
  ul {
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding-left: 0px;
  }
`;

export default ListProjectsStyled;
