import React from 'react'
import family from '../../../assets/daura/family.png';
import plus from '../../../assets/daura/Vector.png';


const momo = () => {
  return (
    <div>
        <div className='row'>
              <h2 style={{ fontWeight: 'bold', marginTop: '30px' }}>Momo</h2>
              <div>
                <div className='bx'>
                  
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid lightgrey', fontSize: '20px', width: '100%' }}>
  <p>Item</p>
  <p style={{marginLeft:'60%'}}>Price</p>
  <p>Order</p>
</div>

{/* Chicken Steam Momo-------------------------------------------------------- */}
<div style={{ display: 'flex', alignItems: 'center' }}>
  <img src={family} style={{ padding: '20px', width: '15%' }} alt="Family Combo" />
  <p style={{fontWeight:'bold',fontSize:'20px', marginLeft: '20px'}}> 
    Chicken Steam Momo
  <span style={{marginLeft:'350px', fontWeight:'bold',fontSize:'16px'}}>
  Rs. 100
</span>
<span style={{marginLeft:'85px'}}>
    <img src={plus}></img>
</span>
</p>
</div>


{/* Buff Jhol Momo --------------------------------------------------*/}
              <div>
                <div className='bx'>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid lightgrey', fontSize: '20px', width: '100%' }}>
</div>
</div>

<div style={{ display: 'flex', alignItems: 'center' }}>
  <img src={family} style={{ padding: '20px', width: '15%' }} alt="Family Combo" />
  <p style={{fontWeight:'bold', fontSize:'20px', marginLeft: '20px'}}>
    Buff Jhol Momo
  </p>
  <span style={{marginLeft:'405px', fontWeight:'bold'}}>
  Rs. 110
</span>
<span style={{marginLeft:'80px'}}> 
    <img src={plus}></img>
</span>
  </div>


{/* Panner Momo ---------------------------------------------------------------------------*/}
  <div style={{ borderBottom: '2px solid lightgrey'}}>
</div>
<div style={{ display: 'flex', alignItems: 'center' }}>
  <img src={family} style={{ padding: '20px', width: '15%' }} alt="Family Combo" />
  <p style={{fontWeight:'bold',fontSize:'20px', marginLeft: '20px'}}> 
    Panner Momo
  
  <span style={{marginLeft:'430px', fontWeight:'bold',fontSize:'16px'}}>
  Rs. 120
</span>
<span style={{marginLeft:'70px'}}>
    <img src={plus}></img>
</span>
</p>
</div>


{/*  Buff Fried MOMO -----------------------------------------------------------------------------*/}

<div style={{ borderBottom: '2px solid lightgrey'}}>
</div>
<div style={{ display: 'flex', alignItems: 'center' }}>
  <img src={family} style={{ padding: '20px', width: '15%' }} alt="Family Combo" />
  <p style={{fontWeight:'bold',fontSize:'20px', marginLeft: '20px'}}> 
   Buff Fried Momo
  
  <span style={{marginLeft:'400px', fontWeight:'bold',fontSize:'16px'}}>
  Rs. 300
</span>
<span style={{marginLeft:'70px'}}>
    <img src={plus}></img>
</span>
</p>

</div>

{/* Panner KOthey Momo  ----------------------------------*/}

<div style={{ borderBottom: '2px solid lightgrey'}}>
</div>
<div style={{ display: 'flex', alignItems: 'center' }}>
  <img src={family} style={{ padding: '20px', width: '15%' }} alt="Family Combo" />
  <p style={{fontWeight:'bold',fontSize:'20px', marginLeft: '20px'}}> 
   Panner Kothey Momo
  
  <span style={{marginLeft:'350px', fontWeight:'bold',fontSize:'16px'}}>
  Rs. 160
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

export default momo
