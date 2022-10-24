import React from "react";
import "./Game.css";

const Review = ({ game, reviews}) => {

  return reviews ? (
    <div>
      {reviews.map((r) => {
        if(r.game.id === game.id)
        return (
          <div key={r.id} className="review-card">
            <h2>Username: {r.user.username}</h2>
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
