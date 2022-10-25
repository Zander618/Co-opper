import React, { useState } from "react";
import AddGame from "./AddGame";
import GameCard from "./GameCard";

const GamesList = ({ games, setGames, user }) => {
  const [buttonPopup, setButtonPopup] = useState(false);

  const gameCards = games.map((game) => (
    <GameCard key={game.id} game={game} setGames={setGames} user={user}/>
  ));

  console.log("GAMES", games)
  console.log("user", user)

  return games ? (
    <div>
      <h1>Games List</h1>
      <h2>Write a review to mark played as "yes".</h2>
      <button
        onClick={() => {
          setButtonPopup(true);
        }}
      >
        Add Game
      </button>
      <AddGame trigger={buttonPopup} setTrigger={setButtonPopup} games={games} setGames={setGames} />
      <div className="game">
        {gameCards}
      </div>
    </div>
  ) : (
    <h1>...Loaging</h1>
  )
};

export default GamesList;
