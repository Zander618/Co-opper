import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Signup = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [reenteredPassword, setReenteredPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        navigate("/");
      } else {
        r.json().then((errorData) => setErrors(errorData.errors));
      }
    });
  }

  return (
    <div className="card">
      <div className="login-card">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          <div>
            <label htmlFor="password">Re-Enter Password: </label>
            <input
              type="password"
              id="reenteredPassword"
              value={reenteredPassword}
              onChange={(e) => setReenteredPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
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
          {errors.length > 0 && (
            <ul style={{ color: "red" }}>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}
          {password === reenteredPassword ? (
            <input type="submit" value="Create Account" />
          ) : (
            <p className="password-error-text"> * Passwords must match.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
