import React from 'react'
import "./BookingCard.css"

const BookingCard = (props) => {
    const user = props.user
  return (
    <div>{user.user}</div>
  )
}

export default BookingCard