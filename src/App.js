import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Maps2 from "./components/home/Maps2";
import NavMenu from "./components/NavBar/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

function App() {
  const [docks, setDocks] = useState("");
  const [searchResult, setSearchResult] = useState();
  return (
    <div className="App">
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
