import React from "react";
// import { useNavigate } from 'react-router-dom'
// import "./App.css";

const ResetPassword = ( { onLogin }) => {

//   const [email, setEmail] = useState("");
//   const[selectedUser, setSelectedUser] = useState([])
//   const navigate = useNavigate()

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch("/password/reset", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email
//       }),
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((user) => onLogin(user));
//         navigate("/")
//       }
//     });
//   }
  
  return (
    <div className="card">
      <h1>Reset Password</h1>
    {/* <div className="login-card">
      <h1>Enter email</h1>
      <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
          </div>
      </form>
    </div> */}
    </div>
  )
}

export default ResetPassword