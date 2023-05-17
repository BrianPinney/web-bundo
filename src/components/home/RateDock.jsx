import { useState } from "react"

export default function RateDock(){
  const [rating, setRating] = useState(0)
  
  const handleRatingChange = (ratings) => {
    setRating(ratings)
  }



  const handleRatingSubmit = (e) => {
    e.preventDefault()

    fetch("apiURL",{
      method: "POST",
      headers: { "Content-Type": "application",
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
    <div>
      <h2>Rate this BÜNDOCK</h2>
    <div>
    {[1,2,3,4,5].map((ratings) =>(
      <span
        key={ratings}
        onClick={() => handleRatingChange(ratings)}
        >
          {ratings <= rating ? "★" : "✩" }
        </span>
  ))}
  </div>
  <Button onClick={handleRatingSubmit}>submit</Button>
  </div>
  )
}