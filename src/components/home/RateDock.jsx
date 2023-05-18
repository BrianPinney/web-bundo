import { useState } from "react"
import { Button } from "react-bootstrap"
import { RiStarSmileLine, RiStarSmileFill } from "react-icons/ri"

export default function RateDock(){
  const [rating, setRating] = useState(0)
  
  const handleRatingChange = (ratings) => {
    setRating(ratings)
  }



  const handleRatingSubmit = (e) => {
    e.preventDefault()

    fetch("https://bundo.web.app/ratings",{
      method: "POST",
      headers: { "Content-Type": "application/json",
    },
    body: JSON.stringify({ rating }),
    })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.message) {
        alert(data.message)
        return
      }
    })
    .catch((err) => {
      console.error("Sorry your call could not go through as dialed, please hang up and try again.", err)
    })
  }
  return(
    <div className="rate-window">
      <p className="font-size 18px">Rate this BÜNDOCK</p>
    <div>
    {[1,2,3,4,5].map((ratings) =>(
      <span
        key={ratings}
        onClick={() => handleRatingChange(ratings)}
        >
          {ratings <= rating 
          ? <RiStarSmileFill/> 
          : <RiStarSmileLine/> }
        </span>
  ))}
  </div>
  <Button onClick={handleRatingSubmit} variant="outline-success" id="button-addon2" >submit</Button>
  </div>
  )
}