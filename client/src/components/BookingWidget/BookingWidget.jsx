import React, { useContext, useState } from 'react'
import "./BookingWidget.css"
import { useUserContext } from '../../hooks/useUserContext';
import axios from 'axios';
import { BackendLink } from '../App/App';
import { useNavigate } from 'react-router-dom';

const BookingWidget = (props) => {
    const place = props.place
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate()
    const { user } = useUserContext()

    let numberOfNights = 1;

    const bookThisPlace = async () => {
        const response = await axios.post(`${BackendLink}/bookings`, {
            checkIn, checkOut, numberOfGuests, name, phone, user: user.email,
            place: place._id,
            price: numberOfNights * place.price,
        });
        const bookingId = response.data._id;
        navigate(`/profile/bookings/${bookingId}`);
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
                            required={true}
                            onChange={ev => setCheckIn(ev.target.value)} />
                    </div>
                    <div>
                        <label>Check out:</label>
                        <input type="date" required={true} value={checkOut}
                            onChange={ev => setCheckOut(ev.target.value)} />
                    </div>
                </div>
                <div>
                    <label>Number of guests:</label>
                    <input type="number"
                        required={true}
                        value={numberOfGuests}
                        onChange={ev => setNumberOfGuests(ev.target.value)} />
                </div>
                {numberOfNights > 0 && (
                    <div>
                        <label>Your full name:</label>
                        <input type="text"
                            required={true}
                            value={name}
                            onChange={ev => setName(ev.target.value)} />
                        <label>Phone number:</label>
                        <input type="tel"
                            required={true}
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