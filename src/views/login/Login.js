import React, { useContext, useEffect } from "react";
import LoginStyled from "./loginStyled";
import { useForm } from "react-hook-form";
import iconUser from "../../assets/usuario.svg";
import iconPadlock from "../../assets/candado.svg";
import logoUser from "../../assets/logoUsuario.svg";
import AuthContext from "../../context/auth/authContext";

const Login = (props) => {
  const { login, auth, message } = useContext(AuthContext);
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    if (auth) {
      props.history.push("/proyectos");
    }
  }, [auth, message, props.history]);

  const onSubmit = (values) => {
    const { email, password } = values;
    login({ email, password });
  };

  const EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return (
    <LoginStyled>
      <div className="container">
        <div className="wrapper">
          <img className="logo" src={logoUser} alt=""></img>
          <h1>Iniciar Sessión</h1>
          <form className="form-user" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <label className="input">
                <img src={iconUser} alt=""></img>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  ref={register({
                    required: "Campo requerido",
                    pattern: {
                      value: EMAIL,
                      message: "Debes ingresar un correo",
                    },
                  })}
                ></input>
              </label>
              {errors.email && <small>{errors.email.message}</small>}
            </div>
            <div className="input-group">
              <label className="input">
                <img src={iconPadlock} alt=""></img>
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
            <button>Entrar</button>
          </form>
        </div>
      </div>
    </LoginStyled>
  );
};

export default Login;
