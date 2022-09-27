import React, { useState } from "react";
import AddReview from "./AddReview";

const Reviews = ( {game, userId, setUser }) => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setButtonPopup(true);
        }}
      >
        Add Review
      </button>
      <AddReview
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        game={game} 
        userId={userId} 
        setUser={setUser}
      />
    </div>
  );
};

export default Reviews;
