import React, { useState } from 'react';
import { FaSearch, FaChevronDown, FaCartPlus } from 'react-icons/fa';  // Import necessary icons
import './header.css';
import Logo from '../../assets/Logo.png';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';


const Header = () => {

  const [selectedLang, setSelectedLang] = useState('EN');

  const handleLangChange  = (language) =>{
    setSelectedLang(language);
  }

  return (
    <div className='container-fluid' style={{borderBottom: '2px solid rgba(128, 128, 128, 0.3)' }}>
      <div className='row align-items-center'>
        {/* Logo Section */}
        <div className='col-sm-1' style={{ marginRight: '2%' }}>
          <img src={Logo} style={{ width: '100px' }} alt="Logo" />
        </div>

        {/* Navigation and Search Section */}
        <div className='col-sm-10'>
          <nav className="navbar navbar-expand-sm justify-content-between">
            <ul className="navbar-nav me-auto">
              <li className="nav-item" style={{ marginRight: '30px' }}>
                <a className="nav-link text-green" href="#">Home</a>
              </li>
              <li className="nav-item dropdown" style={{ marginRight: '30px' }}>
    <a 
      className="nav-link dropdown-toggle text-green" 
      href="#" 
      id="menuDropdown" 
      data-bs-toggle="dropdown" 
      aria-expanded="false"
    >
      Menu <FaChevronDown style={{ color: '#61e26e', marginLeft: '5px' }} />
    </a>
    <ul className="dropdown-menu" aria-labelledby="menuDropdown">
      <li><a className="dropdown-item" href="#">Indian</a></li>
      <li><a className="dropdown-item" href="#">Bengali</a></li>
      <li><a className="dropdown-item" href="#">Chinese</a></li>
    </ul>
  </li>

  <li className="nav-item dropdown" style={{ marginRight: '30px' }}>
    <a 
      className="nav-link dropdown-toggle text-green" 
      href="#" 
      id="servicesDropdown" 
      data-bs-toggle="dropdown" 
      aria-expanded="false"
    >
      Services <FaChevronDown style={{ color: '#61e26e', marginLeft: '5px' }} />
    </a>

    <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
      <li><a className="dropdown-item" href="#">Delivery</a></li>
      <li><a className="dropdown-item" href="#">Book Table</a></li>
      <li><a className="dropdown-item" href="#">Take Away</a></li>
    </ul>
  </li>
</ul>

            {/* Search Bar Section */}
            <div className='headerSearch d-flex align-items-center' style={{ marginRight: '20px' }}>
              <span className="input-group-text search-icon">
                <FaSearch />
              </span>
              <input style={{ marginTop:'6px'}}
                type="text"
                className="custom-search-input"
                placeholder="Search a food, restaurant..."
                // Adjust the width of the search bar
              />
            </div>

            {/* Additional Icons Section */}
            <div className="d-flex align-items-center">
              <a className="nav-link text-green" href="#" style={{ marginRight: '20px' }}>
                <FaCartPlus />
              </a>
              <Link className="nav-link text-green" to="/Login" style={{ marginRight: '20px' }}>
  Login
  </Link>
              
              <div className="dropdown" style={{  marginRight: '20px' }}>
                <a type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                {selectedLang} <FaChevronDown style={{ color: '#61e26e' }}/>
                
                </a>

                <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                <li><a className="dropdown-item" onClick={() => handleLangChange('EN')} >EN</a></li>
                  <li><a className="dropdown-item" onClick={() => handleLangChange('FR')}>FR</a></li>
                  <li><a className="dropdown-item" onClick={() => handleLangChange('DE')}>DE</a></li>
                </ul>
                </div>
                
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
