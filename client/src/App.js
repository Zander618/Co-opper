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

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <Home/>;


  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gameslist" element={<GamesList/>}/>
        <Route path="/mygames" element={<MyGames/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login onLogin={setUser}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
