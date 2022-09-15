import React, { useState, useEffect } from "react";
import Home from "./Home";
import NavBar from "./NavBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import GamesList from "./GamesList";
import MyGames from "./MyGames";
import Login from "./Login";
import Signup from "./Signup";
import Game from "./Game";

function App() {

  const [games, setGames] = useState([]);
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false)

  console.log("logged in", loggedIn)

  const loginUser = currentUser => {
    setUser(currentUser)
    setLoggedIn(true)
  }

  const logoutUser = () => {
    setUser({})
    setLoggedIn(false)
  }

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => loginUser(user));
      }
    })

     {
      fetch("/games")
      .then((r) => r.json())
      .then(setGames);
    }
  }, []);
  
  return (
    <Router>
      <NavBar loggedIn={ loggedIn } logoutUser={ logoutUser } currentUser={user}/>
      <Routes>
        <Route path="/" element={<Home user={user}/>}/>
        <Route path="/gameslist" element={<GamesList games={games} setGames={setGames}/>}/>
        <Route path="/mygames" element={<MyGames loggedIn={loggedIn} games={games} user={user} setUser={setUser}/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login onLogin={loginUser}/>}/>
        <Route path="/games/:id" element={<Game loggedIn={loggedIn} games={games} user={user} setUser={setUser}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
