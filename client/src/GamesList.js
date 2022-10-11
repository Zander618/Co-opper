import React from 'react'
import GameCard from './GameCard'

const GamesList = ( {games, setGames }) => {

  const gameCards = games.map(game => <GameCard key={game.id} game={game} setGames={setGames}/>)

  return (
    <div>
      <h1 style={{ alignContent: 'center'  }}>Games List</h1>
      <div className="game">
        {gameCards}
      </div>
    </div>
  )
}

export default GamesList