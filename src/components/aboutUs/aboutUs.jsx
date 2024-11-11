import React from 'react';
import Image from '../../assets/aboutUs/background.png';
import logo from '../../assets/Logo.png'; // Use lowercase for consistency
import scooter from '../../assets/aboutUs/scooter.png';
import secondimg from '../../assets/aboutUs/secondimg.png'
import '../aboutUs/about.css';
import Footer from '../footer/footer.jsx';

const AboutUs = () => {
  return (
    <div className='container-full'>
      <div className='image'>
        <img src={Image} alt="About Us" className="background-image" />
        <img src={logo} alt="Logo" className="logo" />
        <img src={scooter} alt="Scooter" className="scooter" />
        <div className='container-fluid'>
        <h1 style={{marginTop:'380px', color: '#61e26e' }}>About Us</h1>
            <p style={{fontSize:'20px'}}>
            Nepal’s leading food delivery app with over 1000+ restaurants along with amazing deals and services. Discover a world of culinary delights and flavorful experiences with Khaja Ghar, your ultimate food destination. We specialize and offer four different services which include – super-fast delivery, on-time food pick-up, delightful dine-in experience, and last but not least, flowers will be delivered to your doorstep on special occasions for your loved ones.
            </p>
            <br/>
            <div className='row'>
              <div className='col-md-6'>
                <br/>
            <h3 style={{color: '#61e26e' }}>
                What We Offer
            </h3><br/>
            <ul style={{marginLeft:'20px', fontSize:'20px'}}>
                <li>
                Wide Variety of Choices: From local eateries to popular chains, our platform offers an extensive range of cuisines to satisfy every palate.
                </li><br/>
                <li>
                Fast and Reliable Delivery: We work with a network of trusted drivers to ensure your food arrives hot and on time.
                </li><br/>
                <li>
                Easy Ordering Process: Our user-friendly app and website make it simple to browse menus, place orders, and track deliveries.
                </li><br/>
                <li>
              Exclusive Deals and Offers: Enjoy special discounts and promotions available only through our platform.              
                </li><br/>
            </ul>
            </div>
            <div className='col-md-6'>
              <img src={secondimg} style={{marginTop:'30px', width:'100%'}}></img>
            </div>
            <div>
            <h4 style={{color: '#61e26e' }}>Our Story</h4>
            <p style={{fontSize:'20px'}}>
            Khaja Ghar was founded in 2005 by Lionel Messi, who were inspired by their love for food and technology. What started as a small operation has grown into a thriving business that serves thousands
            of customers every day. We are proud to support local restaurants and bring communities together through the joy of shared meals.
            </p><br/>

            <h4 style={{color: '#61e26e' }}>Join Our Community</h4><br/>
            <p style={{fontSize:'20px'}}>Become a part of the Khaja Ghar family today! Follow us on social media to stay updated on the latest news, promotions, and food trends. We love hearing from our customers, so feel free to reach out with any questions or feedback.
            Thank you for choosing Khaja Ghar We look forward to delivering happiness to your door, one meal at a time. </p>
          </div>
            </div>
            
            </div>
            <Footer/>
            </div>
          


        </div>
  );
};

export default AboutUs;
