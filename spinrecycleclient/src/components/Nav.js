import React from 'react';
import styled from 'styled-components';

const BarBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 250px;

  background-color: lightblue;
`;

export default function Nav() {
  return (
    <BarBody>Navbar</BarBody>
  )
}
