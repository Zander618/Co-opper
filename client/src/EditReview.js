import React, {useState} from 'react'
import "./PopUp.css"
import "./Game.css"

const EditReview = ({reviewId, trigger, setTrigger, userId, user, gameId, setUser, reviews, setReviews }) => {
  const [formData, setFormData] = useState({
    id: reviewId, 
    user_id: userId,
    game_id: gameId,
    review: "",
    rating: "",
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
        updatedReviews(data)
        setTrigger(false)
      })
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

    const updatedReviews = (data) => {
      console.log("DATA", data)
      const unupdatedReviews = reviews.filter(
        (review) => review.id !== data.id
      )
    const updatedReviews = [...unupdatedReviews, data]
    setReviews(updatedReviews)
  };
 

  return trigger ? (
    <div className="edit-review-card">
      <div >
        <h3 style={{ color: "black" }}>Edit review</h3>
        <form onSubmit={handleSubmit} id={user.id}>
          <label style={{ color: "black" }} >
            Review:
            <input className="editsubmissionfield"
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

export default EditReview