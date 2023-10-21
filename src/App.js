import Header from './components/Header';
import styled from 'styled-components';

const AppConteiner = styled.div`

  font-family: arial;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function App() {
  return (
    <AppConteiner>
      <Header/>
    </AppConteiner>
  );
}

export default App;