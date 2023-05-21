import { Col, Container, Row } from "react-bootstrap";

export default function Hero(){
  return (
    <>
    <Container className="hero-bg" fluid>
    <Row>
    <Col>
    <div className="van">
      <img  src="/images/16-bit-van2.png"/>
    </div>
    </Col>
    </Row>
    </Container>
    </>
  )
}