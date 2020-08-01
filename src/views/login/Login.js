import React from "react";
import LoginStyled from "./loginStyled";
import { useForm } from "react-hook-form";
import iconUser from "../../assets/usuario.svg";
import iconPadlock from "../../assets/candado.svg";
import logoUser from "../../assets/logoUsuario.svg";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  const EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return (
    <LoginStyled>
      <div className="container">
        <div className="wrapper">
          <img className="logo" src={logoUser}></img>
          <h1>Iniciar Sessión</h1>
          <form className="form-user" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <label className="input">
                <img src={iconUser}></img>
                <input
                  type="text"
                  placeholder="Nombre de usuario"
                  name="username"
                  ref={register({
                    required: "Campo requerido",
                    pattern: {
                      value: EMAIL,
                      message: "Debes ingresar un correo",
                    },
                  })}
                ></input>
              </label>
              {errors.username && <small>{errors.username.message}</small>}
            </div>
            <div className="input-group">
              <label className="input">
                <img src={iconPadlock}></img>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  ref={register({
                    required: "Campo requerido",
                  })}
                ></input>
              </label>
              {errors.password && <small>{errors.password.message}</small>}
            </div>
            <button className>Entrar</button>
          </form>
        </div>
      </div>
    </LoginStyled>
  );
};

export default Login;
