import React, {useState} from 'react';
import styled from 'styled-components';
import NavIcon from './NavIcon';

const NavContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0px;
  padding: 80px 0px;

  border-right: 2px dotted black;


  background-color: lightblue;
`;

const NavContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

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

export default function Navigation() {
  const [expanded, setExpanded] = useState(false);

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
