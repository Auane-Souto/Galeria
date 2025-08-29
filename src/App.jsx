import Gallery from './components/Gallery';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  margin-top: 2rem;
  font-size: 2.5rem;
  color: #333;
`;

function App() {
  return (
    <>
      <Title>🚗 Galeria de Carros</Title>
      <Gallery />
    </>
  );
}

export default App;
