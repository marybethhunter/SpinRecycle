import React, {useState} from 'react';
import styled from 'styled-components';
import NavIcon from './NavIcon';

const NavContainer = styled.div`
  position: relative;
  left: 0;
`;

const NavBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100vh;
  padding: 15px;

  background-color: lightblue;
`;

const Header = styled.div`
  font-size: 150%;
  white-space: nowrap;
`;

export default function Navigation() {
  const [expanded, setExpanded] = useState(true);

  return (
    <NavContainer>
      <NavIcon expanded={expanded} setExpanded={setExpanded} />
      <NavBody className={expanded ? "navBody-expanded" : "navBody-hidden"}>
        <Header className={expanded ? "nav-expanded" : "nav-hidden"}>Spin Recycle</Header>
        <a href='/home' className={expanded ? "nav-expanded" : "nav-hidden"}>Home</a>
        <a href='/shop' className={expanded ? "nav-expanded" : "nav-hidden"}>Shop</a>
        <a href='/cart' className={expanded ? "nav-expanded" : "nav-hidden"}>Cart</a>
      </NavBody>
    </NavContainer>
  )
}
