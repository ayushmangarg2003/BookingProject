import React from 'react'
import "./PlaceCard.css"
import { Link } from 'react-router-dom'

const PlaceCard = (props) => {
    return (
        <div className="t-card">
            <Link className='place-card-link' to={`${props.to}/${props.place._id}`}>
                <div className="t-image">
                    <img src={props.place.photos[0]} alt="IMG" />
                </div>
                <div className="card-text">
                    <h4>{props.place.address}</h4>
                    <h2>{props.place.title}</h2>
                    <p>₹<span>{props.place.price} </span> without taxes</p>
                </div>
            </Link>
        </div>
    )
}

export default PlaceCard