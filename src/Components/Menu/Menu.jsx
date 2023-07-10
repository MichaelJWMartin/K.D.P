import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledMenu = styled.nav`
  display: flex;
  position: fixed;
  align-self: flex-start;
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.darkBackground};
  height: 100vh;
  min-width: 45%;
  padding: 2rem;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? `translateX(0%)` : `translateX(-100%)`};
  z-index: 2;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.lightYellow};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      font-size: 2.5rem;
    }
  }
`;

export const Menu = ({ open }) => {
    return (
      <StyledMenu open={open}>
        <Link to="/">
          Home
        </Link>
        <Link to="/">
          About me
        </Link>
        <Link to="/">
          Portfolio
        </Link>
        <Link to="/">
          Contact
        </Link>
      </StyledMenu>
    )
  }