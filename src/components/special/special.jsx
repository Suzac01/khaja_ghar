import React from 'react';
import './special.css'; // Custom styles for this component
import salad from '../../assets/special_pics/salad.png';
import burger from '../../assets/special_pics/burger.png';
import momo from '../../assets/special_pics/momo.png';
import pasta from '../../assets/special_pics/pasta.png';
import coconut from '../../assets/special_pics/coconut.png';
import veg from '../../assets/special_pics/veg.png';
import chowmein from '../../assets/special_pics/chowmein.png';
import alu from '../../assets/special_pics/sadeko_alu.png';


const SpecialDishes = () => {

  return (
    <>
      {/* Special Dishes Section */}
      <div className='special-categories'  style={{borderTop: '2px solid rgba(128, 128, 128, 0.3'}}>
        <div className='container-fluid special-header'>
          <h1 className='special-title'>Special Dishes</h1>
          <h1 className='special-see-more'>
            See More
            <span className='special-arrow' style={{marginLeft: '10px', position: 'relative', top: '5px'}}>&#8594;</span> {/* Right arrow */}
          </h1>
        </div>
      </div>
      
      {/* Flexbox for Special Dish Cards */}
      <div className='special-card-wrapper'>
  <div className="special-card-container">
    <div className="favorite-effect">
      <span className="favorite-icon">&#10084;&#65039;</span> {/* Unicode for red heart */}
    </div>
    <div className="special-card-background">
      <div className="special-card-rating"></div>
      <div className="special-card-eclipse">
        <img src={salad} alt="Special Dish 1" className="special-card-image" />
      </div>
    </div>
    <div style={{ fontWeight: 'bold' }} className="special-card-body">
      <h5 style={{ fontSize: '22px' }}>Fattoush salad</h5>
      <p style={{ opacity: '60%' }}>Salad House - Lokanthali</p>
      <div className="special-delivery">
        <span className="delivery-icon">&#128666;</span> {/* Unicode for truck icon */}
        <span className="delivery-text" style={{ fontWeight: 'bold', opacity: '0.6' }}>Free Delivery</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ color: 'red', fontWeight: 'bold', marginRight: '10px' }}>Rs.350</span>
        <span style={{ color: 'red', fontSize: '12px', textDecoration: 'line-through', marginRight: '8px' }}>400</span>
        <span className="special-rating-text" style={{ marginLeft: '115px', fontSize: '20px' }}>4.9</span>
        <span className="special-rating-star" style={{ marginLeft: '6px', marginTop: '-3px' }}>&#9733;</span> {/* Unicode for star */}
      </div>
    </div>
  </div>

  <div className="special-card-container">
    <div className="favorite-effect">
      <span className="favorite-icon">&#10084;&#65039;</span> {/* Unicode for red heart */}
    </div>
    <div className="special-card-background">
      <div className="special-card-rating"></div>
      <div className="special-card-eclipse">
        <img src={burger} alt="Special Dish 1" className="special-card-image" />
      </div>
    </div>
    <div style={{ fontWeight: 'bold' }} className="special-card-body">
      <h5 style={{ fontSize: '22px' }}>Chicken Burger</h5>
      <p style={{ opacity: '60%' }}>Burger House - Balkumari</p>
      <div className="special-delivery">
        <span className="delivery-icon">&#128666;</span> {/* Unicode for truck icon */}
        <span className="delivery-text" style={{ fontWeight: 'bold', opacity: '0.6' }}>Free Delivery</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ color: 'red', fontWeight: 'bold', marginRight: '10px' }}>Rs.150</span>
        <span style={{ color: 'red', fontSize: '12px', textDecoration: 'line-through', marginRight: '8px' }}>175</span>
        <span className="special-rating-text" style={{ marginLeft: '115px', fontSize: '20px' }}>4.5</span>
        <span className="special-rating-star" style={{ marginLeft: '6px', marginTop: '-3px' }}>&#9733;</span> {/* Unicode for star */}
      </div>
    </div>
    </div>

    <div className="special-card-container">
    <div className="favorite-effect">
      <span className="favorite-icon">&#10084;&#65039;</span> {/* Unicode for red heart */}
    </div>
    <div className="special-card-background">
      <div className="special-card-rating"></div>
      <div className="special-card-eclipse">
        <img src={momo} alt="Special Dish 1" className="special-card-image" />
      </div>
    </div>
    
    <div style={{ fontWeight: 'bold' }} className="special-card-body">
      <h5 style={{ fontSize: '22px' }}>Chicken Momo</h5>
      <p style={{ opacity: '60%' }}>Everest Momo Center - Balkot</p>
      <div className="special-delivery">
        <span className="delivery-icon">&#128666;</span> {/* Unicode for truck icon */}
        <span className="delivery-text" style={{ fontWeight: 'bold', opacity: '0.6' }}>Free Delivery</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ color: 'red', fontWeight: 'bold', marginRight: '10px' }}>Rs.140</span>
        <span style={{ color: 'red', fontSize: '12px', textDecoration: 'line-through', marginRight: '8px' }}>200</span>
        <span className="special-rating-text" style={{ marginLeft: '115px', fontSize: '20px' }}>5.0</span>
        <span className="special-rating-star" style={{ marginLeft: '6px', marginTop: '-3px' }}>&#9733;</span> {/* Unicode for star */}
      </div>
    </div>
</div>

<div className="special-card-container">
    <div className="favorite-effect">
      <span className="favorite-icon">&#10084;&#65039;</span> {/* Unicode for red heart */}
    </div>
    <div className="special-card-background">
      <div className="special-card-rating"></div>
      <div className="special-card-eclipse">
        <img src={pasta} style={{}} alt="Special Dish 1" className="special-card-image" />
      </div>
    </div>

    <div style={{ fontWeight: 'bold' }} className="special-card-body">
      <h5 style={{ fontSize: '22px' }}>Chicken Pasta</h5>
      <p style={{ opacity: '60%' }}>Suraj Hotel - Chabahil</p>
      <div className="special-delivery">
        <span className="delivery-icon">&#128666;</span> {/* Unicode for truck icon */}
        <span className="delivery-text" style={{ fontWeight: 'bold', opacity: '0.6' }}>Free Delivery</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ color: 'red', fontWeight: 'bold', marginRight: '10px' }}>Rs.215</span>
        <span style={{ color: 'red', fontSize: '12px', textDecoration: 'line-through', marginRight: '8px' }}>250</span>
        <span className="special-rating-text" style={{ marginLeft: '115px', fontSize: '20px' }}>4.6</span>
        <span className="special-rating-star" style={{ marginLeft: '6px', marginTop: '-3px' }}>&#9733;</span> {/* Unicode for star */}
      </div>
    </div>
    </div>

    <div className="special-card-container">
    <div className="favorite-effect">
      <span className="favorite-icon">&#10084;&#65039;</span> {/* Unicode for red heart */}
    </div>
    <div className="special-card-background">
      <div className="special-card-rating"></div>
      <div className="special-card-eclipse">
        <img src={alu} alt="Special Dish 1" className="special-card-image" />
      </div>
    </div>

    <div style={{ fontWeight: 'bold' }} className="special-card-body">
      <h5 style={{ fontSize: '22px' }}>Sadeko Alu</h5>
      <p style={{ opacity: '60%' }}>Suraj Hotel - Chabahil</p>
      <div className="special-delivery">
        <span className="delivery-icon">&#128666;</span> {/* Unicode for truck icon */}
        <span className="delivery-text" style={{ fontWeight: 'bold', opacity: '0.6' }}>Free Delivery</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ color: 'red', fontWeight: 'bold', marginRight: '10px' }}>Rs.215</span>
        <span style={{ color: 'red', fontSize: '12px', textDecoration: 'line-through', marginRight: '8px' }}>250</span>
        <span className="special-rating-text" style={{ marginLeft: '115px', fontSize: '20px' }}>4.6</span>
        <span className="special-rating-star" style={{ marginLeft: '6px', marginTop: '-3px' }}>&#9733;</span> {/* Unicode for star */}
      </div>
    </div>
    </div>
    <div className="special-card-container">
    <div className="favorite-effect">
      <span className="favorite-icon">&#10084;&#65039;</span> {/* Unicode for red heart */}
    </div>
    <div className="special-card-background">
      <div className="special-card-rating"></div>
      <div className="special-card-eclipse">
        <img src={chowmein} alt="Special Dish 1" className="special-card-image" />
      </div>
    </div>

    <div style={{ fontWeight: 'bold' }} className="special-card-body">
      <h5 style={{ fontSize: '22px' }}>Buff Chowmin</h5>
      <p style={{ opacity: '60%' }}>Suraj Hotel - Chabahil</p>
      <div className="special-delivery">
        <span className="delivery-icon">&#128666;</span> {/* Unicode for truck icon */}
        <span className="delivery-text" style={{ fontWeight: 'bold', opacity: '0.6' }}>Free Delivery</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ color: 'red', fontWeight: 'bold', marginRight: '10px' }}>Rs.215</span>
        <span style={{ color: 'red', fontSize: '12px', textDecoration: 'line-through', marginRight: '8px' }}>250</span>
        <span className="special-rating-text" style={{ marginLeft: '115px', fontSize: '20px' }}>4.6</span>
        <span className="special-rating-star" style={{ marginLeft: '6px', marginTop: '-3px' }}>&#9733;</span> {/* Unicode for star */}
      </div>
    </div>
    </div>

    <div className="special-card-container">
    <div className="favorite-effect">
      <span className="favorite-icon">&#10084;&#65039;</span> {/* Unicode for red heart */}
    </div>
    <div className="special-card-background">
      <div className="special-card-rating"></div>
      <div className="special-card-eclipse">
        <img src={veg} alt="Special Dish 1" className="special-card-image" />
      </div>
    </div>
    <div style={{ fontWeight: 'bold' }} className="special-card-body">
      <h5 style={{ fontSize: '22px' }}>Mixed vegetable Masala</h5>
      <p style={{ opacity: '60%' }}>Sahakari Resturant - Baneshwor</p>
      <div className="special-delivery">
        <span className="delivery-icon">&#128666;</span> {/* Unicode for truck icon */}
        <span className="delivery-text" style={{ fontWeight: 'bold', opacity: '0.6' }}>Free Delivery</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ color: 'red', fontWeight: 'bold', marginRight: '10px' }}>Rs.200</span>
        <span style={{ color: 'red', fontSize: '12px', textDecoration: 'line-through', marginRight: '8px' }}>250</span>
        <span className="special-rating-text" style={{ marginLeft: '115px', fontSize: '20px' }}>4.2</span>
        <span className="special-rating-star" style={{ marginLeft: '6px', marginTop: '-3px' }}>&#9733;</span> {/* Unicode for star */}
      </div>
    </div>
    </div>


    <div className="special-card-container">
    <div className="favorite-effect">
      <span className="favorite-icon">&#10084;&#65039;</span> {/* Unicode for red heart */}
    </div>
    <div className="special-card-background">
      <div className="special-card-rating"></div>
      <div className="special-card-eclipse">
        <img src={coconut} alt="Special Dish 1" className="special-card-image" />
      </div>
    </div>
    <div style={{ fontWeight: 'bold' }} className="special-card-body">
      <h5 style={{ fontSize: '22px' }}>Coconut Shrimp</h5>
      <p style={{ opacity: '60%' }}>Valley View Hotel - Thamel</p>
      <div className="special-delivery">
        <span className="delivery-icon">&#128666;</span> {/* Unicode for truck icon */}
        <span className="delivery-text" style={{ fontWeight: 'bold', opacity: '0.6' }}>Free Delivery</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ color: 'red', fontWeight: 'bold', marginRight: '10px' }}>Rs.180</span>
        <span style={{ color: 'red', fontSize: '12px', textDecoration: 'line-through', marginRight: '8px' }}>200</span>
        <span className="special-rating-text" style={{ marginLeft: '115px', fontSize: '20px' }}>5.0</span>
        <span className="special-rating-star" style={{ marginLeft: '6px', marginTop: '-3px' }}>&#9733;</span> {/* Unicode for star */}
      </div>
    </div>
    </div>         
      </div>
    </>
  );
};

export default SpecialDishes;
