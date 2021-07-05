import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo.png';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <img src={Logo} alt="Logo" />
            <Link to='/About'>Our Story</Link>
            <Link to='/'>Team</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Contact Us</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Office</h2>
            <p className="address"><i class="fas fa-map-marker-alt"></i>   Co-working Space 
Accelerate prosperity,
Konodas, <br></br>Gilgit, Gilgit-Baltistan</p>
          </div>
      

          <div class='footer-link-items'>
            <h2>Follow Us</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>LinkedIn</Link>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
