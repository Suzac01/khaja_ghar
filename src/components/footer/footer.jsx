import React from 'react';
import './footer.css';
import Logo from '../../assets/Logo.png';
import facebook from '../../assets/footer_icons/facebook.png'
import instagram from '../../assets/footer_icons/instagram.png'
import twitter from '../../assets/footer_icons/twitter.png'



const Footer = () => {
  return (
    <footer className="footer-container" style={{borderTop: '2px solid rgba(128, 128, 128, 0.3'}}>
      <div className="footer-column">
        <ul>
          <img src={Logo} style={{width:'120px', padding:'10px'}}></img>
          <p style={{fontSize:'20px', padding: '10px'}}>
          Savour the artistry where every<br/>
          dish is culinary masterpiece.
        </p>
        <p style={{fontSize:'15px', padding: '10px', fontWeight:'bold'}}>Location: Baneshwor, Kathmandu</p>
        </ul>
      </div>
      <div className="footer-column"><br/>
        <h4 style={{padding: '2px'}}>Useful Links</h4><br/>
        <ul>
          <li style={{padding: '2px'}}>About Us</li>
          <li style={{padding: '2px'}}>Events</li>
          <li style={{padding: '2px'}}>FAQ</li>
        </ul>
      </div>
      <div className="footer-column"><br/>
        <h4 style={{padding: '2px'}}>Main Menu</h4><br/>
        <ul>
          <li style={{padding: '2px'}}>Home</li>
          <li style={{padding: '2px'}}>Menu</li>
          <li style={{padding: '2px'}}>Services</li>
        </ul>
      </div>
      <div className="footer-column"><br/>
        <h4 style={{padding: '2px'}}>Contact Us</h4><br/>
        <ul>
          <li style={{padding: '2px'}}>KhajaGhar@gmail.com</li>
          <li style={{padding: '2px'}}>+977 9865754201</li>
          <li>
          <div className="social-icons">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <img src={facebook} alt="Facebook"/>
  
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <img src={instagram} style={{marginLeft: '10px'}}  alt="Instagram" />
  
    <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
    <img src={twitter} style={{marginLeft: '10px'}}  alt="Twitter" />
  </a>
  </a>
  </a>
</div>
</li>
</ul></div>
</footer>

  );
};

export default Footer;
