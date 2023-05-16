import {Col, Container, Row, Nav, Navbar} from "react-bootstrap";
import Search from "../home/Search";

export default function NavMenu({docks, setDocks}) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Row>
          <Col >
          <Search docks={docks} setDocks={setDocks} />
          </Col>
          <Col>
            <Navbar.Brand>BÜNDO</Navbar.Brand>
          </Col>
          <Col>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">About</Nav.Link>
                <Nav.Link href="#action2">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
