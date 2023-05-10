import { Col, Container, Row } from "react-bootstrap";
import AddDock from "./AddDock";
// import AllDocks from "./AllDocks";
import Search from "./Search";
import Footer from "./Footer";




export default function Main ({docks, setDocks}){

    return (
        <> 
        <Container>
            <Row>
                <Col className="bundocks">
                    <Search docks={docks} setDocks={setDocks}/>
                {/* <AllDocks docks={docks} setDocks={setDocks}/> */}
                </Col>
                <Col>
                <Row className="find-bundocks"></Row>
                <Row className="add-bundock"><AddDock setDocks={setDocks}/></Row>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    )
}