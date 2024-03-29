import React, { useEffect, useState } from 'react'
import "./BookingCard.css"
import { format } from "date-fns";
import axios from 'axios'
import { BackendLink } from '../App/App'
import Shimmer from '../Shimmer/Shimmer';


const BookingCard = (props) => {
  const [place, setPlace] = useState({
    photos: []
  })
  const booking = props.user
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    axios.get(`${BackendLink}/places/${booking.place}`).then(response => {
      const { data } = response;
      setPlace(data)
      setLoading(false)
    });
  }, []);

  return <>
    {
      loading ? (<Shimmer/>) :
        (
          <div className='booking-card'>
            <div className="booking-card-left">
              <img src={place.photos[0]} alt="Photo" />
            </div >
            <div className="booking-card-right">
              <div className="upper-text">
                <h2>{place.title}</h2>
                <p>{place.address}</p>
              </div>
              <div className="booking-timings">
                <div><i className="fa-regular fa-calendar-days"></i> {format(new Date(booking.checkIn), 'dd/MM/yyyy')}</div>
                <div className='timing-arrow'> <i className="fa-solid fa-arrow-right-long"></i> </div>
                <div><i className="fa-regular fa-calendar-days"></i> {format(new Date(booking.checkOut), 'dd/MM/yyyy')}</div>
              </div>
              <div className="bottom-details">

                <div><i className="fa-solid fa-user-group"></i> {booking.numberOfGuests}</div>
                <div>₹{booking.price}</div>
              </div>
            </div>
          </div >
        )
    }
  </>
}

export default BookingCard