import React, { useEffect, useState } from 'react'
import "./Bookings.css"
import ProfileNavbar from '../../components/ProfileNavbar/ProfileNavbar';
import axios from 'axios';
import { BackendLink } from '../../components/App/App';
import { useUserContext } from '../../hooks/useUserContext';
import BookingCard from '../../components/BookingCard/BookingCard';

const Bookings = () => {
  const { user } = useUserContext()
  const [bookingArray, setBookingArray] = useState([])

  useEffect(() => {
    axios.get(`${BackendLink}/bookings`).then(response => {
      const { data } = response;
      setBookingArray(data)
    });
  }, []);

  const checkPlace = (booking) => {
    return booking.user == user.email
  }


  return (
    <div className="bookings">
      <div className='profile-nav-parent'>
        <ProfileNavbar />
      </div>
      <div>
        
          {
            bookingArray.filter(checkPlace).map((item) => (
              // <PlaceCard to={'/profile/places'} key={item._id} place={item} />
                <BookingCard user={item}/>
              
            ))
          }
        
      </div>
    </div>
  )
}

export default Bookings