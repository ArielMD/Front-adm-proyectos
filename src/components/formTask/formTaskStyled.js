import styled from "styled-components";

const FormTaskStyled = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-task {
    width: 50%;
  }
  .input-group {
    display: flex;
    flex-direction: column;
    justify-items: center;
    input {
      padding: 10px;
      margin: 10px 0px;
    }
    button {
      padding: 10px;
      margin: 10px 0px;
      background-color: var(--darkBlue);
      color: var(--white);
      border-radius: 5px;
    }
  }
`;

export default FormTaskStyled;
