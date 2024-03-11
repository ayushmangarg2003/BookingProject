import React from 'react'
import logo from "../assets/icon.svg"
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="navbar">
      <Link to={'/'} className="left">
        <img src={logo} alt="logo" />
        <p>aircnc</p>
      </Link>
      <div className="center">
        <Link to={'/places'}>Places</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
      </div>
      <div className="right">
        {
          user ? (
            <Link className='rightbtn' to={'/profile'}>
              <p>{user.name}</p>
              <i class="fa-regular fa-user"></i>
            </Link>
          ) : (
            <Link className='rightbtn' to={'/login'}>
              LOGIN
            </Link>
          )
        }
        <div className="hamburger">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar