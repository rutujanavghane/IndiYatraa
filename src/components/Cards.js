import React from 'react';
import './Cards.css';
import Carditem from './Carditem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'data-aos="fade-up">
            <Carditem
              src='images/img.jpg'
              text='Explore from 7th wonder of the world Taj Mahal to the artistic palaces and forts'
              label='Heritage'
              path='/destination'
            />
            <Carditem
              src='images/wildlife.jpeg'
              text='Spot the exotic animals while enjoying a safari with an expert driver & guide. '
              label='Wildlife'
              path='/destination'
            />
           </ul>
           <ul className='cards__items'data-aos="fade-up">
            <Carditem
              src='images/food.jpeg'
              text='Explore flavours of india which reflect blend of cultures'
              label='Food & Cuisine'
              path='/destination'
            />
            <Carditem
              src='images/img-n.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/destination'
            />
            <Carditem
              src='images/img-8.jpg'
              text='Ride through the Rajasthan Desert on a guided camel tour'
              label='Adrenaline'
              path='/destination'
            />
          </ul>
           
            
        </div>
      </div>
            
    </div>
    );
}

export default Cards;
