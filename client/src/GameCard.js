import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Game.css";

const GameCard = ({ game }) => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="movie-card">
      <h3>{game.name}:</h3>
      <img src={game.image_url} alt="video game" height="250" width="200" />
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        Played
      </label>
      <br></br>
      <button onClick={() => navigate(`/games/${game.id}`)}>
        Click for more info
      </button>
    </div>
  );
};

export default GameCard;
