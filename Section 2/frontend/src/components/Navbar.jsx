import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = ({mycart, loggedIn}) => {
  console.log(mycart);

  const showLoginOptions = () => {
    if(loggedIn){
      return <li className='nav-item'>
        <button className='btn btn-danger'>Logout</button>
      </li>
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bg-danger">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">
           Signup
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/event">
           Event Handling
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/state">
           State Management
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/post">
           Post
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/todo">
           Todo List
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/list">
           Product List
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/chat">
           Chat
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/dev">
           Dev Web
          </NavLink>
        </li>
        <li className="nav-item">
           <h4>Cart Items : {mycart}</h4>
        </li>

        {showLoginOptions()}
      </ul>
      {/* <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-dark" type="submit">
          Search
        </button>
      </form> */}
    </div>
  </div>
</nav>

  )
}

export default Navbar;