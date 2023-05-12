import { useState, useEffect, useRef } from "react";

export default function Maps() {
  const [location, setLocation] = useState({ lat: 26.345990, lng: -80.069871 });
  const mapRef = useRef(null);

  useEffect(() => {
    const YOUR_API_KEY = "AIzaSyCrAbAtInm3STMieLALJ7adX6D5AAgB7j8";
    // const YOUR_API_KEY = "AIzaSyBryuu9tcUWxshOg1LVAhGF8VOHkCpH3og";
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&libraries=places`;
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
        zoom: 15,
      });

      new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map,
        title: "Great Location to BÜNDOCK",
      });

    });
  }, []);

  return <div ref={mapRef} style={{ height: "350px", width: "100%" }} />;
}
