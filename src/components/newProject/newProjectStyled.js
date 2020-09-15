import styled from "styled-components";

const NewProjectStyled = styled.div`
  display: flex;
  flex-direction: column;

  .input-group {
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    small {
      color: var(--red);
    }
  }

  .input {
    display: inline-flex;
    text-align: center;
    background-color: var(--white);
    border-radius: 2px;
    padding: 5px;
    img {
      width: 30px;
      height: 30px;
      padding-right: 10px;
    }
    input {
      width: 100%;
      padding: 10px;
      border: none;
      border-bottom: 2px solid black;
    }
  }
  .button {
    width: 100%;
    background-color: var(--darkBlue);
    color: var(--white);
    padding: 10px;
    border-radius: 5px;
  }

  .new {
    margin-bottom: 40px;
  }
`;

export default NewProjectStyled;
