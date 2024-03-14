import React from 'react'
import ProfileNavbar from '../../components/ProfileNavbar/ProfileNavbar';
import "./ProfilePlaces.css"
import { Link } from 'react-router-dom';

const ProfilePlaces = () => {
  return (
    <div className="profile-places">
      <div className='profile-nav-parent'>
        <ProfileNavbar />
      </div>
      <div className="profile-places-parent">
        <Link to={'/profile/places/new'} className="add-btn">
          <i className="fa-solid fa-plus"></i>
          <p>Add Places </p>
        </Link>
      </div>
    </div>)
}

export default ProfilePlaces