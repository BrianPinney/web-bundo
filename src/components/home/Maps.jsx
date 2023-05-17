import { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";

export default function Maps({ searchResult, setSearchResult }) {
  const [location, setLocation] = useState({ lat: 26.350771, lng: -80.155436 });
  const mapRef = useRef(null);

  useEffect(() => {
    const API_KEY = "AIzaSyCrAbAtInm3STMieLALJ7adX6D5AAgB7j8";
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let YourCurrentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          console.log("YourCurrentLocation", YourCurrentLocation);
          setLocation(YourCurrentLocation);
        });
      }

      const google = window.google;
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: location.lat, lng: location.lng },
        zoom: 11,
      });

      if (searchResult) {
        searchResult.map((docks) => {
          const markerDot = {
            lat: Number(docks.lambda),
            lng: Number(docks.phi),
          };
          const marker = new google.maps.Marker({
            position: markerDot,
            map,
            animation: google.maps.Animation.DROP,
            
          });

          const hoverWindow = '<div><title>{docks.dockName}</title><p>Commment</p><p>rating ⭐️⭐️⭐️⭐️⭐️</p></div>'

          const infowindowHover = new google.maps.InfoWindow({
            content: hoverWindow,
            maxWidth: 200,
            
          });

          marker.addListener("mouseover", () => {
            infowindowHover.open({
              anchor: marker,
              map,
            })

            marker.addListener("mouseout", () => {
              infowindowHover.close()
            })

          });

            const infowindowClick = new google.maps.InfoWindow({
            content: "New comment and rating ⭐️⭐️⭐️⭐️⭐️",
            maxWidth: 200,
            
          });

          marker.addListener("click", () => {
            infowindowClick.open({
              anchor: marker,
              map,
            });
          });
        });
      }
    });
  }, [searchResult]);

  return <div ref={mapRef} style={{ width: "100%", height: "350px" }} />;
}
