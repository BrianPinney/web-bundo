
import { RiStarSmileLine, RiStarSmileFill } from "react-icons/ri";
import { toast } from 'react-toastify'

export default function RateDock({ dock, setShowInfo, setDocks}) {
  

  const handleRatingSubmit = (rating) => {

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
          toast.success("Rating Achievement Unlocked 🎖️");
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
          <span key={ratings} onClick={() => handleRatingSubmit(ratings)} style={{fontSize: 22, cursor: "pointer"}}>
            {ratings <= dock.rating 
            ? <RiStarSmileFill /> 
            : <RiStarSmileLine />}
          </span>
        ))}
      </div>
      
    </div>
  );
}
