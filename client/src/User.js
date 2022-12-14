// import React, { useState, useEffect } from "react";

// const UserContext = React.createContext();

// function UserProvider({ children }) {
//   const [games, setGames] = useState([]);
//   const [user, setUser] = useState(null);
//   const [loggedIn, setLoggedIn] = useState(false);

//   const loginUser = (currentUser) => {
//     setUser(currentUser);
//     setLoggedIn(true);
//   };

//   const logoutUser = () => {
//     setUser({});
//     setLoggedIn(false);
//   };

//   useEffect(() => {
//     fetch("/me").then((r) => {
//       if (r.ok) {
//         r.json().then((user) => loginUser(user));
//       }
//     });

//     fetch("/games")
//       .then((r) => r.json())
//       .then(setGames);
//   }, []);

//   console.log("logged in", loggedIn);
//   console.log("USER", user);

//   return (
//     <UserContext.Provider
//       value={{ user, setUser, games, setGames, loggedIn, setLoggedIn, loginUser, logoutUser }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// }

// export { UserContext, UserProvider };
