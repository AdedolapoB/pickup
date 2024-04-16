import React from 'react';
import './GetNotified.css'; // Ensure this is the correct path

const GetNotified = () => {
  // Add your notification logic here

  return (
    <div className="get-notified-container">
      <h2 className="notification-title">Get Notified</h2>
      <p className="notification-description">
        Enter your email below to receive updates on your package status.
      </p>
      <form className="notification-form">
        <input type="email" placeholder="Your Email" name="email" required />
        <a href="https://pickup-at-ease-frontend-dtzb.zeet-myteam34.zeet.app/login"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="notify-btn">Notify Me</a>
      </form>
    </div>
  );
};

export default GetNotified;
