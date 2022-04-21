import React from 'react'
import {Link } from "react-router-dom";
import "./DestCardItem.css"

function DestCardItem() {
    return (
        <div className="dest_wrapper">
          <h1>Places You Can Explore</h1>
           <div className="dest_1">
              <div className="dest_card" data-aos="fade-up">
                   <div className="dest_card_content">
                      <h2 className="dest_card_title">North India</h2>
                      <p className="dest_card_body">Endowed with diverse topography, climatic conditions, and cultural beliefs,In North India, history blends beautifully with culture and religion. 
                      </p>
                      <Link to='/north-india' className = "dest_card_button" >
                       Learn More
                      </Link>
                    </div>
                </div>
                <div className="dest_card" data-aos="fade-up">
                   <div className="dest_card_content">
                      <h2 className="dest_card_title">South India</h2>
                      <p className="dest_card_body">Located in the Peninsular Deccan Plateau, bordered by the Arabian Sea, South India includes the mountain ranges of the Western Ghats and the Eastern Ghats.  
                      </p>
                      <Link to='/south-india' className = "dest_card_button" >
                       Learn More
                      </Link>
                    </div>
                </div>
                <div className="dest_card" data-aos="fade-up">
                   <div className="dest_card_content">
                      <h2 className="dest_card_title">East India</h2>
                      <p className="dest_card_body">The ruling ground of many ancient empires, East India has a strong ethnic culture and religious roots. Adding to the vibrant culture of East India are various dance
                      </p>
                      <Link to='/east-india' className = "dest_card_button" >
                       Learn More
                      </Link>
                    </div>
                </div>
                
           </div>
           <div className="dest_2">
                  <div className="dest_card" data-aos="fade-up">
                    <div className="dest_card_content">
                      <h2 className="dest_card_title">West India</h2>
                      <p className="dest_card_body">The language, culture, and levels of economic development of West India is great.West India is a magnificent kaleidoscope of cultures.
                      </p>
                      <Link to='/west-india' className = "dest_card_button" >
                       Learn More
                      </Link>
                    </div>
                  </div>
                  <div className="dest_card" data-aos="fade-up">
                    <div className="dest_card_content">
                      <h2 className="dest_card_title">Central India</h2>
                      <p className="dest_card_body">The Central region of India gives you a peek into the splendid wildlife, rich heritage and architectural splendours of the country. 
                      </p>
                      <Link to='/central-india' className = "dest_card_button" >
                       Learn More
                      </Link>
                    </div>
                  </div>
                  <div className="dest_card" data-aos="fade-up">
                   <div className="dest_card_content">
                      <h2 className="dest_card_title">Union Territories</h2>
                      <p className="dest_card_body">In India, each union territory of India has a unique democracy, culture, value, history, festival, language, dresses etc.
                      </p>
                      <Link to='/union-territories' className = "dest_card_button" >
                       Learn More
                      </Link>
                    </div>
                </div>

                </div>
                
                
        </div>
        
    )
}

export default DestCardItem;