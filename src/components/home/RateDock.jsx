import { useState } from "react";
import { Button } from "react-bootstrap";
import { RiStarSmileLine, RiStarSmileFill } from "react-icons/ri";

export default function RateDock({ dock }) {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (ratings) => {
    setRating(ratings);
  };

  const handleRatingSubmit = () => {
    fetch(`https://bundo-bp.web.app/docks/${dock._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert("Dock rating updated successfully!");
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
          <span key={ratings} onClick={() => handleRatingChange(ratings)}>
            {ratings <= rating 
            ? <RiStarSmileFill /> 
            : <RiStarSmileLine />}
          </span>
        ))}
      </div>
      <Button onClick={handleRatingSubmit} variant="outline-success" id="button-addon2">
        Submit
      </Button>
    </div>
  );
}
