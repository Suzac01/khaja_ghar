import React from 'react'
import family from '../../../assets/daura/family.png';
import plus from '../../../assets/daura/Vector.png';



const hadiBiryani = () => {
  return (
    <div>
        <div className='row'>
              <h2 style={{ fontWeight: 'bold', marginTop: '30px' }}>Hadi Biryani</h2>
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
    Mutton Hadi Biryani
  </p>
  <span style={{marginLeft:'380px', fontWeight:'bold'}}>
  Rs. 1900
</span>
<span style={{marginLeft:'77px'}}> 
    <img src={plus}></img>
</span>

</div>
              <div>
                <div className='bx'>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid lightgrey', fontSize: '20px', width: '100%' }}>
</div>
</div>
<div style={{ display: 'flex', alignItems: 'center' }}>
  <img src={family} style={{ padding: '20px', width: '15%' }} alt="Family Combo" />
  <p style={{fontWeight:'bold',fontSize:'20px', marginLeft: '20px'}}>
    Mutton Hadi Biryani
  </p>
  <span style={{marginLeft:'385px', fontWeight:'bold'}}>
  Rs. 900
</span>
<span style={{marginLeft:'80px'}}> 
    <img src={plus}></img>
</span>
  </div>
  </div>
  </div>
    </div>
    </div>
    </div>

  )
}

export default hadiBiryani
