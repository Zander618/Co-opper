import React, { useEffect } from 'react'
import GameCard from './GameCard'

const GamesList = ( {games, setGames }) => {

  const gameCards = games.map(game => <GameCard key={game.id} game={game}/>)

  console.log({games})

  return (
    <div>
      <h1>Games List</h1>
      <div className="game">
        {gameCards}
      </div>
    </div>
  )
}

export default GamesList