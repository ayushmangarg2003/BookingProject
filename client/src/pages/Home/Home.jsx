import React from 'react'
import { Link } from "react-router-dom"
import { HOTELS, HOME_DESC, HOME_HEAD, SATISFACTION, YEARS, HOMEBTNTEXT } from '../../utils/data'
import homeIMG from "../../assets/homeIMG.webp"
import homeIMG2 from "../../assets/1.webp"
import homeIMG3 from "../../assets/2.webp"
import homeIMG4 from "../../assets/3.webp"
import "./Home.css"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';


const Home = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

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
        <AutoplaySlider play={true} interval={3000} cancelOnInteraction={false}
          className='slider'>
          <div className='slider-child'>
            <img className='home-img' src={homeIMG} alt="" />
          </div>
          <div className='slider-child'>
            <img className='home-img' src={homeIMG2} alt="" />
          </div>
          <div className='slider-child'>
            <img className='home-img' src={homeIMG3} alt="" />
          </div>
          <div className='slider-child'>
            <img className='home-img' src={homeIMG4} alt="" />
          </div>
        </AutoplaySlider>
      </div>
    </div>
  )
}

export default Home