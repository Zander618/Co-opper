import React from "react";
import { useNavigate } from "react-router-dom";
import "./Game.css";

const GameCard = ({ game, user, reviews }) => {
  const navigate = useNavigate();
  console.log("USE", user)
  console.log("REV", reviews)
  console.log("GAME", game)

  let havePlayed = () => {
    if (1) {
    return <h5>Yes</h5>
    } else if (2) {
      return <h5>Unplayed</h5>
    }
  }

  return (
    <div className="movie-card">
      <h3>{game.name}:</h3>
      <img src={game.image_url} alt="video game" height="250" width="200" />
      <h5>Played:</h5>
      {havePlayed}
      {user.games.map((usergame) => {
        if (usergame.id === game.id) {
          return havePlayed(1);
        }
      })}
      <h5>{havePlayed ? "" : "Unplayed"}</h5>
      <button onClick={() => navigate(`/games/${game.id}`)}>
        Click for more info
      </button>
    </div>
  );
};

export default GameCard;
