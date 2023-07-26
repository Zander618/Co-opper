import React, {useParams, useHistory} from "react";

function ResetPassword({ setUser }) {
  const [alerts, setAlerts] = useState([]);
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const params = useParams();
  const history = useHistory();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/password/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: params["token"],
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password2,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setUser(data.user);
          setErrors([]);
          setAlerts(data.alerts);
          setTimeout(() => {
            history.push("/");
          }, 2000);
        });
      } else {
        r.json().then((data) => {
          setAlerts([]);
          setErrors(data.errors);
        });
      }
    });
  }

  return (
    <div className="card">
      <div className="login-card">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Re-Enter Password: </label>
            <input
              type="password"
              id="reenteredPassword"
              value={formData.password2}
              onChange={handleChange}
            />
          </div>
          {password === password2 ? (
            <input type="submit" value="Create Account" />
          ) : (
            <p className="password-error-text"> * Passwords must match.</p>
          )}
        </form>
      </div>
      {console.log(errors)}
      {console.log(alerts)}
    </div>
  );
}

export default ResetPassword;
