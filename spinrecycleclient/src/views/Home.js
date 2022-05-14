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
      <h1>VINYL DESTINATION</h1>
      <img
        src="https://www.customwallpaper.net.au/wp-content/uploads/2015/12/AdobeStock_69158069-1024x685.jpeg"
        alt="Cluttered Couch"
        width="800"
        height="600"
      />
      <h3>VINYL FANTASY!</h3>
      <RecordForm />
    </HomeStyle>
  );
}
