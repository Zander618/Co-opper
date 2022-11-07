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
    handleDeleteReview(e);
    handleDeleteGame(e);
  }

  const handleDeleteReview = (e) => {
    let updatedReviews = user.reviews.filter(
      (review) => review.id !== parseInt(e.target.id)
    );
    let updatedUsergames = user.games.filter(
      (game) => game.id !== parseInt(e.target.attributes.gamenumber.value)
    );
    const userToUpdate = { ...user };
    userToUpdate.reviews = updatedReviews
    userToUpdate.games = updatedUsergames
    setUser(userToUpdate);
  };

  const handleDeleteGame = (g) => {
    const gamesToUpdate = [...games];
    let gameToUpdate = gamesToUpdate.find(
      (game) => game.id === parseInt(g.target.attributes.gamenumber.value)
    );
    let unremovedReviews = gameToUpdate.reviews.filter(
      (review) => review.id !== parseInt(g.target.id)
    );
    let unupdatedGames = gamesToUpdate.filter(
      (game) => game.id !== parseInt(g.target.attributes.gamenumber.value)
    );
    gameToUpdate.reviews = unremovedReviews;
    let updatedGames = [...unupdatedGames, gameToUpdate];
    setGames(updatedGames);
  };

  return reviews ? (
    <div>
      <h1 style={{ textAlign: "center" }}>My Reviews</h1>
      {user.reviews.sort((a, b) => a.game_name > b.game_name ? 1 : -1).map((r) => {
        return (
          <div key={r.id} className="review-card">
            <h3>Game: {r.game_name}</h3>
            <h4>Review: </h4>
            <p>{r.review}</p>
            <h5>Rating: {r.rating}</h5>
            <button
              id={r.id}
              onClick={(e) => {
                setPopUpId(parseInt(e.target.id));
                setButtonPopup(true);
              }}
            >
              Edit
            </button>
            {r.id === popUpId && (
              <EditReview
                trigger={buttonPopup}
                setTrigger={setButtonPopup}
                reviewId={popUpId}
                userId={r.user_id}
                gameId={r.game_id}
                user={user}
                setUser={setUser}
                games={games}
                setGames={setGames}
                reviewText={r.review}
                reviewRating={r.rating}
                reviews={reviews}
                setReviews={setReviews}
              />
            )}
            <button
              id={r.id}
              gamenumber={r.game_id}
              onClick={(e) => {
                handleDeleteClick(e);
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
