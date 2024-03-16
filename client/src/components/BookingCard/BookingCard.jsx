import React from 'react'
import "./BookingCard.css"
import { Link } from 'react-router-dom'

const BookingCard = (props) => {
  const user = props.user
  return (
    <>
      <div>{user.user}</div>
    </>
  )
}

export default BookingCard