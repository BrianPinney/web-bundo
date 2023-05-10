import Main from "./components/home/Main";
// import Gallery from "./components/Gallery";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

function App() {
  const [docks, setDocks] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>BÜNDO</h1>
        <Main docks={docks} setDocks={setDocks} />
      </header>

      {/* <h2>hi hi</h2>
      <Gallery /> */}
    </div>
  );
}

export default App;
