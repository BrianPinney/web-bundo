import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Maps2 from "./components/home/Maps2";
import NavMenu from "./components/NavBar/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import Hero from "./components/home/Hero";

function App() {
  const [docks, setDocks] = useState("");
  const [searchResult, setSearchResult] = useState();
  return (
    <div className="App">
      <header>
        <Hero/>
      </header>
      <section>
      <NavMenu setSearchResult={setSearchResult} setDocks={setDocks} />
      </section>
      <main>
        <Container fluid className="content">
          <Row>
            <Col className="map-box">
                <Maps2 searchResult={searchResult} setSearchResult={setSearchResult} setDocks={setDocks}/> 
            </Col>
          </Row>
        </Container>
      </main>
      
    </div>
   
    
  );
}

export default App;
