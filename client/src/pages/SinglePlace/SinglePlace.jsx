import React, { useEffect, useState } from 'react'
import "./SinglePlace.css"
import { useLocation } from "react-router-dom";
import { BackendLink } from '../../components/App/App';
import axios from 'axios';


const SinglePlace = () => {
  const [placeDetail, setPlaceDetail] = useState({
    photos: [],
    perks: []
  })
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    axios.get(`${BackendLink}/places/${id}`).then(response => {
      const { data } = response;
      setPlaceDetail(data)
    });
  }, []);

  return (
    <>
      <div className="images">
        {
          placeDetail.photos.map((item, index) => (
            <img key={index} src={item} alt="image" />
          ))
        }
      </div>
      <div className='place-title'>{placeDetail.title}</div>
      <div className='place-owner'>{placeDetail.owner}</div>
      <div className='place-desc'>{placeDetail.description}</div>
      <div className='place-address'>{placeDetail.address}</div>
      <div className="place-perks">
        {
          placeDetail.perks.map((item) => (
            <div key={item}> {item} </div>
          ))
        }
      </div>
      <div className='place-checkin'>{placeDetail.checkIn}</div>
      <div className='place-checkout'>{placeDetail.checkOut}</div>
      <div className='place-max'>{placeDetail.maxGuests}</div>
      <div className='place-price'>{placeDetail.price}</div>
      <div className='place-extra'>{placeDetail.extraInfo}</div>
    </>
  )
}

export default SinglePlace