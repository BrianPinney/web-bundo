import { useState } from "react";
import { Button } from "react-bootstrap";
import { RiStarSmileLine, RiStarSmileFill } from "react-icons/ri";

export default function RateDock({ dock, setShowInfo, setDocks}) {


  

  const handleRatingSubmit = (rating) => {
    fetch(`https://bundo-bp.web.app/docks/${dock._id}`, {
    // fetch(`http://localhost:5002/docks/${dock._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert("Rating Achievement Unlocked 🎖️");
          setShowInfo(false)
          setDocks(data)
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to update dock rating.");
      });
  };

  return (
    <div className="rate-window">
      
      <div>
        {[1, 2, 3, 4, 5].map((ratings) => (
          <span key={ratings} onClick={() => handleRatingSubmit(ratings)}>
            {ratings <= dock.rating 
            ? <RiStarSmileFill /> 
            : <RiStarSmileLine />}
          </span>
        ))}
      </div>
      
    </div>
  );
}
