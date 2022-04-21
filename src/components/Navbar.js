import React, { useState, useEffect } from 'react';
import {Link } from "react-router-dom";
import './Navbar.css'
import { Button } from './Button'


function Navbar() {
    window.onscroll=function(){
      console.log("scroll")
      if(window.pageYOffset>10){
        document.getElementById('header').style.backgroundColor="#242424"
      }
      else{
        document.getElementById('header').style.backgroundColor="#242424c4"
      }
    }
    const [click, setClick ] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
      if (window.innerWidth <= 960){
        setButton(false);
      } else{
        setButton(true);
      }
    };

    useEffect(() => {
      showButton();
    }, []);

    window.addEventListener('resize', showButton);

    
    return (
        <div>
          <nav id='header'className="navbar">
            <div className = "navbar-container">
              <Link to='/' className = "navbar-logo" onClick={closeMobileMenu}>
                <i className="fas fa-archway"/>INDYAATRA
             </Link>
              <div className="menu-icon" onClick={handleClick}>
                <i className= {click ? 'fas fa-times' : 'fas fa-bars'} />  
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                  <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/destination' className="nav-links" onClick={closeMobileMenu}>
                    Destinations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/contact-us' className="nav-links" onClick={closeMobileMenu}>
                    Contact us 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/explore' className="nav-links-mobile" onClick={closeMobileMenu}>
                    Explore
                  </Link>
                </li>
            
              </ul>
               {button && <Button buttonStyle='btn--outline'>EXPLORE</Button> }
            </div>
          </nav>
        </div>
    );
}

export default Navbar;
