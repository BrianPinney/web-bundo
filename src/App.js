import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/home/Footer";
import Maps2 from "./components/home/Maps2";
import AddDock from "./components/home/AddDock"
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import NavMenu from "./components/NavBar/NavMenu";

function App() {
  const [docks, setDocks] = useState("");
  const [searchResult, setSearchResult] = useState();
  return (
    <div className="App">
      <section>
      <NavMenu setSearchResult={setSearchResult} setDocks={setDocks} />
      </section>
      <main>
        <Container>
          <Row>
            <Col className="map-box">
              <Maps2 searchResult={searchResult} setSearchResult={setSearchResult} setDocks={setDocks}/>
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
