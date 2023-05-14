import { useState } from "react";
import Main from "./components/home/Main";
import Footer from "./components/home/Footer";
import NavMenu from "./components/NavBar";
import Maps from "./components/home/Maps";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

function App() {
  const [docks, setDocks] = useState("");

  return (
    <div className="App">
      <NavMenu />
      <header className="App-header">
        <Maps />
      </header>
      <main>
        <Main docks={docks} setDocks={setDocks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
