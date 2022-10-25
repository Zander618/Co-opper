import React from "react";
import { useNavigate } from "react-router-dom";
import "./Game.css";

const GameCard = ({ game, user }) => {
  const navigate = useNavigate();

  return (
    <div className="movie-card">
      <h3>{game.name}:</h3>
      <img src={game.image_url} alt="video game" height="250" width="200" />
      <h5>Played:</h5>
      {user.games.map((usergame) => {
        if (usergame.id === game.id) {
          return <h5>Yes</h5>;
        } 
      })}
      <button onClick={() => navigate(`/games/${game.id}`)}>
        Click for more info
      </button>
    </div>
  );
};

export default GameCard;
