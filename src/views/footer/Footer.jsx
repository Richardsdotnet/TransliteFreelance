import React from 'react';
import '../../styles/footer/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section contact-section'>
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 123-456-7890</p>
          <p>123 Main Street, Cityville</p>
        </div>

        <div className='footer-section links-section'>
          <h3>Quick Links</h3>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/services'>Services</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contact'>Contact</a></li>
            <li><a href='/terms'>Terms of Service</a></li>
            <li><a href='/privacy'>Privacy Policy</a></li>
          </ul>
        </div>

        <div className='footer-section social-section'>
          <h3>Follow Us</h3>
          <div className='social-icons'>
            {/* Add your social media icons/links here */}
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>&copy; {new Date().getFullYear()} Your Freelancing Business. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
