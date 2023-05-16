import { useState, useEffect, useRef } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";


export default function Maps( {searchResult}) {
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

      console.table(searchResult);
      
      const marker = new google.maps.Marker({
        position: { lat: 26.366785, lng: -80.068113 },
        map,
        title: "Great Location to BÜNDOCK",
      });
      
      const contentString = 'Hello everyone';
      
      const infowindow = new google.maps.InfoWindow({
        content: contentString,
      });
      
      marker.addListener("mouseover", () => {
        infowindow.open(map, marker);
      });
      
      marker.addListener("mouseout", () => {
        infowindow.close();
      });

      new google.maps.Marker({
        position: { lat: 26.284674, lng: -80.163194},
        map,
        title: "Great Location to BÜNDOCK",
      });
      
      new google.maps.Marker({
        position: { lat: 26.376438, lng:  -80.244298 },
        map,
        title: "Great Location to BÜNDOCK",
      });

    });
  }, []);

  

  return (
  <div ref={mapRef} style={{ width: "100%", height: "350px"  }} />
  );
}
