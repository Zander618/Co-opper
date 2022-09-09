import React from 'react'

const Login = () => {

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" />
        </div>

        <input type="submit" value="Login" />
      </form>
    </div>
  )
}


export default Login