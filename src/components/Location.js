import React from 'react';
import Footer from './Footer'; // Make sure this path is correct
import './Location.css'; // Make sure to create and style your LocationAndHours.css

const Location = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-info">
          <h2>GET IN TOUCH</h2>
          <p>Hey! We are looking forward to delivery your pacakge to your doorstep</p>
          <p className="contact-description">
            📦 At Pick-up at Ease, we are not just delivering packages we are delivering peace of mind. With our streamlined service, we are excited to bring the ease of online shopping straight to your doorstep. Get ready to experience the joy of hassle-free deliveries with a touch of personal care. Because for us, every parcel is a promise of your trust, delivered safely by our team. 🚚💨 #AtEaseDelivery #HassleFreeShopping #DoorstepDelivery
          </p>
          <div className="social-links">
            {/* Icons can be sourced from a library like FontAwesome */}
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            {/* Repeat for other social icons */}
          </div>
        </div>
        <div className="contact-details">
          <div className="phone-details">
            <h3>CALL US</h3>
            <p>1 (416) 835-3154</p>
            <p>1 (249) 876-7910</p>
          </div>
          <div className="location-details">
            <h3>LOCATION</h3>
            <p>5, Rowntree Road, Toronto, Canada</p>
            <p>37, Moon Valley Dr, Toronto, Canada</p>
            <p>2267, Islington Avenue, Toronto, Canada</p>
            <p>1, Amaron Avenue, Brampton, Canada</p>
          </div>
          <div className="hours-details">
            <h3>BUSINESS HOURS</h3>
            <p>Mon – Fri ...... 10 am - 8 pm</p>
            <p>Sat, Sun ...... Closed</p>
          </div>
        </div>
        <div className="contact-form">
          <input type="text" placeholder="Enter your Name" />
          <input type="email" placeholder="Enter a valid email address" />
          <textarea placeholder="Enter your message"></textarea>
          <button type="submit">Submit</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Location;
