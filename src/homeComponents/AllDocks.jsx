import {useEffect} from "react"


export default function AllDocks ({docks, setDocks}){

    useEffect(() => {
        fetch("https://bundo-bp.web.app/docks")
        .then(resp => resp.json())
        .then(setDocks)
        .catch(alert)
    }, [setDocks])
console.log(docks)
    return (
        <>
        <div>
            {
                !docks
                ? "Exploring..."
                : docks.map(
                        (docks) => (
                        <div key={docks._id}>
                        <h2>{docks.lambda}</h2> 
                        <h2>{docks.phi}</h2> 
                        </div>
                    )
                )
            }
        </div>
        </>
    )
}