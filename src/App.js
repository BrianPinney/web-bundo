import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Maps2 from "./components/home/Maps2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import Hero from "./components/home/Hero";
import AddDock from "./components/home/AddDock";
import Search from "./components/home/Search";

function App() {
  const [docks, setDocks] = useState("");
  const [searchResult, setSearchResult] = useState();
  return (
    <div className="App">
      <header>
        <Hero/>
      </header>
      <section>
        <Container>
          <Row>
            <Col className="search-bar">
              <Search searchResult={searchResult} setSearchResult={setSearchResult}/>
              </Col>
              <Col className="add-button">
              <AddDock setDocks={setDocks}/> 
            </Col>
          </Row>
        </Container> 
      </section>
                       
      <main>
        <Container fluid className="content">
              <Row >
                <Col >
                <Maps2 searchResult={searchResult} setSearchResult={setSearchResult} setDocks={setDocks}/> 
            </Col>
          </Row>
        </Container>
      </main>
      
    </div>
   
    
  );
}

export default App;
