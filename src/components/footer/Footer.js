import React from 'react';
import './footer.css';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
import { MdInfoOutline } from 'react-icons/md';

const Footer = () => {
  const handleButtonClick = (event) => {
    event.preventDefault();
  };
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h2 className="footer-title">Youth Empowerment Network</h2>
          <p className="footer-description">We are committed to empowering youth worldwide through education, mentorship, and community support. Our mission is to provide opportunities for growth, development, and success for every young individual.</p>
          <div className="footer-contact">
            <div className="contact-item">
              <MdInfoOutline className="contact-icon" />
              <p>Phone: +123 456 789</p>
            </div>
            <div className="contact-item">
              <MdInfoOutline className="contact-icon" />
              <p>Email: info@yen.com</p>
            </div>
          </div>
          <div className="social-icons">
            <FaFacebookSquare className="social-icon" />
            <FaTwitterSquare className="social-icon" />
            <FaInstagramSquare className="social-icon" />
            <FaYoutubeSquare className='social-icon' />
          </div>
        </div>
        <div className="join-section">
          <h2 className="join-title">Join Us Now</h2>
          <p className="join-description">Join our community and be part of the Youth Empowerment Network. Together, we can make a difference!</p>
          <a href="" onClick={handleButtonClick} className="button">Get Involved</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
