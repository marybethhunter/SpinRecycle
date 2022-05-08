import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Routing from '../routes';

const Body = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  position: absolute;
  height: 100%;
  width: 100%;
  background-color: pink;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  background-color: white;
`;

function App() {
  return (
    <Body>
      <Navigation />
      <Content>
        <Routing />
      </Content>
    </Body>
  );
}

export default App;
