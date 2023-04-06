import React, { useState } from "react";
import AddGame from "./AddGame";
import GameCard from "./GameCard";


const GamesList = ({ games, setGames, user }) => {
  // const [favGame, setFavGame] = useState ([])
  const [buttonPopup, setButtonPopup] = useState(false);
  // const [formData, setFormData] = useState({name: ""});

  // useEffect(() => {
  //   fetch("/favorite_game")
  //     .then((r) => r.json())
  //     .then(setFavGame);
  // }, []);
 

  const gameCards = games
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .map((game) => <GameCard key={game.id} game={game} user={user} />);
  
  // const handleChange = (event) => {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch(`/search/${formData.name}`)
  //     .then((r) => r.json())
  //     .then((data) => console.log(data));
  // }




  return games ? (
    <div>
      <h1 style={{ textAlign: "center" }}>Games List</h1>
      <h2 style={{ textAlign: "center" }}>
        Write a review to mark played as "Yes".
      </h2>
      
      {/* <GameCard key={favGame.id} game={favGame} user={user} /> */}
      <button
        onClick={() => {
          setButtonPopup(true);
        }}
      >
        Add Game
      </button>
      {/* <form onSubmit={handleSubmit}>
        <label style={{ color: "black" }}>
          Search:
          <input
            className="submissionfield"
            type="text"
            name="name"
            spellCheck="true"
            placeholder="Enter Review"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form> */}
      <AddGame
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        games={games}
        setGames={setGames}
      />
      <div className="game">{gameCards}</div>
    </div>
  ) : (
    <h1>...Loading</h1>
  );
};

export default GamesList;
