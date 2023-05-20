import {Col, Container, Row, Nav, Navbar} from "react-bootstrap";
import AddDock from "../home/AddDock";
import Search from "../home/Search";

export default function NavMenu({searchResult, setSearchResult, setDocks}) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Row>
        <Col>
        <AddDock setDocks={setDocks} />
          </Col>
          <Col>
            <Navbar.Brand >BÜNDO</Navbar.Brand>
          </Col>
          <Col >
          <Search setSearchResult={setSearchResult} searchResult={searchResult}/>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
