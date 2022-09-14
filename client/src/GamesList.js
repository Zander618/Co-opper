import React, { useState, useEffect } from 'react'
import GameCard from './GameCard'

const GamesList = () => {

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/games")
      .then((r) => r.json())
      .then(setGames);
  }, []);

  const gameCards = games.map(game => <GameCard key={game.id} game={game}/>)

  console.log({games})

  return (
    <div className="game">
      {gameCards}
    </div>
  )
}

export default GamesList