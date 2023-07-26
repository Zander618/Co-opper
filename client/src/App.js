import React, { useState, useEffect } from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamesList from "./GamesList";
import Login from "./Login";
import Signup from "./Signup";
import Game from "./Game";
import MyReviews from "./MyReviews";
import PasswordReset from "./PasswordReset";
import PasswordForgot from "./PasswordForgot";

function App() {
  const [games, setGames] = useState([]);
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const loginUser = (currentUser) => {
    setUser(currentUser);
    setLoggedIn(true);

    fetch("/games")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch games data");
        }
      })
      .then((data) => setGames(data))
      .catch((error) => {
        console.error(error);
        // Handle the error condition
      });
  };

  const logoutUser = () => {
    setUser({});
    setLoggedIn(false);
  };

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          loginUser(user);
        });
      }
    });
  }, []);

  return loggedIn ? (
    <Router>
      <NavBar loggedIn={loggedIn} logoutUser={logoutUser} currentUser={user} />
      <Routes>
        <Route
          path="/"
          element={
            <Home user={user} loggedIn={loggedIn} loginUser={loginUser} />
          }
        />
        <Route
          path="/games"
          element={<GamesList games={games} setGames={setGames} user={user} />}
        />
        <Route path="/signup" element={<Signup onLogin={loginUser} />} />
        <Route path="/login" element={<Login loginUser={loginUser} />} />
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
        <Route path="/" element={<Home user={user} loginUser={loginUser} />} />
        <Route path="/signup" element={<Signup onLogin={loginUser} />} />
        <Route path="/login" element={<Login loginUser={loginUser} />} />
        <Route path="/passwordrecovery" element={<PasswordForgot />} />
        <Route path="/reset_password/:token">
          <PasswordReset setUser={setUser} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
