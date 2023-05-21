import { useState } from "react"
import { toast } from 'react-toastify'
import { Offcanvas } from "react-bootstrap"
import { AiOutlineDoubleLeft } from "react-icons/ai"
import { Button } from "react-bootstrap"

export default function AddDock ({setDocks}){
const [ lambda, setLambda] = useState('')
const [ phi, setPhi] = useState('')
const [city, setCity] = useState('')
const [dockName, setDockName] = useState('')

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


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
        toast.success(data.message)
        setDockName("")
        setCity("")
        setLambda("")
        setPhi("")
        return
    }
    setDocks(data)
})
    .catch(alert)
}
    return (
        <>
        <Button className="canvas-button" onClick={handleShow}>
        <AiOutlineDoubleLeft/>
        </Button>
  
        <Offcanvas className="canvas-name" show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Create Dock</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
       <section>
            <div class="login-box">
 
            <form>
            <div class="user-box"> 
                <input 
                    type="text" 
                    placeholder="Name your dock" 
                    value={dockName}
                    onChange={(e) => {
                    setDockName(e.target.value)}}
                        />
                    <label>Dock Name</label>
                </div>
                <div class="user-box"> 
                <input 
                    type="text" 
                    placeholder="Where" 
                    value={city}
                    onChange={(e) => {
                    setCity(e.target.value)}}
                        />
                    <label>City</label>
                </div>
                <div class="user-box">
                    <input 
                    type="text" 
                    placeholder="Latitude" 
                    value={lambda}
                    onChange={(e) => {
                    setLambda(e.target.value)}}
                        />
                    <label>Lambda</label>
                </div>
                <div class="user-box">
                    <input 
                    type="text" 
                    placeholder="Longitude" 
                    value={phi}
                    onChange={(e) => {
                    setPhi(e.target.value)}}
                        />
                    <label>Phi</label>
            </div>
                <center>
                <button onClick={handleAddDock}>
                    Create
                <span></span>
                </button>
                </center>
            </form>
        </div>
        </section>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}





