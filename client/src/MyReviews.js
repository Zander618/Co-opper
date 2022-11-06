import React, { useState } from "react";
import EditReview from "./EditReview";
import "./Game.css";

const MyReviews = ({ user, setUser, games, setGames, reviews, setReviews }) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [popUpId, setPopUpId] = useState();

  function handleDeleteClick(e) {
    fetch(`/reviews/${e.target.id}`, {
      method: "DELETE",
    });
    handleDeleteReview(e.target.id);
    handleDeleteGame(e)
  }
  console.log("GAME REviews", reviews)

  const handleDeleteReview = (r) => {
    let updatedReviews = user.reviews.filter(
      (review) => review.id !== parseInt(r)
    );
    const userToUpdate = {...user}
    userToUpdate.reviews = updatedReviews
    setUser(userToUpdate);
  };

  const handleDeleteGame = (g) => {
    const gamesToUpdate = [...games]
    let gameToUpdate = gamesToUpdate.find(
      (game) => game.id === parseInt(g.target.attributes.gamenumber.value)
    );
    let unremovedReview = gameToUpdate.reviews.filter(
      (review) => review.id !== parseInt(g.target.id)
    )
    let unupdatedGames = gamesToUpdate.filter(
      (game) => game.id !== parseInt(g.target.attributes.gamenumber.value)
    );
    gameToUpdate.reviews = unremovedReview
    let updatedGames = [...unupdatedGames, gameToUpdate]
    setGames(updatedGames);
  }


  return reviews ? (
    <div>
      <h1 style={{textAlign: "center"}}>My Reviews</h1>
      {user.reviews.map((r) => {
        return (      
          <div key={r.id} className="review-card">
            <h3>Game: {r.game_name}</h3>
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
            <EditReview trigger={buttonPopup} setTrigger={setButtonPopup} reviewId={popUpId} userId={r.user_id} gameId={r.game_id} user={user} setUser={setUser} games={games} setGames={setGames} reviews={reviews} setReviews={setReviews}/>
            )}
            <button id={r.id} gamenumber={r.game_id}
                   onClick={(e) => {
                    handleDeleteClick(e)
                  }}
                >
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

