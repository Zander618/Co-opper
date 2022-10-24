import React, { useState } from "react";
import "./PopUp.css"
import "./Game.css"

const AddReview = ({ trigger, setTrigger, gameId, userId, setUser, user, games, setGame, reviews, setReviews }) => {
  const [formData, setFormData] = useState({
    user_id: userId,
    game_id: gameId,
    review: "",
    rating: "",
  });
  console.log("USERID",userId)

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        game_id: gameId,
        review: formData.review,
        rating: formData.rating,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        addReview(data)     
      })
    setFormData({
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

  const addReview = (newReview) => {
        console.log("newReview", newReview)
        const updatedReviews = [...reviews, newReview]
        setReviews(updatedReviews);
    };

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h3 style={{ color: "black" }}>Add Review</h3>
        <form onSubmit={handleSubmit}>
          <label style={{ color: "black" }} >
            Review:
            <input className="submissionfield"
              type="text"
              name="review"
              spellCheck="true"
              placeholder="Enter Review"
              value={formData.review}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label style={{ color: "black" }} >
            Rating:
            <input
              type="number"
              name="rating"
              placeholder="1-10"
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

export default AddReview;
