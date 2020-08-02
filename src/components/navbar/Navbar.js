import React from "react";
import NavbarStyled from "./navbarStyled";
const Navbar = () => {
  return (
    <NavbarStyled>
      <p>
        Hola<strong> Ariel</strong>
      </p>
      <nav>
        <a href="#?">Cerrar Session</a>
      </nav>
    </NavbarStyled>
  );
};

export default Navbar;
