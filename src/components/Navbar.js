import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (window.pageYOffset > 0) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className="logo">PICKUP AT EASE</div>
      <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/location-hours">Location & Hours</NavLink>
          <a href="https://pickup-at-ease-frontend-dtzb.zeet-myteam34.zeet.app/login" target="_blank" rel="noopener noreferrer">Track Package</a>

          <NavLink to="/faq">FAQ</NavLink>
          {/* Replace the NavLink for Login with an <a> tag */}
          <a href="https://pickup-at-ease-frontend-dtzb.zeet-myteam34.zeet.app/login" target="_blank" rel="noopener noreferrer">Login</a>
      </div>

    </nav>
  );
};

export default Navbar;
