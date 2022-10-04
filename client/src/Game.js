import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Game.css";
import Reviews from "./Reviews";

const Game = ({ games, user, setUser }) => {
  const [game, setGame] = useState({});
  const { id } = useParams();

  const userId = user.id;

  useEffect(() => {
    const game = games.find((g) => g.id.toString() === id);
    setGame(game);
  }, [id]);

  const handleClick = () => {
    fetch(`/users/${userId}/user_games`, {
      method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify({
        user_id: userId,
        game_id: game.id,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        addGameToUserList(data);
        console.log("Added Game Data", data);
      });
  };

  const addGameToUserList = () => {
      const updatedUser = { ...user };
      setUser(updatedUser);
      alert("Added to My Watch List");
  };


  return (
    <div className="game">
      <h1>{game.name}</h1>
      <img src={game.image_url} alt="One Game" />
      <p>Release: {game.release}</p>
      <p>IGN Rating: {game.ign_rating ? game.ign_rating : "N/A"}</p>
      <p>Overview: {game.overview}</p>
      <button onClick={handleClick} id={game.id}>
        Add to your list
      </button>
      <br></br>
      <br></br>
      <Reviews games={games} gameId={game.id} user={user} userId={userId} setUser={setUser}/>
    </div>
  );
};

export default Game;
