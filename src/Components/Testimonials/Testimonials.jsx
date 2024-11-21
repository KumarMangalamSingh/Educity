import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import  user_1 from '../../assets/user-1.png'
import  user_2 from '../../assets/user-2.png'
import  user_3 from '../../assets/user-3.png'
import  user_4 from '../../assets/user-4.png'

function Testimonials() {

    const slider=useRef();
    let tx=0;
const SlideForward=()=>{
if(tx>-50){
    tx-=25;
}
slider.current.style.transform=`translate(${tx}%)`;
}
const SlideBackward=()=>{
if(tx<0){
    tx+=25;
}
slider.current.style.transform=`translate(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt=""  className='next-btn' onClick={SlideForward}/>
      <img src={back_icon} alt=""  className='back-btn' onClick={SlideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li> 
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                    <div>
                        <h3>Siri</h3>
                        <span>MicroSoft,Noida</span>
                    </div>  
                    </div>
                    <p> Choosing Edusity to pursue my masters was one of the best decision I've ever made. The Supportive Faculty,World class Infrastructure,Coding Environment had truely helps me in becoming what i am today.</p>
                </div>
            </li>

            <li> 
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                    <div>
                        <h3>Vinay</h3>
                        <span>Cognizant,Noida</span>
                    </div>  
                    </div>
                    <p> Choosing Edusity to pursue my masters was one of the best decision I've ever made. The Supportive Faculty,World class Infrastructure,Coding Environment had truely helps me in becoming what i am today.</p>
                </div>
            </li>

            <li> 
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                    <div>
                        <h3>Jenny</h3>
                        <span>Wipro,Noida</span>
                    </div>  
                    </div>
                    <p> Choosing Edusity to pursue my masters was one of the best decision I've ever made. The Supportive Faculty,World class Infrastructure,Coding Environment had truely helps me in becoming what i am today.
                    </p>
                </div>
            </li>

            <li> 
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                    <div>
                        <h3>Ayush</h3>
                        <span>Google,Gurugram</span>
                    </div>  
                    </div>
                    <p> Choosing Edusity to pursue my masters was one of the best decision I've ever made. The Supportive Faculty,World class Infrastructure,Coding Environment had truely helps me in becoming what i am today.</p>
                </div>
            </li>
         
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
