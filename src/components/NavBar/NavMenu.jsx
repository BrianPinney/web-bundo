import {Col, Container, Row, Nav, Navbar} from "react-bootstrap";
import AddDock from "../home/AddDock";
import Search from "../home/Search";

export default function NavMenu({searchResult, setSearchResult, setDocks}) {
  return (
    <Navbar bg="light">
      <Container fluid>
        <Row className="nv-rw">
        <Col sm={10} md={4} lg={4}>
        <Search setSearchResult={setSearchResult} searchResult={searchResult}/>
          </Col>
          </Row>
          <Row className="add-dock">
          <Col sm={2} md={2} lg={2}>
          <AddDock  setDocks={setDocks}/>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
