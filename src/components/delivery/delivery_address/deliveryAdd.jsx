import React from 'react';
import './deliveryAdd.css';
import DeliveryDate from '../deliveryDate/deliveryDate';
import Payment from '../payement_option/payment';
import YourOrder from '../../yourOrder/YourOrder';


const DeliveryAdd = () => {
  return (
    <>
    <div className='row'>
    <div className='col-8'>
    <div className='boxx' style={{borderBottom:'2px solid #ccc'}}>
        <div>
            <h3 style={{padding:'10px',fontWeight:'bold',fontSize:'22px',  borderBottom:'2px solid #ccc'}}>Delivery Address</h3>
            </div>
      <div className='form-container'>

        <div className='input-group'>
            <h3 style={{fontSize:'20px',marginBottom:'-5px'}}>Full Name*</h3>
          <input type='text' placeholder='Eg. sushil dhamala' />
          <h3 style={{fontSize:'20px', marginBottom:'-5px'}}>Email*</h3>
          <input type='text' placeholder='Eg. wer@gmail.com' />
        </div>

        <div className='input-group'>
        <h3 style={{fontSize:'20px',marginBottom:'-5px'}}>Phone Number*</h3>
        <input type='text' placeholder='Eg.9743025872' />
        <h3 style={{fontSize:'20px',marginBottom:'-5px'}}>Delivery Address*</h3>
          <input type='text' placeholder='Complete Address eg.house number, street name' />
        </div>
       
        </div>
      </div>

      
      <DeliveryDate/>
      <Payment/>
      </div>

      

      
        <div className='okay'>
        <YourOrder/>
        </div>
        </div>








      
      
    </>
  );
};

export default DeliveryAdd;
