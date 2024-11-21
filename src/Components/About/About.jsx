import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
function About() {
  return (

    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt=""  className='about-img'/>
        <img src={play_icon} alt=""  className='playicon'/>
      </div>

      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tommorw's Leaders Today</h2>
        <p>Embark on a transformative educational journey  with our University's comprehensive education Program to empower students with the knowledge &skills.</p>
        <p>With a focus on innovative,hands-on learning,and personalized mentorship, our progress prepare aspiring educators to make a meaningful impact in classrooms,schools and communities.</p>
        <p>Our state-of-the-art facilities, cutting-edge research, and collaborative learning environment ensure that students are equipped with the knowledge and skills needed to make meaningful contributions to society</p>
      </div>
    </div>
  )
}

export default About
