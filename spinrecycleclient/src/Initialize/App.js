import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Routing from '../routes';
import {useState} from 'react';
import backgroundImg from '../images/background.png';

const Body = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  position: relative;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0px;
  height: 75px;
  background-color: #F9F6EE;
  border-bottom: 4px solid black;
  font-size: 35px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
`;

function App() {
  const [expanded, setExpanded] = useState(false);
  const [headerText, setHeaderText] = useState(window.location.pathname[1].toUpperCase() + window.location.pathname.substring(2));

  return (
    <Body>
      <Navigation expanded={expanded} setExpanded={setExpanded} setHeaderText={setHeaderText} />
      <Content>
        <Header>{headerText}</Header>
        <Routing />
      </Content>
    </Body>
  );
}

export default App;
