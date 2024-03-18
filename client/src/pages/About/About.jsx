import React from 'react'
import "./About.css"
import { ABOUT, FACT_CARDS } from '../../utils/data'

const About = () => {
  return (
    <div className="about-page">

      <div className="about">
        <h2> About us</h2>
        <p>{ABOUT}</p>
      </div>

      <div className="about-stats">
        <h2>Fast Facts</h2>
        <div className="about-card-container">
          {
            FACT_CARDS.map((item, index) => (
              <div key={index} className="about-card">
                <div className="about-card-top">
                  <h1>{item.stat}</h1>
                  <h3>{item.desc}</h3>
                </div>
                <p>as of {item.date}</p>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default About