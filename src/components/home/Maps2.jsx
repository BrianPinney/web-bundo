import { useState } from "react";
import { GoogleMap, LoadScript, InfoBox, Marker } from "@react-google-maps/api";
import RateDock from "./RateDock";

const containerStyle = {
  width: "100%",
  height: "350px",
};

const center = { lat: 26.350771, lng: -80.155436 };

export default function Maps2({ searchResult, setSearchResult, setDocks }) {
  
  const [showInfo, setShowInfo] = useState(false);
  const [thisDock, setThisDock] = useState(false);
  console.log(showInfo)

  return (
    <LoadScript googleMapsApiKey="AIzaSyCrAbAtInm3STMieLALJ7adX6D5AAgB7j8">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {showInfo && <InfoBox onCloseClick={ () => setShowInfo(false)} position={{ lat: Number(thisDock.lambda), lng: Number(thisDock.phi) }}>
          <div
            style={{ backgroundColor: "white",
            padding: 12,
            border: "2px solid grey",
            borderRadius: 9,
            width: 200,}}
          >
            <div style={{ fontSize: 16, color: "green" }}>
              {thisDock.dockName}
            </div>
            <RateDock dock={thisDock} setShowInfo={setShowInfo} setDocks={setDocks}/>
          </div>
        </InfoBox>}
        {searchResult &&
          searchResult.map((docks) => (
            <Marker
              position={{ lat: Number(docks.lambda), lng: Number(docks.phi) }}
              onClick={() => { setThisDock(docks); setShowInfo(true); }}

            />
          ))}
      </GoogleMap>
    </LoadScript>
  );
}
