import React from 'react'
import family from '../../../assets/daura/family.png';
import plus from '../../../assets/daura/Vector.png';


const sandwich = () => {
  return (
    <div>
        <div className='row'>
              <h2 style={{ fontWeight: 'bold', marginTop: '30px' }}>Sandwich</h2>
              <div>
                <div className='bx'>
                  
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid lightgrey', fontSize: '20px', width: '100%' }}>
  <p>Item</p>
  <p style={{marginLeft:'60%'}}>Price</p>
  <p>Order</p>
</div>
<div style={{ display: 'flex', alignItems: 'center' }}>
  <img src={family} style={{ padding: '20px', width: '15%' }} alt="Family Combo" />
  <p style={{fontWeight:'bold',fontSize:'20px', marginLeft: '20px'}}> 
    Veg Sandwich
  <span style={{marginLeft:'425px', fontWeight:'bold',fontSize:'16px'}}>
  Rs. 200
</span>
<span style={{marginLeft:'85px'}}>
    <img src={plus}></img>
</span>
</p>

</div>


{/* chicken Sandwich --------------------------------------------------*/}
              <div>
                <div className='bx'>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid lightgrey', fontSize: '20px', width: '100%' }}>
</div>
</div>

<div style={{ display: 'flex', alignItems: 'center' }}>
  <img src={family} style={{ padding: '20px', width: '15%' }} alt="Family Combo" />
  <p style={{fontWeight:'bold', fontSize:'20px', marginLeft: '20px'}}>
    Chicken Sandwich
  </p>
  <span style={{marginLeft:'385px', fontWeight:'bold'}}>
  Rs. 250
</span>
<span style={{marginLeft:'80px'}}> 
    <img src={plus}></img>
</span>
  </div>


{/* Cheese Sandwich ---------------------------------------------------------------------------*/}
  <div style={{ borderBottom: '2px solid lightgrey'}}>
</div>
<div style={{ display: 'flex', alignItems: 'center' }}>
  <img src={family} style={{ padding: '20px', width: '15%' }} alt="Family Combo" />
  <p style={{fontWeight:'bold',fontSize:'20px', marginLeft: '20px'}}> 
    Cheese Sandwich
  
  <span style={{marginLeft:'400px', fontWeight:'bold',fontSize:'16px'}}>
  Rs. 230
</span>
<span style={{marginLeft:'70px'}}>
    <img src={plus}></img>
</span>
</p>
</div>


{/* Club sandwich -----------------------------------------------------------------------------*/}
<div style={{ borderBottom: '2px solid lightgrey'}}>
</div>
<div style={{ display: 'flex', alignItems: 'center' }}>
  <img src={family} style={{ padding: '20px', width: '15%' }} alt="Family Combo" />
  <p style={{fontWeight:'bold',fontSize:'20px', marginLeft: '20px'}}> 
    Club Sandwich
  
  <span style={{marginLeft:'420px', fontWeight:'bold',fontSize:'16px'}}>
  Rs. 300
</span>
<span style={{marginLeft:'70px'}}>
    <img src={plus}></img>
</span>
</p>

</div>

  </div>
  </div>


  
    </div>
    </div>
    </div>

  )
}

export default sandwich
