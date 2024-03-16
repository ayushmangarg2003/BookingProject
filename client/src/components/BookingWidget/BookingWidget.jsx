import React, { useContext, useState } from 'react'
import "./BookingWidget.css"
import { useUserContext } from '../../hooks/useUserContext';
import axios from 'axios';
import { BackendLink } from '../App/App';

const BookingWidget = (props) => {
    const place = props.place
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [redirect, setRedirect] = useState('');
    const { user } = useUserContext()

    let numberOfNights = 1;

    const bookThisPlace = async () => {
        const response = await axios.post(`${BackendLink}/bookings`, {
            checkIn, checkOut, numberOfGuests, name, phone, user: user.email,
            place: place._id,
            price: numberOfNights * place.price,
        });
        const bookingId = response.data._id;
        setRedirect(`/profile/bookings/${bookingId}`);
    }


    return (
        <div>
            <div>
                Price: ${place.price} / per night
            </div>
            <div>
                <div>
                    <div>
                        <label>Check in:</label>
                        <input type="date"
                            value={checkIn}
                            onChange={ev => setCheckIn(ev.target.value)} />
                    </div>
                    <div>
                        <label>Check out:</label>
                        <input type="date" value={checkOut}
                            onChange={ev => setCheckOut(ev.target.value)} />
                    </div>
                </div>
                <div>
                    <label>Number of guests:</label>
                    <input type="number"
                        value={numberOfGuests}
                        onChange={ev => setNumberOfGuests(ev.target.value)} />
                </div>
                {numberOfNights > 0 && (
                    <div>
                        <label>Your full name:</label>
                        <input type="text"
                            value={name}
                            onChange={ev => setName(ev.target.value)} />
                        <label>Phone number:</label>
                        <input type="tel"
                            value={phone}
                            onChange={ev => setPhone(ev.target.value)} />
                    </div>
                )}
            </div>
            <button onClick={bookThisPlace}>
                Book this place
                {numberOfNights > 0 && (
                    <span> ${numberOfNights * place.price}</span>
                )}
            </button>
        </div>)
}

export default BookingWidget