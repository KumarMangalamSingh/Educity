import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
function Hero() {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We insure Better Education for better World.</h1>
        <p>Our cutting edge curriculum is designed for the students to upskill and being a step ahead from the competition of the world.</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
