import React from 'react'
import '../styles/ContactUs.css';

function ContactUs() {
  return (
    <div className="contact">
        <div className="contactUs">
        <h2>Contact Us</h2>
        <p>Phone: (123) 456-7890</p>
        <p>Email: clinic@example.com</p>
        <p>Fax: (123) 456-7891</p>
        <p>Hours: Monday to Friday, 8:00 AM to 5:00 PM</p>

      </div>
      <div className="location">
        <h2>Location</h2>
        <img src='../map.png' alt='map' className='map' />
        <p>Address: 3280 Hospital Dr NW, Calgary, AB T2N 4Z6</p>
      </div>

    </div>
  )
}

export default ContactUs