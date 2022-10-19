import React from "react";
import "./Game.css";
// import Select from "react-select";

const MyGames = ({ user, loggedIn, games, setUser }) => {

console.log("USERID", user.id)

  function handleDeleteClick(e) {
    fetch(`/users/${user.id}/user_games/${e.target.id}`, {
      method: "DELETE",
    });
    handleDeleteMyGame(e.target.id);
  }

  const handleDeleteMyGame= (id) => {
    let updatedAttributes;
    const userToUpdate = { ...user };
    updatedAttributes = userToUpdate.user_games.filter(
      (userGame) => userGame.id !== parseInt(id)
    );
    userToUpdate.user_games = updatedAttributes;
    setUser(userToUpdate);
  };

  const uniqueIds = [];

  const uniqueUserGames = user.user_games.filter((element) => {
    const isDuplicate = uniqueIds.includes(element.game_id);

    if (!isDuplicate) {
      uniqueIds.push(element.game_id);

      return true;
    }

    return false;
  });

  const userGame = () =>
    uniqueUserGames.map((usergame) => {
      return games.map((game) => {
        if (usergame.game_id === game.id)
          return (
            <div className="game" key={game.id}>
              <h1>{game.name}</h1>
              <img src={game.image_url} alt="One Game" />
              <p>Release: {game.release}</p>
              {/* <label>
                <input type="checkbox" />
                Played
              </label> */}
              <br></br>
              <button id={usergame.id} onClick={handleDeleteClick}>
                Remove from list
              </button>
            </div>
          );
      });
    });

  return loggedIn ? (
    <div>
      <h1>My Games</h1>
      {userGame()}
    </div>
  ) : (
    <h1>...Loading</h1>
  );
};

export default MyGames;
