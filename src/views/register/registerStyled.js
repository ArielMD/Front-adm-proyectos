import styled from "styled-components";

const RegisterStyled = styled.div`
  display: flex;
  background: linear-gradient(
    -45deg,
    var(--black) 5%,
    var(--grey),
    var(--black) 95%
  );
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;

  .container {
    text-align: center;
    background: white;
    width: 600px;
    height: auto;
    background-color: var(--darkGrey);
    border-radius: 5px;
    display: flex;
    justify-content: center;
  }

  .wrapper {
    margin: 30px;
    width: 60%;
  }

  .logo {
    width: 150px;
    height: 150px;
  }

  .form-user {
    display: flex;
    flex-direction: column;

    button {
      padding: 10px;
      margin-top: 5px;
      background-color: var(--ligthGrey);
    }
  }

  .input-group {
    display: flex;
    flex-direction: column;
    margin: 0px 0px 20px;
    small {
      text-align: left;
      color: var(--red);
    }
  }

  .input {
    display: inline-flex;
    background-color: var(--black);
    padding: 10px;
    input {
      width: 100%;
      background-color: var(--black);
      border: none;
      padding: 10px;
      color: var(--white);
    }
    img {
      width: 30px;
      height: 30px;
      padding-right: 10px;
    }
  }

  @media screen and (max-width: 576px) {
    .logo {
      width: 100px;
      height: 100px;
    }
    .container {
      width: 400px;
    }
    .wrapper {
      transform: translateY(-50px);
      width: 80%;
    }
  }
`;

export default RegisterStyled;
