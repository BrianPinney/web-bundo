import {Col, Container, Row, Nav, Navbar} from "react-bootstrap";
import AddDock from "../home/AddDock";
import Search from "../home/Search";

export default function NavMenu({searchResult, setSearchResult, setDocks}) {
  return (
    <Navbar bg="light">
      <Container fluid>
        <Row className="nv-rw">
        <Col>
        <Search setSearchResult={setSearchResult} searchResult={searchResult}/>
          </Col>
          <Col>
            <Navbar.Brand >BÜNDO</Navbar.Brand>
          </Col>
          <Col >
          <AddDock setDocks={setDocks}/>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
