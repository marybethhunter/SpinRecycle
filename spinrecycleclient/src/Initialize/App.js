import Nav from '../components/Nav';
import styled from 'styled-components';
import Home from '../views/Home'
const Body = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  background-color: pink;
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
      <Nav className="nav-expanded" />
      <Content>
		  	<Home />
	  </Content>
	

    </Body>
  );
}

export default App;
