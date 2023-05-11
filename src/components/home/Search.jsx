import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export default function Search(docks, setDocks) {
  const [searchCity, setSearchCity] = useState("");
  const [searchResult, setSearchResult] = useState();
  const [rateDock, setRateDock] = useState(false);
  const [selectDock, setSelectDock] = useState();

  const handleSearch = () => {
    fetch(`https://bundo-bp.web.app/docks/search/${searchCity}`)
      .then((resp) => resp.json())
      .then((data) => setSearchResult(data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Find BÜNDOCK</h2>
      <form>
        <input
          type="text"
          placeholder="Enter City"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
      </form>
      <button onClick={handleSearch}>Search</button>
      {searchResult && (
        <div>
          {searchResult.map((docks) => {
            return (
              <div key={docks._id}>
                <h2>City: {docks.city}</h2>
                <Button onClick={`https://www.google.com/maps/place/${docks.lambda}+${docks.phi}`} >
                <p>△: {docks.lambda}</p>
                <p>⏀: {docks.phi}</p>
                </Button>

                <p>
                  <a
                    href={`https://www.google.com/maps/place/${docks.lambda}+${docks.phi}`}
                    target="_blank"
                  >
                    Google
                  </a>
                </p>

                {/* <iframe
                width="600"
                height="450"
                frameborder="0" style="border:0"
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${docks.lambda},${docks.phi}`}
                allowfullscreen
              ></iframe> */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
