import React from 'react';
import daura from '../../assets/daura/daura.png';
import './daura_restro.css';
import Rect from '../../assets/daura/Rect.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Font Awesome component
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Font Awesome phone icon
import family from '../../assets/daura/family.png'
import plus from '../../assets/daura/Vector.png'
import FamilyCombo from '../daura_restro/familyCombo/familyCombo';
import HadiBiryani from '../daura_restro/hadiBiryani/hadiBiryani';
import Sandwich from '../daura_restro/sandwich/sandwich'; 
import Momo from '../daura_restro/momo/momo';
import VegSnacks from '../daura_restro/vegSnacks/vegSnacks';
import plate from '../../assets/daura/Group.png';



const AboutUs = () => {
  return (
    <div className='container-full'>
      <div className='image'>
        <img src={daura} alt="Daura Restaurant" className="background-image" />
        <div className="text-overlay">
          <img src={Rect} style={{ width: '150px', marginTop: '120px' }} />
          <h2>Daura Restaurant - Kausaltar</h2>
          <p>Kausaltar Chowk, Bhaktapur</p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> 037520245
          </p>
        </div>

        <div className='container-fluid' style={{ marginTop: '10px' }}>
          <div style={{ borderBottom: '2px solid grey', marginBottom: '10px' }}></div> {/* This div is the border */}
          <div className="menu-tabs">
            <button className="tab-button">Family Combo</button>
            <button className="tab-button">Hadi Biryani</button>
            <button className="tab-button">Sandwich</button>
            <button className="tab-button">Veg Snacks</button>
            <button className="tab-button">Fast food</button>
            <button className="tab-button">Khaja set</button>
            <button className="tab-button">Momo</button>
            <button className="tab-button">Non-veg snacks</button>
          </div>
        </div>
        <div style={{ borderBottom: '2px solid grey', marginTop: '10px', width:'100%', opacity:'0.3' }}></div> {/* This div is also a border */}
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-8'>
             
            <FamilyCombo/>
            <HadiBiryani/>
            <Sandwich/>
            <VegSnacks/>
            <Momo/>

        
</div>
            <div className='col-md-4' style={{ marginTop: '60px' }}>
              <h3>Your Order</h3>
              <div className='order'>
                <img className='imag' src={plate}></img><br/><br/>
              <h4 style={{opacity:'60%', textAlign:'center'}}>Your bag is empty</h4>
              <h4 style={{opacity:'60%' , textAlign:'center'}}>Add item to get Started.</h4>
              
              </div>

            </div>

            
          </div>
        </div>
      </div>

      













      
      
    </div>
  );
};

export default AboutUs;
