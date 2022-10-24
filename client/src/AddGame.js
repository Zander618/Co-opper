import React, { useState } from "react";

const AddGame = ({ trigger, setTrigger, games, setGames }) => {
  const [formData, setFormData] = useState({
    name: "",
    release: "",
    ign_rating: "",
    overview: "",
    image_url: "",
    platform: "",
    played: false,
    reviews: [],
    users: []
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        release: formData.release,
        ign_rating: formData.ign_rating,
        overview: formData.overview,
        image_url: formData.image_url,
        platform: formData.platform,
        played: false,
        reviews: [],
        users: []
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        addGame(data)
        setTrigger(false)
      });
    setFormData({
      name: "",
      release: "",
      ign_rating: "",
      overview: "",
      image_url: "",
      platform: "",
      played: false,
      reviews: [],
      users: []
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };


  const addGame = (game) => {
    const newGamesList = [ ...games, game ];
    setGames(newGamesList);
  };

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h3 style={{ color: "black" }}>Add Review</h3>
        <form onSubmit={handleSubmit}>
          <label style={{ color: "black" }}>
            Name:
            <input
              type="text"
              name="name"
              spellCheck="true"
              placeholder="Enter Game Name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label style={{ color: "black" }}>
            Release:
            <input
              type="text"
              name="release"
              placeholder="release date MM.DD.YYYY"
              value={formData.release}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label style={{ color: "black" }}>
            IGN Rating:
            <input
              type="text"
              name="ign_rating"
              placeholder="IGN rating include after decimal"
              value={formData.ign_rating}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label style={{ color: "black" }}>
            Overview:
            <input
              className="submissionfield"
              type="text"
              name="overview"
              spellCheck="true"
              placeholder="Enter game overview"
              value={formData.overview}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label style={{ color: "black" }}>
            Image:
            <input
              type="text"
              name="image_url"
              placeholder="Paste in an image URL for the game cover"
              value={formData.image_url}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label style={{ color: "black" }}>
            Platform:
            <input
              type="text"
              name="platform"
              placeholder="Name of platform the game is available on"
              value={formData.platform}
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

export default AddGame;
