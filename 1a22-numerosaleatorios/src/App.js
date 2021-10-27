import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  const [number, setNumber] = useState(Math.floor(Math.random() * 100 + 1))

  function randomNumber(){
    setNumber(Math.floor(Math.random() * 100 + 1))
  }

  return (
    <div className="App">
        <span>{number}</span>
        <button onClick={randomNumber}>Criar novo numero</button>
    </div>
  );
}

export default App;
