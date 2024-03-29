import React, { useEffect, useState } from 'react'
import "./Bookings.css"
import ProfileNavbar from '../../components/ProfileNavbar/ProfileNavbar';
import axios from 'axios';
import { BackendLink } from '../../components/App/App';
import { useUserContext } from '../../hooks/useUserContext';
import BookingCard from '../../components/BookingCard/BookingCard';
import noData from "../../assets/noData.svg"

const Bookings = () => {
  const { user } = useUserContext()
  const [bookingArray, setBookingArray] = useState([])
  const [empty, setEmpty] = useState(true)

  useEffect(() => {
    axios.get(`${BackendLink}/bookings`).then(response => {
      const { data } = response;
      setBookingArray(data.reverse())
    });

    if (bookingArray.filter(checkPlace).length > 0) {
      setEmpty(false)
    }

  }, [bookingArray]);

  const checkPlace = (booking) => {
    return booking.user == user.email
  }


  return (
    <div className="bookings">
      <div className='profile-nav-parent'>
        <ProfileNavbar />
      </div>
      <div className='booking-card-parent'>
        {
          empty ? (
            <div className='no-data-found'>
              <img src={noData} alt="Empty...." />
              <h2>No Data Found</h2>
            </div>
          ) : (
            bookingArray.filter(checkPlace).map((item, index) => (
              <BookingCard key={index} user={item} />
            ))
          )


        }
      </div>
    </div>
  )
}

export default Bookings