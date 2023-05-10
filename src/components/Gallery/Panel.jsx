import { Col, Image, Modal } from "react-bootstrap";
import {useState} from "react"

export default function Panel({ data: {id,title,info,img}}){
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    return (
                <Col  className="m1 bg-info">
                
                <Image
                onClick={handleShow}
                src={img}
                
                 />
                 <Modal 
                 size="md"
                 show={show}
                 onHide={handleClose}
                 className="backdrop-effect"
                 >
                <h3>{title}</h3>
                <p>{info}</p>  
                 </Modal>
                
                </Col>
    )
}