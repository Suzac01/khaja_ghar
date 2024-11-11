import React, { useState } from 'react';
import bin from '../../assets/your_order/bin.png'; 
import './yourOrder.css';

const YourOrder = () => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className="row">
      <div className="col-6">
        <div className="tab" style={{ borderBottom: '2px solid #ccc' }}>
          <div>
            <h3 style={{ padding: '10px', fontWeight: 'bold', fontSize: '22px', borderBottom: '2px solid #ccc' }}>Your Order</h3>
          </div>
          
          {/* hadi biryani */}
          
          <div className="form-container" style={{borderBottom:'2px solid #ccc'}}>
            <div className="input-group">
              <div>
                <h3 style={{ fontSize: '20px', marginBottom: '5px' }}>Mutton Haddi Biryani</h3>
                <p style={{ margin: '0' }}>Rs.1200/-</p>
              </div>
            </div>
            <div className="quantity-container" style={{ marginTop: '5px' }}>
              <img src={bin} alt="Remove" className="bin" />

              <div className="quantity-adjuster">
                <button className="decrease-btn" onClick={decreaseQuantity}>-</button>
                <span style={{ backgroundColor: '#373737D9', color: 'white', padding: '5px' }} className="quantity-display">{quantity}</span>
                <button className="increase-btn" onClick={increaseQuantity}>+</button>
              </div>
            </div>
            </div>


          {/* chicken sandswich  */}


            <div className="form-container" style={{borderBottom:'2px solid #ccc'}}>
            <div className="input-group">
              <div>
                <h3 style={{ fontSize: '20px', marginBottom: '5px' }}>Chicken Sandwich</h3>
                <p style={{ margin: '0' }}>Rs.250/-</p>
              </div>
            </div>
            <div className="quantity-container" style={{ marginTop: '5px' }}>
              <img src={bin} alt="Remove" className="bin" />

              <div className="quantity-adjuster">
                <button className="decrease-btn" onClick={decreaseQuantity}>-</button>
                <span style={{ backgroundColor: '#373737D9', color: 'white', padding: '5px' }} className="quantity-display">{quantity}</span>
                <button className="increase-btn" onClick={increaseQuantity}>+</button>
              </div>
            </div>
            </div>

            {/* Aalo sandeko */}
            
            <div className="form-container" style={{borderBottom:'2px solid #ccc'}}>
            <div className="input-group">
              <div>
                <h3 style={{ fontSize: '20px', marginBottom: '5px' }}>Aalo Sadeko</h3>
                <p style={{ margin: '0' }}>Rs.150/-</p>
              </div>
            </div>
            <div className="quantity-container" style={{ marginTop: '5px' }}>
              <img src={bin} alt="Remove" className="bin" />

              <div className="quantity-adjuster">
                <button className="decrease-btn" onClick={decreaseQuantity}>-</button>
                <span style={{ backgroundColor: '#373737D9', color: 'white', padding: '5px' }} className="quantity-display">{quantity}</span>
                <button className="increase-btn" onClick={increaseQuantity}>+</button>
              </div>
            </div>
            </div>
              <div className='row total-section'>
                <div className='col-9'>

  <div>
    <h5 style={{ opacity: '50%' }}>SUB TOTAL</h5>
    <h5 style={{ opacity: '50%' }}>RESTURANT SERVICE CHARGE</h5>
    <h5 style={{ opacity: '50%' }}>VAT</h5>
    <h5 style={{opacity:'50%'}}>DELIVERY CHARGE</h5>
    <h5 style={{opacity:'50%'}}>GRAND TOTAL</h5>
  </div>
  </div>

  <div className='col-3 price-values'>
      <h5 style={{ opacity: '50%' }}>3100.00</h5>
      <h5 style={{ opacity: '50%' }}>50.00</h5>
      <h5 style={{ opacity: '50%' }}>50.00</h5>
      <h5 style={{ opacity: '50%' }}>0.00</h5>
      <h5 style={{ opacity: '50%' }}>3150.00</h5>
    </div>
</div>

{/* Finalize Order Button */}
<div className="finalize-order-container">
            <button className="finalize-order-button">Proceed to Payement</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourOrder;
