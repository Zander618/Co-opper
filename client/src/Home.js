import React from "react";
import "./Game.css";
import Login from "./Login";

const Home = ({ loggedIn, setUser, setLoggedIn}) => {
  return (
    <div>
      {loggedIn ? (
      <div>
        <h1 style={{ textAlign: "center" }}>Welcome</h1>
        <p
          style={{
            textAlign: "center",
            padding: 20,
            overflowWrap: "break-word",
          }}
        >
          {" "}
          This is a co-opperative website in all terms. The website is designed
          to help people find co-op games to play with a partner. We also rely
          on others to cooperate and add games to our hopefully evergrowing list
          to help others find new games. Add a review to mark that you have
          played any game within the list.
        </p>
        <div className="center">
          <img
            src="https://cdn.pixabay.com/photo/2018/03/07/00/59/technology-3205024_960_720.jpg"
            alt="couch"
          />
        </div>
        
      </div>
      ) : (
        <Login setUser={setUser} setLoggedIn={setLoggedIn}/>
      )}
    </div>
  );
};

export default Home;
