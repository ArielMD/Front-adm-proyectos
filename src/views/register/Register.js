import React, { useContext, useEffect } from "react";
import RegisterStyled from "./registerStyled";
import { useForm } from "react-hook-form";
import iconUser from "../../assets/usuario.svg";
import iconPadlock from "../../assets/candado.svg";
import AuthContext from "../../context/auth/authContext";

const Register = (props) => {
  const { registerUser, auth, message } = useContext(AuthContext);
  const { register, handleSubmit, errors, getValues } = useForm();

  useEffect(() => {
    if (auth) {
      props.history.push("/proyectos");
    }
  }, [auth, message, props.history]);

  const onSubmit = (values) => {
    const { name, email, password } = values;
    registerUser({ name, email, password });
  };

  const EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return (
    <RegisterStyled>
      <div className="container">
        <div className="wrapper">
          <h1>Obtener Cuenta</h1>
          <form className="form-user" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <label className="input">
                <img src={iconUser} alt=""></img>
                <input
                  type="text"
                  placeholder="Nombre de usuario"
                  name="name"
                  ref={register({
                    required: "Campo requerido",
                  })}
                ></input>
              </label>
              {errors.name && <small>{errors.name.message}</small>}
            </div>
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
            <div className="input-group">
              <label className="input">
                <img src={iconPadlock} alt=""></img>
                <input
                  type="password"
                  placeholder="confirmar password"
                  name="confirmPassword"
                  ref={register({
                    required: "Campo requerido",
                    validate: (value) =>
                      value === getValues("password") ||
                      "Las contraseñas no coinciden",
                  })}
                ></input>
              </label>
              {errors.confirmPassword && (
                <small>{errors.confirmPassword.message}</small>
              )}
            </div>
            <button>Entrar</button>
          </form>
        </div>
      </div>
    </RegisterStyled>
  );
};

export default Register;
