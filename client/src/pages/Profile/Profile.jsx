import React, { useContext, useState } from 'react'
import { UserContext } from "../../context/UserContext";
import { Navigate } from 'react-router-dom'
import './Profile.css'
import axios from 'axios'
import { BackendLink } from "../../components/App/App"
import ProfileNavbar from '../../components/ProfileNavbar/ProfileNavbar';
import profilePic from "../../assets/profilePic.png"
import { useUserContext } from '../../hooks/useUserContext';
import { useLogout } from '../../hooks/useLogout'
const Profile = () => {
  const { user } = useUserContext()
  const { logout } = useLogout()

  const handleLogout = () => {
    logout()
  }

  return (
    <div className='profile'>
      <div className='profile-nav-parent'>
        <ProfileNavbar />
      </div>
      <div className="profile-parent">
        <img src={profilePic} alt="" />
        <h1>Your Profile</h1>
        {/* <p className='profile-details'>ID: {user._id}</p>
        <p>Name: {user.name}</p> */}
        <p>Email: {user.email}</p>
        <div onClick={handleLogout} className="logout-btn">Logout</div>
      </div>
    </div>
  )
}

export default Profile