import React from 'react';
import background from '../../assets/login_pics/background.png';
import './login.css';
import burger from '../../assets/login_pics/burger.png'
import facebook from '../../assets/login_pics/facebook.png'
import rec from '../../assets/login_pics/rec.png'
import instagram from '../../assets/login_pics/instagram.png'
import google from '../../assets/login_pics/google.png'
import logo from '../../assets/Logo.png'


const Login = () => {

  return (
    <div className="container-full">
  <div className="image-wrapper">
    <img src={background} alt="Background Image" />
    <div className="box">
      {/* Left Section for Image Holder */}
      <div className="left-section">
        <img src={logo} alt="Logo" className="logo" style={{padding:'10px', width:'140px'}}/>  {/* Add logo here */}
        <img src={burger} alt="Image Holder" style={{ width: '100%', borderRadius: '10px' }} />
        <h4 style={{ textAlign: 'center' }}>Create New Account</h4>
      </div>
      {/* Divider Line */}
      <div className="divider" />
          {/* Right Section for Login Inputs */}
          <div className="right-section">
            <div className='internal-box'>
            <h2 style={{fontWeight:'bold', textAlign:'center'}}>Log In</h2>
            <div className='contents'>
            <label>Email</label><br/>
            <input type="text" style={{background:'white', opacity:'90%', width:'94%', padding:'8px'}} placeholder="Enter your email" /><br/>
            <label>Password</label>
            <input style={{background:'white', opacity:'90%', width:'94%'}} type="password" placeholder="**********" />
            <p style={{ marginRight:'20px',  textAlign:'right', opacity:'50%'}}>Forget Password ?</p>
            <br/>
            <button className='btnn' style={{width:'100%', borderRadius:'8px'}}>Sign In</button>
            <div className="separator">
            <span>Or</span>
            </div>
            <div className="social-icons">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon-container">
    <img src={facebook} alt="Facebook" />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon-container">
    <img src={instagram} alt="Instagram" />
  </a>
  <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="icon-container">
    <img src={google} alt="Google" />
  </a>
</div>

            </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
