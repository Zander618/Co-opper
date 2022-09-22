import React, { useEffect } from "react";
// import Select from "react-select";

const MyGames = ({ user, setUser, games }) => {
  const userId = user.id;

  // const options = [
  //   { value: "playstation", label: "Playstation" },
  //   { value: "Xbox", label: "Xbox" },
  //   { value: "Nintendo", label: "Nintendo" },
  // ];

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

  const userGame = () =>
    user.user_games.map((ug) => {
      // games.map((game) => {
      //   if (game.id === userGame.game_id) {
          return (
            <div key={ug.game_id}>
              <h1>{ug.game_id}</h1>
              {/* <img src={game.image_url} alt="this game" /> */}
              {/* <label>
          <input type="checkbox" />
          Played
        </label>
        <Select options={options}>Platform</Select>
        <button id={userGame.id} onClick={handleDeleteClick}>
          Remove from list
        </button> */}
            </div>
          );
        // }
      // });
    });

  return (
    <div>
      <h1>My Games</h1>
      {/* {loggedIn ? userGame() : <p>Loading...</p>} */}
      {userGame}
    </div>
  );
};

export default MyGames;
