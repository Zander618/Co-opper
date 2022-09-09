import React from 'react'

const Signup = () => {
  return (
    <div>
      <h1>Create Account</h1>
      <form>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password"/>
        </div>

        <input type="submit" value="Create Account" />
      </form>
    </div>
  )
}

export default Signup