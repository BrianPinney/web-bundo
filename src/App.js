import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/home/Footer";
import NavMenu from "./components/NavBar";
import Maps from "./components/home/Maps";
import AddDock from "./components/home/AddDock"
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import RateDock from "./components/home/RateDock";

function App() {
  const [docks, setDocks] = useState("");
  const [searchResult, setSearchResult] = useState();
  return (
    <div className="App">
      <NavMenu setSearchResult={setSearchResult} searchResult={searchResult}/>
      <header className="App-header">
        <Maps searchResult={searchResult} setSearchResult={setSearchResult} />
       
      </header>
      
      <main>
        <Container>
          <Row>
            <Col>
              <Row className="add-bundock">
                <AddDock setDocks={setDocks} />
                <RateDock/>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>

      <footer>
        <Footer />
        </footer>
      
    </div>
  );
}

export default App;
