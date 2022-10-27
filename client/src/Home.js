import React from 'react'
import "./Game.css";

const Home = () => {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Welcome</h1>
      <p style={{textAlign: "center", padding: 20, overflowWrap: 'break-word' }}> This is a co-opperative website in all terms. 
      The website is designed to help people find co-op games to play with a partner. 
      We also rely on others to cooperate and add games to our hopefully evergrowing list to help others find new games. 
      Add a review to mark that you have played any game within the list.</p>
      <div className="center">
        <img src="https://cdn.shopify.com/s/files/1/1568/8443/products/my_living_room_1a_2ca9f17d-eb70-44cd-bb7e-42e4dc223748.jpg?v=1652904149" alt="couch"/>
      </div>
    </div>
  )
}

export default Home