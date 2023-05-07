import { useState } from "react"

export default function AddDock ({setDocks}){
const [ lambda, setLambda] = useState('')
const [ phi, setPhi] = useState('')

const handleAddDock = (e) => {
    e.preventDefault()

    fetch("https://bundo-bp.web.app/docks",{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ lambda, phi}),
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

       <>
        <form onSubmit={handleAddDock}>
            <h2>DOCK</h2>
            <label htmlFor="lambda"> Lambda
                <input 
                    type="text" 
                    placeholder="Longitude" 
                    value={lambda} 
                    onChange={(e) => {
                        setLambda(e.target.value)}}/>
            </label>
        <br />
            <label htmlFor="phi"> Phi
                <input 
                    type="text" 
                    placeholder="Latitude" 
                    value={phi}
                    onChange={(e) => {
                        setPhi(e.target.value)}}
                        />
            </label>
            <br />
            <input type="submit" value={"DOCK IT"} />
        </form>
        </>
    )
}