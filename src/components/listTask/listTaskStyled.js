import styled from "styled-components";

const ListTaskStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--bg);

  ul {
    margin: 0px;
    padding-left: 0px;
    list-style: none;
    width: 80%;
    height: 400px;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }
  .button {
    padding: 10px;
    margin-right: 20px;
    border: none;
    background-color: var(--white);
    color: var(--darkBlue);
    align-self: flex-end;
  }
`;

export default ListTaskStyled;
