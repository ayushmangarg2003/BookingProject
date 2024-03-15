import React, { useEffect, useState } from 'react'
import "./SinglePlace.css"
import { useParams } from 'react-router-dom'
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
  }, [placeDetail]);

  return (
    <>
      <div className="images">
        {
          placeDetail.photos.map((item, index) => (
            <img key={index} src={item} alt="image" />
          ))
        }
      </div>
      <div>{placeDetail.title}</div>
      <div>{placeDetail.owner}</div>
      <div>{placeDetail.description}</div>
      <div>{placeDetail.address}</div>
      <div className="perks">
        {
          placeDetail.perks.map((item) => (
            <div key={item}> {item} </div>
          ))
        }
      </div>
      <div>{placeDetail.checkIn}</div>
      <div>{placeDetail.checkOut}</div>
      <div>{placeDetail.maxGuests}</div>
      <div>{placeDetail.price}</div>
      <div>{placeDetail.extraInfo}</div>
    </>
  )
}

export default SinglePlace