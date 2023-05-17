import { useState } from "react"
import {Form, Button, Row, Container, Col} from "react-bootstrap"

export default function AddDock ({setDocks}){
const [ lambda, setLambda] = useState('')
const [ phi, setPhi] = useState('')
const [city, setCity] = useState('')
const [dockName, setDockName] = useState('')


const handleAddDock = (e) => {
    e.preventDefault()

    fetch("https://bundo-bp.web.app/docks",{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({dockName, city, lambda, phi}),
})
.then((resp) => resp.json())
.then((data) => {
    if (data.message) {
        alert(data.message)
        return
    }
    setDocks(data)
})
    .catch(alert)
}
    return (

       <section>
        <Container >
            <Row>
                <Col sm={10} md={10} lg={10} xl={10}>
        <Form onSubmit={handleAddDock} className="d-flex">
        <Form.Group>
        <Form.Label htmlFor="dockName"> Dock Name 
                <Form.Control
                type="text"
                placeholder="Name your dock"
                value={dockName}
                onChange={(e) => {
                    setDockName(e.target.value)}} />
            </Form.Label>
            <Form.Label htmlFor="city"> 🚐 City 
                <Form.Control
                type="text"
                placeholder="Where"
                value={city}
                onChange={(e) => {
                    setCity(e.target.value)}} />
            </Form.Label>
            <Form.Label htmlFor="lambda"> Lambda
                <Form.Control
                    type="text" 
                    placeholder="Latitude" 
                    value={lambda} 
                    onChange={(e) => {
                        setLambda(e.target.value)}}/>
            </Form.Label>        
            <Form.Label htmlFor="phi"> Phi
                <Form.Control
                    type="text" 
                    placeholder="Longitude" 
                    value={phi}
                    onChange={(e) => {
                        setPhi(e.target.value)}}
                        />
            </Form.Label> 
            </Form.Group>
              <Button onClick={handleAddDock} variant="outline-success" text-align="center">Create</Button>
             
            </Form>
            </Col>
            </Row>
            </Container>
        </section>
    )
}