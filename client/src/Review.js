import React from "react";
import "./Game.css";

const Review = ({ game }) => {

  return game.name ? (
    <div>
      {game.reviews.sort((a, b) => a.id > b.id ? 1 : -1).map((r) => {
        return (
          <div key={r.id} className="review-card">
            <h2>Username: {r.reviewer_username}</h2>
            <h4>Review: </h4>
            <p>{r.review}</p>
            <h5>Rating: {r.rating}</h5>
          </div>
        );
      })}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Review;
