import React, { useEffect } from 'react'
// import Select from "react-select";

const MyGames = ({ user, setUser, games}) => {

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

  // const userGame = () => user.userId.user_games.game_id.filter((userGame) => {
  //   return (
  //     <div key={userGame.id}>
  //       <h1>{userGame.name}</h1>
  //       <img src={userGame.image_url} alt="One Game" />
  //       <label>
  //         <input type="checkbox" />
  //         Played
  //       </label>
  //       <Select options={options}>Platform</Select>
  //       <button id={userGame.id} onClick={handleDeleteClick}>
  //         Remove from list
  //       </button>
  //     </div>
  //   );
  // });

  return (
    <div>
    {/* {loggedIn ? userGame() : <p>Loading...</p>} */}
    <h1>My GAmes</h1>
    </div>
  )
};

export default MyGames