import React from 'react';
import family from '../../../assets/daura/family.png';
import plus from '../../../assets/daura/Vector.png'


const FamilyCombo = () => {
  return (
    <>
      <h2 style={{ fontWeight: 'bold', marginTop: '20px' }}>Family Combo</h2>
      <div className='bx'>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          borderBottom: '2px solid lightgrey', 
          fontSize: '20px', 
          width: '100%' 
        }}>
          <p>Item</p>
          <p style={{ marginLeft: '60%' }}>Price</p>
          <p>Order</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src={family} 
            style={{ padding: '20px', width: '15%' }} 
            alt="Family Combo" 
          />
          <div style={{ marginLeft: '20px' }}>
            <p style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '10px' }}>
              Family Combo
            </p>
            <p style={{ marginTop: '-10px', fontSize: '16px', color: '#555' }}>
              Chicken Tandoori half, Koila Chicken 250gm, Chicken Steamed<br />
              momo, Mustang aloo and Hadi Biryani
            </p>
          </div>
          <span style={{ marginLeft: 'auto', fontWeight: 'bold' }}>
            Rs. 1900
          </span>
          <span style={{ marginLeft: '80px' }}>
            <img style={{ marginRight: '15px' }} src={plus} alt="Add to cart" />
          </span>
        </div>
      </div>
    </>
  );
};

export default FamilyCombo;
