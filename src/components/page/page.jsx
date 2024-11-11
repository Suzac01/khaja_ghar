import React from 'react';
import girl from '../../assets/girl.png';
import './page.css';

const Page = () => {
  return (
    <div className='container-full' style={{backgroundColor:'white'}}>
      <div style={{ flex: 1, textAlign: 'left', paddingLeft: '80px' }}>
        <h1 style={{ fontSize: '65px', fontWeight: 'bold' }}>Dive into Delights</h1>
        <h1 style={{ fontSize: '65px', fontWeight: 'bold' }}>
          Of Delectable <span style={{ color: '#61e26e' }}>Food</span>
        </h1>
        <br />
        <h6 style={{ fontSize: '25px' }}>
          Where Each Plate Weaves a Story of Culinary <br />
          Masters and Passionate Craftsmanship
        </h6>
        <br /><br/>
        <button className='btnn'>
          Order Now
        </button>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: '500px', height: '500px', backgroundColor: '#61e26e', borderRadius: '50%' }}>
          <img 
            src={girl} 
            alt="Girl"
            style={{
              position: 'absolute',
              top: '70%',
              left: '50%',
              transform: 'translate(-50%, -70%)',
              width: '90%'
            }} 
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
