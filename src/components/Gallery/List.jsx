import { Container, Row } from "react-bootstrap";
import data from "./data.json"
import Panel from "./Panel"

export default function List(){

return (
<Container>
    <Row>
       { data.map(
        (element) =>
            (
            element
                ? <Panel key={element.id} data={element}/>
                : <p>Exploring...</p>
       
            )
        )
       }
    </Row>
</Container>
)
}