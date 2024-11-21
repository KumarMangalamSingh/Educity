import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "92786123-f172-4560-aa28-42bd6573ad44");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    }


  return (
    <div className='Contact'>
      <div className="contact-col">
        <h3> Send us a message <img src={msg_icon}alt="" /></h3>
        <p>Feel free to get in touch with us through contact form or find our contact information below. Your feedback,question and suggestion are very valueable for us. We will reach out to you very shortly and try to resolve your queries. </p>
        <ul>
            <li> <img src={mail_icon} alt="" /> Contact@mangalamjsx.dev</li>
            <li><img src={phone_icon} alt="" /> +91 767-676-7676</li>
            <li> <img src={location_icon} alt="" />Greater Noida,Delhi NCR</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='Name' placeholder='Enter Your Name' required />
            <label>Phone Number </label>
            <input type="tel" name='Phone' placeholder='Enter Your Mobile No ' required />
            <label> Write a message here:</label>
            <textarea name="Message"  rows="6" placeholder='Enter Your Message!' required></textarea>
            <button type='Submit' className='btn dark-btn'> Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
