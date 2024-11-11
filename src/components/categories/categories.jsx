import React from 'react';
import { Card } from 'react-bootstrap';
import daura from '../../assets/Feature_resturant/daura.png';
import '../categories/categories.css';
import chai from '../../assets/Feature_resturant/chai.png';
import burger from '../../assets/Feature_resturant/burger.png';
import momo from '../../assets/Feature_resturant/momo.png';


const Page = () => {
  return (
    <>
      {/* Feature Restaurants Section */}
      <div className='Feature-categories'>
        <div className='container-fluid feature-header'>
          <h1 className='title'>Feature Restaurants</h1>
          <h1 className='see-more'>
            See More
            <span className='arrow' style={{ marginLeft: '10px', position: 'relative', top: '5px'}}>&#8594;</span> {/* Right arrow */}
          </h1>
        </div>
      </div>
      
      {/* Flexbox for Cards */}
      <div className='card-wrapper'>
        {/* Card Section with Image and Eclipse */}
        <div className="card-container">
          <div className="card-background">
            <div className='card-rating'>
              <span className="rating-text">4.0</span>
              <span className="rating-star">&#9733;</span> {/* Unicode for star */}
            </div>
            <div className="card-eclipse">
              <img src={daura} alt="Daura Restaurant" className="card-image" />
            </div>
          </div>
          <Card.Body className="card-body">
            <Card.Title>Daura Restaurant</Card.Title>
            <Card.Text>
              <span style={{ marginRight: '8px' }}>
                <i className="fas fa-map-marker-alt" style={{ color: 'transparent', WebkitTextStroke: '1px black' }}></i>
              </span>
              Kaushaltar, Bhaktapur
            </Card.Text>
          </Card.Body>
        </div>
        
        {/* Another card */}

      {/* Flexbox for Cards */}
        {/* Card Section with Image and Eclipse */}
        <div className="card-container">
          <div className="card-background">
            <div className='card-rating'>
              <span className="rating-text">4.9</span>
              <span className="rating-star">&#9733;</span> {/* Unicode for star */}
            </div>
            <div className="card-eclipse">
              <img src={chai} alt="Daura Restaurant" className="card-image" />
            </div>
          </div>
          <Card.Body className="card-body">
            <Card.Title>Dari Ko Chaya Pasal</Card.Title>
            <Card.Text>
              <span style={{ marginRight: '8px' }}>
                <i className="fas fa-map-marker-alt" style={{ color: 'transparent', WebkitTextStroke: '1px black' }}></i>
              </span>
              Narephat, kathmandu
            </Card.Text>
          </Card.Body>
        </div>

        <div className="card-container">
          <div className="card-background">
            <div className='card-rating'>
              <span className="rating-text">4.5</span>
              <span className="rating-star">&#9733;</span> {/* Unicode for star */}
            </div>
            <div className="card-eclipse">
              <img src={burger} alt="Daura Restaurant" className="card-image" />
            </div>
          </div>
          <Card.Body className="card-body">
            <Card.Title>Burger house</Card.Title>
            <Card.Text>
              <span style={{ marginRight: '8px' }}>
                <i className="fas fa-map-marker-alt" style={{ color: 'transparent', WebkitTextStroke: '1px black' }}></i>
              </span>
              Shantinagar, kathmandu
            </Card.Text>
          </Card.Body>
        </div>

        <div className="card-container">
          <div className="card-background">
            <div className='card-rating'>
              <span className="rating-text">5.0</span>
              <span className="rating-star">&#9733;</span> {/* Unicode for star */}
            </div>
            <div className="card-eclipse">
              <img src={momo} alt="Daura Restaurant" className="card-image" />
            </div>
          </div>
          <Card.Body className="card-body">
            <Card.Title>Everest momo House</Card.Title>
            <Card.Text>
              <span style={{ marginRight: '8px' }}>
                <i className="fas fa-map-marker-alt" style={{ color: 'transparent', WebkitTextStroke: '1px black' }}></i>
              </span>
              saat Dobato, Lalitpur
            </Card.Text>
          </Card.Body>
          </div>
        </div>
    </>
  );
};

export default Page;
