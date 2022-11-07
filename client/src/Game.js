import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Game.css";
import Reviews from "./Reviews";

const Game = ({ games, user, setUser, setGames}) => {
  const [game, setGame] = useState({});
  const { id } = useParams();

  const userId = user.id;

  useEffect(() => {
    const game = games.find((g) => g.id.toString() === id);
    setGame(game);
  }, [id, games]);

  return game ? (
    <div className="game">
      <h1>{game.name}</h1>
      <img src={game.image_url} alt="One Game" />
      <p>Release: {game.release}</p>
      <p>IGN Rating: {game.ign_rating ? game.ign_rating : "N/A"}</p>
      <p>Overview: {game.overview}</p>
      <p>Platform: {game.platform}</p>
      <br></br>
      <br></br>
      <Reviews
        games={games}
        gameId={game.id}
        user={user}
        userId={userId}
        setUser={setUser}
        setGames={setGames}
      />
    </div>
  ) : (
    <h1>Loading...</h1>
  )
};


export default Game;
