import React, { useState } from "react";
import "./PopUp.css"

const AddReview = ({ trigger, setTrigger, gameId, userId, setUser }) => {
  const [formData, setFormData] = useState({
    user_id: userId,
    game_id: gameId,
    review: "",
    rating: "",
  });

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
      .then((data) => console.log(data));
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

  // const addAsset = (asset) => {
  //   const updatedUsers = users.map((user) => {
  //     if (user.id === id){
  //       const userToUpdate = {...user}
  //       userToUpdate.assets.push(asset)
  //       return userToUpdate
  //     }
  //     return user
  //   })
  //     setUser(updatedUsers);
  //   };
 

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h3 style={{ color: "black" }}>Add Review</h3>
        <form onSubmit={handleSubmit}>
          <label style={{ color: "black" }} >
            Review:
            <input
              type="text"
              name="review"
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
