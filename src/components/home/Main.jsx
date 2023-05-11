import { Col, Container, Row } from "react-bootstrap";
import AddDock from "./AddDock.jsx"
import Search from "./Search.jsx";
import Footer from "./Footer.jsx";


export default function Main ({docks, setDocks}){

    return (
        <> 
        <Container>
            <Row>
                <Col className="bundocks">
                    <Search docks={docks} setDocks={setDocks}/>
                </Col>
                <Col>
                <Row className="add-bundock"><AddDock setDocks={setDocks}/></Row>
                </Col>
            </Row>
        </Container>
        
        </>
    )
}