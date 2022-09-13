import React, { useState, useEffect } from "react";
import Home from "./Home";
import NavBar from "./NavBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import GamesList from "./GamesList";
import MyGames from "./MyGames";
import Login from "./Login";
import Signup from "./Signup";

function App() {

  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false)

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
    });
  }, []);

  // if (!user) return <Home/>;


  return (
    <Router>
      <NavBar loggedIn={ loggedIn } logoutUser={ logoutUser } currentUser={user}/>
      <Routes>
        <Route path="/" element={<Home user={user}/>}/>
        <Route path="/gameslist" element={<GamesList/>}/>
        <Route path="/mygames" element={<MyGames/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login onLogin={loginUser}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
