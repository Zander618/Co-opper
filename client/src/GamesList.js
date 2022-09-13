import React from 'react'
import GameCard from './GameCard'

const GamesList = ( {games}) => {
  const gameCards = games.map(game => <GameCard key={game.id} game={game}/>)

  console.log({games})

  return (
    <div className="game">
      {gameCards}
    </div>
  )
}

export default GamesList