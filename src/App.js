import './App.css';
import Logo from './components/Logo'
import OpcoesHeader from './components/OpcoesHeader';
import IconesHeader from './components/IconesHeader';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <IconesHeader></IconesHeader>
      </header>
    </div>
  );
}

export default App;
