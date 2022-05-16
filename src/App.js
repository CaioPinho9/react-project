import logo from './favicon.ico';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld nome="Caio" adjetivo="amazing"/>
        
      </header>
    </div>
  );
}

export default App;
