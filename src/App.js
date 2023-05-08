import Main from './homeComponents/Main';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {

const [docks, setDocks] = useState([])

  return (
    <div className="App">
      <header className='App-header'>
        <h1>BÜNDO</h1>
        <Main docks={docks} setDocks={setDocks}/>
      </header>
    </div>
  );
}

export default App;
