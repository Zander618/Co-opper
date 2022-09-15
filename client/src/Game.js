import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Game.css";

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
        platform: null,
        played: null,
        name: game.name,
        image_url: game.image_url,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        addGameToUserList(data);
        console.log("Added Game Data", data);
      });
  };

  const addGameToUserList = (newGame) => {
    // if (user.user_games.game_id === newGame.game_id) {
    //   alert("In List Already");
    // } else {
      const updatedUser = { ...user };
      // updatedUser.push(newGame);
      setUser(updatedUser);
      alert("Added to My Watch List");
    // }
  };

  console.log("User Data", user)

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
    </div>
  );
};

export default Game;
