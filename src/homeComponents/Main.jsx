import AddDock from "./AddDock";
import AllDocks from "./AllDocks";



export default function Main ({docks, setDocks}){

    return (
        <> 
        <AddDock setDocks={setDocks}/>
        <AllDocks docks={docks} setDocks={setDocks}/>
        </>
    )
}