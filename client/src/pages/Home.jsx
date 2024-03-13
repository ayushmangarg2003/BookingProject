import React from 'react'
import { Link } from "react-router-dom"
import { HOTELS, HOME_DESC, HOME_HEAD, SATISFACTION, YEARS, HOMEBTNTEXT } from '../utils/data'
import homeIMG from "../assets/homeBG.jpg"

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <h1>{HOME_HEAD}</h1>
        <p>{HOME_DESC}</p>
        <Link className='home-btn' to={'/places'}>{HOMEBTNTEXT}</Link>
        <div className="stats">
          <div className="stat">
            <h2>{YEARS}</h2>
            <p>Years </p>
          </div>
          <div className="stat">
            <h2>{HOTELS}</h2>
            <p>Hotels</p>
          </div>
          <div className="stat">
            <h2>{SATISFACTION}</h2>
            <p>Satisfaction</p>
          </div>
        </div>
      </div>
      <div className="home-right">
        {/* <img className='home-img' src={homeIMG} alt="" /> */}
      </div>
    </div>
  )
}

export default Home