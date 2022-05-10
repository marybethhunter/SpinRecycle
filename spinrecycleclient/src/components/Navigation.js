import React from 'react';
import styled from 'styled-components';
import NavIcon from './NavIcon';
import PropTypes from 'prop-types';

const NavContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0px;
  height: 100vh;
  border-right: 2px dotted black;

  background-color: gray;
`;

const NavContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 75px;

  border-top: 2px dotted black;
`;

const NavHeader = styled.div`
  font-size: 180%;
  white-space: nowrap;

  margin: 20px 0px;
`;

const NavLink = styled.a`
  font-size: 120%;
`;

export default function Navigation({expanded, setExpanded}) {
  return (
    <NavContainer>
      <NavIcon expanded={expanded} setExpanded={setExpanded} />
      <NavContent className={expanded ? "navContent-expanded" : "navContent-hidden"}>
        <NavHeader className={expanded ? "nav-expanded" : "nav-hidden"}>Vinyl Destination</NavHeader>
        <NavLink href='/home' className={expanded ? "nav-expanded" : "nav-hidden"}>Home</NavLink>
        <NavLink href='/shop' className={expanded ? "nav-expanded" : "nav-hidden"}>Shop</NavLink>
        <NavLink href='/cart' className={expanded ? "nav-expanded" : "nav-hidden"}>Cart</NavLink>
      </NavContent>
    </NavContainer>
  )
}

Navigation.propTypes = {
  expanded: PropTypes.bool.isRequired,
  setExpanded: PropTypes.func.isRequired
}
