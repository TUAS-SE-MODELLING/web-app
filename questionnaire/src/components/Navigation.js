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
  padding: 3px;
  list-style: none;
  line-height: 1.7;
  width: 100px;
  background-color: white;
  border: 1px;
  border-radius: 3px;
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 0.7em;
    color: #333;
  }

  a:visited {
    color: #333;
  }

  a:hover,
  a:focus {
    color: white;
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
                    <Link to="/mynotes">
                    Modes only</Link>
                </NavLi>
            </NavUl>
      
        </Nav>
    );
};

export default Navigation;