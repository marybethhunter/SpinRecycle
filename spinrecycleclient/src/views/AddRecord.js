import React from 'react';
import styled from 'styled-components';
import RecordForm from '../components/RecordForm';

const HomeStyle = styled.div`
  h1 {
    margin-bottom: 50px;
  }
  h3 {
    margin: 50px;
  }
  img {
    border: 1px solid black;
  }
  text-align: center;
`;


export default function Home() {
  return (
    <HomeStyle>
      <RecordForm />
    </HomeStyle>
  );
}
