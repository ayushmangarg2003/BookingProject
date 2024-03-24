import React, { useEffect, useState } from 'react'
import ProfileNavbar from '../../components/ProfileNavbar/ProfileNavbar';
import "./ProfilePlaces.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BackendLink } from '../../components/App/App';
import PlaceCard from '../../components/PlaceCard/PlaceCard';
import { useUserContext } from '../../hooks/useUserContext';
import noPlace from "../../assets/noPlaces.svg"

const ProfilePlaces = () => {
  const { user } = useUserContext()
  const [empty, setEmpty] = useState(true)

  const [placesArray, setPlacesArray] = useState([])

  useEffect(() => {
    axios.get(`${BackendLink}/places`).then(response => {
      const { data } = response;
      setPlacesArray(data)
    });

    if (placesArray.filter(checkPlace).length > 0) {
      setEmpty(false)
    }

  }, [placesArray]);

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
          empty ? (
            <div className='no-data-found'>
              <img src={noPlace} alt="Nothing Here Yet" />
              <h2>Nothing Here Yet</h2>
            </div>
          ) : (

            placesArray.filter(checkPlace).map((item) => (
              <PlaceCard to={'/profile/places'} key={item._id} place={item} />
            ))
          )
        }

      </div>
    </div>)
}

export default ProfilePlaces