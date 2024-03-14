import React, { useContext, useState } from 'react'
import { UserContext } from "../../context/UserContext";
import { Navigate } from 'react-router-dom'
import './Profile.css'
import axios from 'axios'
import { BackendLink } from "../../components/App/App"
import ProfileNavbar from '../../components/ProfileNavbar/ProfileNavbar';
import profilePic from "../../assets/profilePic.png"

const Profile = () => {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);
  async function logout() {
    await axios.post(`${BackendLink}/user/logout`);
    setRedirect('/');
    setUser(null);
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }

  if (!ready) {
    return 'Loading...';
  }

  if (ready && !user.name && !redirect) {
    return <Navigate to={'/login'} />
  }

  return (
    <div className='profile'>
      <div className='profile-nav-parent'>
        <ProfileNavbar />
      </div>
      <div className="profile-parent">
        <img src={profilePic} alt="" />
        <h1>Your Profile</h1>
        <p className='profile-details'>ID: {user._id}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <div onClick={logout} className="logout-btn">Logout</div>
      </div>
    </div>
  )
}

export default Profile