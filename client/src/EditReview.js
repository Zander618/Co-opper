import React, { useState } from "react";
import "./PopUp.css";
import "./Game.css";

const EditReview = ({
  reviewId,
  trigger,
  setTrigger,
  userId,
  user,
  gameId,
  setUser,
  games,
  setGames,
  reviewText,
  reviewRating,
}) => {
  const [formData, setFormData] = useState({
    id: reviewId,
    user_id: userId,
    game_id: gameId,
    review: reviewText,
    rating: reviewRating,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/reviews/${reviewId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: reviewId,
        user_id: userId,
        game_id: gameId,
        review: formData.review,
        rating: formData.rating,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        updatedUserReviews(data);
        updatedGameReviews(data);
        setTrigger(false);
      });
    setFormData({
      id: reviewId,
      user_id: userId,
      game_id: gameId,
      review: "",
      rating: "",
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const updatedUserReviews = (data) => {
    const unupdatedReviews = user.reviews.filter(
      (review) => review.id !== data.id
    );
    const updatedReviews = [...unupdatedReviews, data];
    const updatedUser = { ...user };
    updatedUser.reviews = updatedReviews;
    setUser(updatedUser);
  };

  const updatedGameReviews = (data) => {
    let spreadGames = [...games];
    let gameToUpdate = spreadGames.find((game) => game.id === data.game_id);
    let unupdatedGameReviews = gameToUpdate.reviews.filter(
      (review) => review.id !== data.id
    );
    let unupdatedGames = spreadGames.filter((game) => game.id !== data.game_id);
    gameToUpdate.reviews = [...unupdatedGameReviews, data];
    let updatedGames = [...unupdatedGames, gameToUpdate];
    setGames(updatedGames);
  };

  return trigger ? (
    <div className="edit-review-card">
      <div>
        <h3 style={{ color: "black" }}>Edit review</h3>
        <form onSubmit={handleSubmit} id={user.id}>
          <label style={{ color: "black" }}>
            Review:
            <input
              className="editsubmissionfield"
              type="text"
              name="review"
              spellCheck="true"
              value={formData.review}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label style={{ color: "black" }}>
            Rating:
            <input
              type="number"
              name="rating"
              max="10"
              value={formData.rating}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
        <button className="close-btn" onClick={() => setTrigger(false)}>
          close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default EditReview;
