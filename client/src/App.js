import React, { useState, useEffect } from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamesList from "./GamesList";
import Login from "./Login";
import Signup from "./Signup";
import Game from "./Game";
import MyReviews from "./MyReviews";

function App() {
  const [games, setGames] = useState([]);
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const loginUser = (currentUser) => {
    setUser(currentUser);
    setLoggedIn(true);
  };

  console.log(loginUser)

  const logoutUser = () => {
    setUser({});
    setLoggedIn(false);
  };

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => loginUser(user));
      }
    });

    fetch("/games")
      .then((r) => r.json())
      .then(setGames);
  }, []);

  return user && games ? (
    <Router>
      <NavBar loggedIn={loggedIn} logoutUser={logoutUser} currentUser={user} />
      <Routes>
        <Route path="/" element={<Home user={user} loggedIn={loggedIn} setUser={setUser} setLoggedIn={setLoggedIn}/>} />
        <Route
          path="/games"
          element={
            <GamesList
              games={games}
              setGames={setGames}
              user={user}
            />
          }
        />
        <Route path="/signup" element={<Signup onLogin={loginUser} />} />
        <Route path="/login" element={<Login setUser={setUser} setLoggedIn={setLoggedIn}/>} />
        <Route
          path="/myreviews"
          element={
            <MyReviews
              user={user}
              setUser={setUser}
              games={games}
              setGames={setGames}
            />
          }
        />
        <Route
          path="/games/:id"
          element={
            <Game
              games={games}
              user={user}
              setUser={setUser}
              setGames={setGames}
            />
          }
        />
      </Routes>
    </Router>
  ) : (
    <Router>
      <NavBar loggedIn={loggedIn} logoutUser={logoutUser} currentUser={user} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login onLogin={loginUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
