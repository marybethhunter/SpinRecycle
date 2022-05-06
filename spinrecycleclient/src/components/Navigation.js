import React, {useState} from 'react';
import styled from 'styled-components';
import NavIcon from './NavIcon';

const NavContainer = styled.div`
  position: absolute;
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
`;

export default function Navigation() {
  const [expanded, setExpanded] = useState(true);

  return (
    <NavContainer>
      <NavIcon />
      <NavBody className={expanded ? "" : ""}>
        <Header>Spin Recycle</Header>
        <a href='/home'>Home</a>
        <a href='/shop'>Shop</a>
        <a href='/cart'>Cart</a>
      </NavBody>
    </NavContainer>
  )
}
