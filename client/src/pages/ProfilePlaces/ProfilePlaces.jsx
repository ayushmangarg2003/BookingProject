import React, { useEffect, useState } from 'react'
import ProfileNavbar from '../../components/ProfileNavbar/ProfileNavbar';
import "./ProfilePlaces.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BackendLink } from '../../components/App/App';
import PlaceCard from '../../components/PlaceCard/PlaceCard';
import { useUserContext } from '../../hooks/useUserContext';

const ProfilePlaces = () => {
  const { user } = useUserContext()

  const [placesArray, setPlacesArray] = useState([])

  useEffect(() => {
    axios.get(`${BackendLink}/places`).then(response => {
      const { data } = response;
      setPlacesArray(data)
    });
  }, []);

  const checkPlace = (place) => {
    return place.owner == user.email
  }

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
      <div className="my-places">
        {
          placesArray.filter(checkPlace).map((item) => (
            <PlaceCard key={item._id} place={item} />
          ))
        }
      </div>
    </div>)
}

export default ProfilePlaces