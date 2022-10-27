import React, { useState, useEffect } from "react";
import AddReview from "./AddReview";
import { useParams } from "react-router-dom";
import Review from "./Review";

const Reviews = ({ games, gameId, userId, setUser, user, reviews, setReviews, setGames }) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [game, setGame] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const game = games.find((g) => g.id.toString() === id);
    setGame(game);
  }, [id, games]);

  return user && games ? (
    <div>
      <button
        onClick={() => {
          setButtonPopup(true);
        }}
      >
        Add Review
      </button>
      <AddReview
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        gameId={gameId}
        userId={userId}
        setUser={setUser}
        user={user}
        game={game}
        games={games}
        setGame={setGame}
        setGames={setGames}
        reviews={reviews}
        setReviews={setReviews}
      />
      <div>
        <div>
          <h1>Reviews :</h1>
          <div>
            <Review game={game} reviews={reviews}/>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>...Loading</h1>
  )
};

export default Reviews;
