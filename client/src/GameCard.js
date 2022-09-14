import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Game.css"

const GameCard = ( {game}) => {
  const navigate = useNavigate()

  return (
    <div className="movie-card">
      <h3>{game.name}:</h3>
      <img src={game.image_url} alt="game image" height="250" width="200"/>
      <br></br>
      <button onClick={ () => navigate (`/games/${game.id}`) }>Click for more info</button>     
    </div>
  )
}

export default GameCard