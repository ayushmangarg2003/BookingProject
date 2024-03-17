import React from 'react'
import { Link } from "react-router-dom"
import { HOTELS, HOME_DESC, HOME_HEAD, SATISFACTION, YEARS, HOMEBTNTEXT } from '../../utils/data'
import homeIMG from "../../assets/homeIMG.webp"
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
        <AutoplaySlider play={true} interval={4000} cancelOnInteraction={false}
          className='slider'>
          <div className='slider-child'>
            <img className='home-img' src={homeIMG} alt="" />
          </div>
          <div className='slider-child'>
            <img className='home-img' src={"https://a0.muscache.com/im/pictures/miso/Hosting-1107324006803237403/original/dc5e7fd5-c11b-443c-a27e-dc0a420b0c31.jpeg?im_w=720"} alt="" />
          </div>
          <div className='slider-child'>
            <img className='home-img' src={"https://a0.muscache.com/im/pictures/prohost-api/Hosting-1071151527600994054/original/04db359a-fe81-4a33-a758-e3ceade4111c.jpeg?im_w=720"} alt="" />
          </div>
          <div className='slider-child'>
            <img className='home-img' src={"https://a0.muscache.com/im/pictures/miso/Hosting-1085609883109987271/original/35f8ee85-8678-478c-af14-56caf1418713.jpeg?im_w=720"} alt="" />
          </div>
        </AutoplaySlider>
      </div>
    </div>
  )
}

export default Home