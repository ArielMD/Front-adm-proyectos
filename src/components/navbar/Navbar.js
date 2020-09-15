import React, { useContext } from "react";
import NavbarStyled from "./navbarStyled";
import authContext from "../../context/auth/authContext";

const Navbar = () => {
  const { user, logout } = useContext(authContext);
  return (
    <NavbarStyled>
      <p>
        Hola <strong>{user && user.name}</strong>
      </p>
      <nav>
        <button className="log-out" onClick={() => logout()}>
          Cerrar sessión
        </button>
      </nav>
    </NavbarStyled>
  );
};

export default Navbar;
