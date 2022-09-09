import React from "react"
import Home from "./Home";
import NavBar from "./NavBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import GamesList from "./GamesList";
import MyGames from "./MyGames";


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gameslist" element={<GamesList/>}/>
        <Route path="/mygames" element={<MyGames/>}/>
      </Routes>
    </Router>
  );
}

export default App;
