import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 1em;
`;

const NavUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-left: 50%;
  display: flex;
`;

const NavLi = styled.li`
  margin-left: 5%;
  margin-top: 0px;
  padding: 1px 4px 1px 4px;
  list-style: none;
  line-height: 1.7;
  width: 100px;
  background-color: rgba(50, 50, 93, 0) ;
  border: 1px;
  border-radius: 3px;
  border: 1px solid rgba(50, 50, 93, 0);
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 0.7em;
    color: #333;
  }

`;
const Navigation = () => {
    return (
        <Nav>
            <NavUl>
                <NavLi>
                    <Link to="/">
                    Questionnare</Link>
                </NavLi>
                <NavLi>
                    <Link to="/moderatorpage">
                    Modes only</Link>
                </NavLi>
            </NavUl>
      
        </Nav>
    );
};

export default Navigation;