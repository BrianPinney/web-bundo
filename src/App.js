import Main from "./components/home/Main";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import NavMenu from "./components/NavBar/NavMenu";

function App() {
  const [docks, setDocks] = useState([]);

  return (
    <div className="App"> 
    <NavMenu />
      <header className="App-header">
        <Main docks={docks} setDocks={setDocks} />
      </header>
    </div>
  );
}

export default App;
