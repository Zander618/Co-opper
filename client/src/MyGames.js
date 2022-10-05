import React, { useEffect } from "react";
import "./Game.css";
// import Select from "react-select";

const MyGames = ({ user, setUser, games }) => {

  // function handleDeleteClick(e) {
  //   fetch(baseUrl + `/user_games/${e.target.id}`, {
  //     method: "DELETE",
  //     headers: {
  //       ...headers,
  //       ...getToken(),
  //     },
  //   });
  //   handleDeleteUserGame(e.target.id);
  // }

  // const handleDeleteUserGame = (userGameId) => {
  //   const updatedUser = { ...currentUser };
  //   updatedUser.user_games = updatedUser.user_games.filter((userGame) => userGame.id !== parseInt(userGameId));
  //   setCurrentUser(updatedUser);
  // };

  const uniqueIds = [];

  const uniqueUserGames = user.games.filter(element => {
    const isDuplicate = uniqueIds.includes(element.id);

    if (!isDuplicate) {
      uniqueIds.push(element.id);

      return true;
    }

    return false;
  });



  const userGame = () =>
    uniqueUserGames.map((usergame) => {
      return (
        <div className="game" key={usergame.id}>
        <h1>{usergame.name}</h1>
        <img src={usergame.image_url} alt="One Game" />
        <p>Release: {usergame.release}</p>
        <label>
          <input type="checkbox"/>
          Played
        </label>
        <br></br>
        <button>
          Remove from list
        </button>
      </div>
      );
    });

  return (
    <div>
      <h1>My Games</h1>
      {userGame()}
    </div>
  );
};

export default MyGames;
