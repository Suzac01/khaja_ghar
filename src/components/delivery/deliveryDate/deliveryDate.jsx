import React from 'react';
import './deliveryDate.css';

const DeliveryDate = () => {
  return (
    <>
    <div className='row'>
    <div className='col-6'>
    <div className='bo' style={{borderBottom:'2px solid #ccc'}}>
        <div>
            <h3 style={{padding:'10px',fontWeight:'bold',fontSize:'22px',  borderBottom:'2px solid #ccc'}}>Delivery Date & Time</h3>
            </div>
      <div className='form-container'>
        <div className='input-group'>
            <h3 style={{fontSize:'20px',marginBottom:'-5px'}}>Select Date*</h3>
          <input type='text' placeholder='Tuesday 9th July, 2024' />
          
        </div>

        <div className='input-group'>
        <h3 style={{fontSize:'20px',marginBottom:'-5px'}}>Select Time*</h3>
        <input type='text' placeholder='8 PM' />
        </div>
        </div>
      </div>
      </div>
      </div>
      
    </>
  );
};

export default DeliveryDate;
