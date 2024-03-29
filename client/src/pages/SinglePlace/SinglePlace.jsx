import React, { useEffect, useState } from 'react'
import "./SinglePlace.css"
import { useLocation } from "react-router-dom";
import { BackendLink } from '../../components/App/App';
import axios from 'axios';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import BookingWidget from '../../components/BookingWidget/BookingWidget';
import ShimmerSingle from '../../components/Shimmer/ShimmerSingle';

const SinglePlace = () => {
  const [loading, setLoading] = useState(true)

  const [place, setPlace] = useState({
    photos: [],
    perks: []
  })

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    axios.get(`${BackendLink}/places/${id}`).then(response => {
      const { data } = response;
      setPlace(data)
      setLoading(false)
    });
  }, []);


  const [review, setReview] = useState([])
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    axios.get(`${BackendLink}/review/getReview`).then(response => {
      const { data } = response;
      setReview(data)
      setFiltered(review.filter(checkPlace))
    });
  }, [place]);

  const checkPlace = (review) => {
    return review.place == id
  }



  return <>
    {
      loading ? (<ShimmerSingle />) : (
        <div className='single-place-container'>
          <div className="top-container">
            <h1>{place.title}</h1 >
            <p>{place.address}</p>
            <PhotoGallery place={place} />
          </div >
          <div className='middle-container'>
            <div className='middle-text'>
              <div className='middle-desc'>
                <h2><i className="fa-solid fa-circle-info"></i> Description</h2>
                <p>{place.description}</p>
              </div>
              <div className="middle-numbers">
                <div className='middle-num'>
                  <i className="fa-solid fa-clock"></i>
                  Check-in: {place.checkIn}
                </div>
                <div className='middle-num'>
                  <i className="fa-solid fa-clock"></i>
                  Check-out: {place.checkOut}
                </div>
                <div className='middle-num'>
                  <i className="fa-solid fa-user-group"></i>
                  Maximum guests: {place.maxGuests}
                </div>
              </div>
            </div>
            <div className='book-widget'>
              <BookingWidget place={place} />
            </div>
          </div>
          <div className='bottom-container'>
            {
              place.extraInfo ? (
                <>
                  <div className='bottom-heading'>
                    <h2 ><i className="fa-solid fa-qrcode"></i> Extra info</h2>
                  </div>
                  <div className='bottom-text'>{place.extraInfo}</div>
                </>
              ) : (<div> </div>)
            }
          </div>
          <div className="review-container">
            <div className="bottom-heading">
              <h2><i className="fa-solid fa-book-open"></i> Reviews</h2>
            </div>
            <div className="reviews-parent">
              {
                filtered.map((item, index) => (
                  <div key={index} className="review">
                    <h4>{item.review}</h4>
                    <div></div>
                  </div>
                ))
              }
            </div>
          </div>
        </div >
      )
    }
  </>
}

export default SinglePlace