import React, { useState } from 'react'
import logo from "../../assets/icon.svg"
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { COMPANY_NAME_1, COMPANY_NAME_2 } from '../../utils/data';

const Navbar = () => {
  const { user } = useContext(UserContext);
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state)
  }
  return (
    <div className='navbar-parent'>
      <div className="nav-left">
        <Link to={'/'} className='logo-link'>
          <div className="logo-img"><i className="fa-solid fa-hotel"></i></div>
          {/* <div className="logo-name">ABC<p>DEF</p></div> */}
          <div className="logo-name">{COMPANY_NAME_1}<p>{COMPANY_NAME_2}</p></div>
        </Link>
      </div>
      {/*  */}
      <div className={state ? "nav-center active" : "nav-center"}>
        <div className="navlink" onClick={handleClick} ><Link className='navlink-link' to={'/places'}>Places</Link></div>
        <div className="navlink" onClick={handleClick} ><Link className='navlink-link' to={'/about'}>About</Link></div>
        <div className="navlink" onClick={handleClick} ><Link className='navlink-link' to={'/contact'}>Contact</Link></div>
      </div>

      <div className="nav-right">
        {user && (
          <div>
            <Link className='user-icon' to={`/profile`}><i className="fa-solid fa-user"></i></Link>
          </div>
        )}
        {!user && (
          <div className="login-btn"><Link className='navbar-login-link' to={'/login'}>Login</Link></div>
        )}
        <div className="hamburger-icon" onClick={handleClick}><i className={state ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i></div>
      </div>
    </div>
  )
}

export default Navbar