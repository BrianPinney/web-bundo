import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

export default function SearchMaps() {
  const [searchCity, setSearchCity] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [location, setLocation] = useState({ lat: 26.350771, lng: -80.155436 });
  const mapRef = useRef(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let yourCurrentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        console.log("YourCurrentLocation", yourCurrentLocation);
        setLocation(yourCurrentLocation);
      });
    }
  }, []);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://bundo-bp.web.app/docks/search/${searchCity}`
      );
      const data = await response.json();
      setSearchResult(data);
      createMarkers(data); // Create markers when search results are available
    } catch (err) {
      console.error(err);
    }
  };

  const createMarkers = (data) => {
    const newMarkers = data.map((docks) => ({
      position: { lat: docks.lambda, lng: docks.phi },
      title: `Great Location to BÜNDOCK in ${docks.city}`,
    }));
    setMarkers(newMarkers);
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
      {searchResult.length > 0 && (
        <div>
          {searchResult.map((docks, index) => {
            return (
              <div key={index}>
                <h2>City: {docks.city}</h2>
                <p>△: {docks.lambda}</p>
                <p>⏀: {docks.phi}</p>
              </div>
            );
          })}
        </div>
      )}
      <GoogleMap
        mapContainerStyle={{ height: "350px", width: "100%" }}
        center={location}
        zoom={11}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} title={marker.title} />
        ))}
      </GoogleMap>
    </div>
  );
}
