import styled from "styled-components";

const NavbarStyled = styled.header`
  height: 80px;
  background-color: var(--navbar);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0px 20px;
    font-size: 1.4em;
  }

  nav {
    margin: 0px 20px;
    text-decoration: none;
    a:link,
    a:visited,
    a:active {
      text-decoration: none;
    }
  }
`;

export default NavbarStyled;
