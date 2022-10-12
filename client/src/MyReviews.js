import React, { useState } from "react";
import EditReview from "./EditReview";
import "./Game.css";

const MyReviews = ({ user, setUser, games, setGames }) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [popUpId, setPopUpId] = useState();

  function handleDeleteClick(e) {
    fetch(`/reviews/${e.target.id}`, {
      method: "DELETE",
    });
    handleDeleteReview(e.target.id);
  }

  const handleDeleteReview = (r) => {
    let updatedAttributes;
    const userToUpdate = { ...user };
    updatedAttributes = userToUpdate.reviews.filter(
      (review) => review.id !== parseInt(r)
    );
    userToUpdate.reviews = updatedAttributes;
    setUser(userToUpdate);
  };

  return user.games ? (
    <div>
      {user.reviews.map((r) => {
        return (
          <div key={r.id} className="review-card">
            <h2>Username: {r.user_id}</h2>
            <h2>Game: {r.game_id}</h2>
            <h4>Review: </h4>
            <p>{r.review}</p>
            <h5>Rating: {r.rating}</h5>
            <button id={r.id}
              onClick={(e) => {
                setPopUpId(parseInt(e.target.id))
                setButtonPopup(true);
              }}
            >
              Edit
            </button>
            {r.id === popUpId && (
            <EditReview trigger={buttonPopup} setTrigger={setButtonPopup} reviewId={popUpId} userId={r.user_id} gameId={r.game_id} user={user} setUser={setUser} games={games} setGames={setGames}/>
            )}
            <button onClick={handleDeleteClick} id={r.id}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default MyReviews;
