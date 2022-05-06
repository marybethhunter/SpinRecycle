import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Routing from '../routes';

const Body = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: white;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

function App() {
  return (
    <Body>
      <Navigation className="nav-expanded" />
      <Routing />
      {/* <Content>Content</Content> */}
    </Body>
  );
}

export default App;
