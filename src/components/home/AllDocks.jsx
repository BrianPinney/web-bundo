import { useEffect, useState } from "react";

export default function AllDocks({ docks, setDocks }) {
const [rateDock, setRateDock] = useState(false)
const [selectDock, setSelectDock] = useState()
const toggleModal = (dock) => {
    setSelectDock(dock)
    setRateDock(!rateDock)
}

  useEffect(() => {
    fetch("https://bundo-bp.web.app/docks")
      .then((resp) => resp.json())
      .then(setDocks)
      .catch(alert);
  }, [setDocks]);
  console.log(docks);
  return (
    <>
      <div>
        <h2>BÜNDOCKS</h2>
        {!docks
          ? "Exploring..."
          : docks.map((docks) => (
              <div key={docks._id}>
                <button onClick={() => toggleModal(docks)}>
                <h2>City: {docks.city}</h2>
                <h2>△: {docks.lambda}</h2>
                <h2>⏀: {docks.phi}</h2>
                </button>
              </div>
            ))}
      </div>
      <div>
      {selectDock && (
                    <div>
                        <h2>Rate Dock: {selectDock.city}</h2>
                        <button onClick={() => toggleModal()}>X</button>
                    </div>
                    )}
      </div>
      
    </>
  );
}
