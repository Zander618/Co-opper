import React, { useState } from "react";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [alerts, setAlerts] = useState([])
  const [errors, setErrors] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/password/forgot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: email}),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setErrors([])
          setAlerts(data.alerts)
        })
      } else {
        r.json().then((data) => {
          setAlerts([])
          setErrors(data.errors)
        })
      }
    })
  }

  return (
    <div>
      {/* <h1>Work in progress</h1> */}
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      {console.log(alerts)}
      {console.log(errors)}
    </div>
  );
};

export default PasswordReset;