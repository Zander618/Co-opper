import React from "react";
import "./Game.css";
// import Select from "react-select";

const MyGames = ({ user, loggedIn, games }) => {

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

  const uniqueUserGames = user.user_games.filter(element => {
    console.log("element", element.game_id)
    const isDuplicate = uniqueIds.includes(element.game_id);

    if (!isDuplicate) {
      uniqueIds.push(element.game_id);

      return true;
    }

    return false;
  });

  console.log(uniqueUserGames)



  const userGame = () =>
    uniqueUserGames.map((usergame) => {
      return (
      games.map((game) => {
        if(usergame.game_id === game.id)
          return (
            <div className="game" key={game.id}>
              <h1>{game.name}</h1>
              <img src={game.image_url} alt="One Game" />
              <p>Release: {game.release}</p>
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
      })
      )
    });

  return loggedIn ? (
    <div>
      <h1>My Games</h1>
      {userGame()}
    </div>
  ) : (
    <h1>...Loading</h1>
  )
};

export default MyGames;
