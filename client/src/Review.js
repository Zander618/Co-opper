import React from "react";
import "./Game.css"

const Review = ({ game, allUsers }) => {


  return game.reviews ? (
    <div>
      {game.reviews.map((r) => {
        return (
          <div key={r.id} className="review-card">
            {allUsers.map((user) => {
              if(r.user_id === user.id){
                return(
                  <h2>Username:  {user.username}</h2>
                )
              }
            })}
            <h4>Review: </h4>
            <p>{r.review}</p>
            <h5>Rating: {r.rating}</h5>
          </div>
        );
      })}
    </div>
  ) : (
    <h1>Loading...</h1>
  )
};

export default Review;