import React, { useEffect, useState } from 'react'
import "./SinglePlace.css"
import { useLocation } from "react-router-dom";
import { BackendLink } from '../../components/App/App';
import axios from 'axios';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import BookingWidget from '../../components/BookingWidget/BookingWidget';

const SinglePlace = () => {
  const [place, setPlace] = useState({
    photos: [],
    perks: []
  })
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    axios.get(`${BackendLink}/places/${id}`).then(response => {
      const { data } = response;
      setPlace(data)
    });
  }, []);

  return (
    <div className='single-place-container'>
      <h1>{place.title}</h1>
      <div>{place.address}</div>
      <PhotoGallery place={place} />
      <div>
        <div>
          <div>
            <h2>Description</h2>
            {place.description}
          </div>
          Check-in: {place.checkIn}<br />
          Check-out: {place.checkOut}<br />
          Max number of guests: {place.maxGuests}
        </div>
        <div>
          <BookingWidget place={place} />
        </div>
      </div>
      <div>
        <div>
          <h2 >Extra info</h2>
        </div>
        <div>{place.extraInfo}</div>
      </div>
    </div>
  )
}

export default SinglePlace