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
      <main>
        <Container fluid className="content">
              <Row >
                <Col >
                  <Search searchResult={searchResult} setSearchResult={setSearchResult}/>
                  <AddDock setDocks={setDocks}/>       
                <Maps2 searchResult={searchResult} setSearchResult={setSearchResult} setDocks={setDocks}/> 
            </Col>
          </Row>
        </Container>
      </main>
      
    </div>
   
    
  );
}

export default App;
