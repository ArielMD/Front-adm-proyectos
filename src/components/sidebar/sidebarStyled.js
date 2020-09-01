import styled from "styled-components";

const SidebarStyled = styled.aside`
  background-color: var(--ligthGrey);
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .sidebar-title {
    display: flex;
    height: 80px;
    margin-top: 0px;
    color: var(--white);
    background: var(--darkGrey);
    align-items: center;
    justify-content: center;
  }
  .wrapper {
    padding: 30px;
  }
`;

export default SidebarStyled;
