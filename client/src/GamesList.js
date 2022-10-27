import React, { useState } from "react";
import AddGame from "./AddGame";
import GameCard from "./GameCard";

const GamesList = ({ games, setGames, user}) => {
  const [buttonPopup, setButtonPopup] = useState(false);

  const gameCards = games.map((game) => (
    <GameCard key={game.id} game={game} user={user}/>
  ));

  return games ? (
    <div>
      <h1 style={{textAlign: "center"}} >Games List</h1>
      <h2 style={{textAlign: "center"}}>Write a review to mark played as "Yes".</h2>
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
    <h1>...Loading</h1>
  )
};

export default GamesList;
