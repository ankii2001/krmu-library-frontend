import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <div>
              <img src='https://api.freelogodesign.org/files/69f06a0ca9a742d1a2f79bf2e3b682b3/thumb/logo_200x200.png?v=637705593200000000'
              alt='logo'
              className='w-full h-full rounded-sm'/>
            </div>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Overview'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Overview
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/ContactUs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to='/LoginAs'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login Here
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Login Here</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;