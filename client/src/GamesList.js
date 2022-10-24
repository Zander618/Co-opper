import React, { useState } from "react";
import AddGame from "./AddGame";
import GameCard from "./GameCard";

const GamesList = ({ games, setGames }) => {
  const [buttonPopup, setButtonPopup] = useState(false);

  const gameCards = games.map((game) => (
    <GameCard key={game.id} game={game} setGames={setGames} />
  ));

  console.log("GAMES", games)

  return games ? (
    <div>
      <h1 style={{ alignContent: "center" }}>Games List</h1>
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
