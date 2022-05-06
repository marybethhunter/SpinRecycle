import React from 'react';
import styled from 'styled-components';

const BarBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100vh;
  width: 250px;
  padding: 15px;

  background-color: lightblue;
`;

const Header = styled.div`
  font-size: 150%;
`;

export default function Navigation() {
  return (
    <BarBody>
      <Header>Spin Recycle</Header>
      <a href='/home'>Home</a>
      <a href='/shop'>Shop</a>
      <a href='/cart'>Cart</a>
    </BarBody>
  )
}
