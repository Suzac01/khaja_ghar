import React from 'react'
import family from '../../../assets/daura/family.png';
import plus from '../../../assets/daura/Vector.png';


const vegSnacks = () => {
  return (


    // veg pakauda----------------------------------
    <div>
        <div className='row'>
              <h2 style={{ fontWeight: 'bold', marginTop: '30px' }}>Veg Snacks</h2>
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
    Veg Pakauda
  <span style={{marginLeft:'425px', fontWeight:'bold',fontSize:'16px'}}>
  Rs. 50
</span>
<span style={{marginLeft:'85px'}}>
    <img src={plus}></img>
</span>
</p>

</div>


{/* French Fries --------------------------------------------------*/}
              <div>
                <div className='bx'>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid lightgrey', fontSize: '20px', width: '100%' }}>
</div>
</div>

<div style={{ display: 'flex', alignItems: 'center' }}>
  <img src={family} style={{ padding: '20px', width: '15%' }} alt="Family Combo" />
  <p style={{fontWeight:'bold', fontSize:'20px', marginLeft: '20px'}}>
   French Fry
  </p>
  <span style={{marginLeft:'450px', fontWeight:'bold'}}>
  Rs. 80
</span>
<span style={{marginLeft:'80px'}}> 
    <img src={plus}></img>
</span>
  </div>


{/* Aalo sadeko ---------------------------------------------------------------------------*/}
  <div style={{ borderBottom: '2px solid lightgrey'}}>
</div>
<div style={{ display: 'flex', alignItems: 'center' }}>
  <img src={family} style={{ padding: '20px', width: '15%' }} alt="Family Combo" />
  <p style={{fontWeight:'bold',fontSize:'20px', marginLeft: '20px'}}> 
    Aalo Sadeko
  
  <span style={{marginLeft:'430px', fontWeight:'bold',fontSize:'16px'}}>
  Rs. 150
</span>
<span style={{marginLeft:'70px'}}>
    <img src={plus}></img>
</span>
</p>
</div>


{/* Mushroom Curry -----------------------------------------------------------------------------*/}
<div style={{ borderBottom: '2px solid lightgrey'}}>
</div>
<div style={{ display: 'flex', alignItems: 'center' }}>
  <img src={family} style={{ padding: '20px', width: '15%' }} alt="Family Combo" />
  <p style={{fontWeight:'bold',fontSize:'20px', marginLeft: '20px'}}> 
    Mushroom Curry
  
  <span style={{marginLeft:'390px', fontWeight:'bold',fontSize:'16px'}}>
  Rs. 200
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

export default vegSnacks
