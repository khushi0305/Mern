import React from 'react'

const Login = () => {
  return (
    <div className='login-container'>
      <div className="mycard">
        <p className="brand">Brand Logo</p>
        <h2 className="text">Member Login</h2>
        {/* <p className="text">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima ut soluta
      error assumenda exercitationem saepe, eligendi necessitatibus ipsam!
      Accusamus, dolores.
    </p> */}
        <form>
          <label htmlFor="email">Email</label>
          <input className="myinput" type="email" />
          <label htmlFor="password">Password</label>
          <input className="myinput" type="password" />
          <button className="mybtn">Login</button>
        </form>
      </div>

    </div>
  )
}

export default Login