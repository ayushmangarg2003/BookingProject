import React from 'react'
import "./PlaceCard.css"
import { Link } from 'react-router-dom'

const PlaceCard = (props) => {
    return (
        <Link to={`/places/${props.place._id}`}>
            <div className="t-card">
                <div className="t-image">
                    <img src={props.place.photos[0]} alt="IMG" />
                </div>
                <h4>{props.place.title}</h4>
                <p>{props.place.description}</p>
            </div>
        </Link>
    )
}

export default PlaceCard