import React from "react";
import styled from "styled-components"; 
import Logo from "../../Images/Logo_soccerLeague.png";

// Feito


const Nav = styled.nav`
  padding: 15px;
  background-color: #333;
  color: #fff;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Menu_logo = styled.a`
  margin: 0 30px 0 10px;
`;

const Logo_soccerLeague = styled.img`
  width: 35px;
  height: 45px;
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const MenuItem = styled.li`
  margin: 0 10px;
`;

const MenuLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 17px;

  &:hover {
    background-color: #555;
  }
`;

class BarraMenu extends React.Component {
  render() {
    return (
      <Nav>
          <Menu_logo href="/">
            <Logo_soccerLeague src={Logo} alt="Logo" />
          </Menu_logo>
        <MenuList>
          <MenuItem>
            <MenuLink href="/">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/CadastroTeam">Cadastrar Time</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/ExcluirTeam">Excluir Times</MenuLink>
          </MenuItem>
        </MenuList>
      </Nav>
    );
  }
}

export default BarraMenu;