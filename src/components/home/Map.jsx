import { useEffect, useState } from "react";

export default function Maps(){
    
    const [ location, setLocation] = useState({lat: 26.3510771,long:-80.1553744})

    useEffect(()=> { // we need to do this only once
        if (navigator.geolocation) { // see if we are allowed to get the GPS coordicates
            navigator.geolocation.getCurrentPosition(position=> { // we got it. let's update the useState
              setLocation({lat: position.coords.latitude, long: position.coords.longitude})
            })
        }
      },[])

      return (
        <section>
            <header>
            lat: {location.lat} and long: {location.long}
            </header>
        </section>
            
          
      );
    }