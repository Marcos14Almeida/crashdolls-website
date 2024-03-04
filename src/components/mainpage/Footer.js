import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import instagramIcon from '../../assets/icons/instagram-icon-white.png';
import youtubeIcon from '../../assets/icons/youtube-icon-white.png';
import spotifyIcon from '../../assets/icons/spotify-icon-white.png';

const Footer = () => {
  return (
    <footer className="footer" id="contact">

      <h1 className="pink-title">Crashdolls</h1>

      <div>
        <h1 className="contact">Contact</h1>
        <h1 className="contact-info">marcos.10palmeida@gmail.com</h1>
        <h1 className="contact-info">+55 11 94667-5009</h1>
      </div>
      
      <div className="social-media-footer">
        <a href="https://www.instagram.com/marcos14maso/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="instagram-icon" />
        </a>
        <a href="https://www.youtube.com/@marcosalmeida6635" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="youtube" className="youtube-icon" />
        </a>
        <a href="https://www.spotify.com/marcos14maso/" target="_blank" rel="noopener noreferrer">
          <img src={spotifyIcon} alt="spotify" className="spotify-icon" />
        </a>
      </div>

    </footer>
  );
};

export default Footer;
