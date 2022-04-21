import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import { Button } from '../Button';
import './Destination.css'
import DestCardItem from '../subComponents/DestCardItem'

 function Destination() {
    return (
        
        <div>
          <div className="destination">
             <div className="dest">
                <h3>Welcome to INDIA</h3>
                <h1 >Do come & Visit <span className="change-content"> </span></h1>
                <p>"India once is not enough"</p>
                <div className="btns">
                  <Button
                     className='btn'
                     buttonStyle='btn--outline'
                     buttonSize='btn--large'
                  >
                     EXPLORE
                  </Button>
                </div>
              </div>
             
             
          </div>
          <DestCardItem/>
          <Footer/>
           

        </div>
        
    ) 

}

export default Destination;


