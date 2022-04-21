import React from 'react';
import "./Explore.css";
import Footer from '../Footer'
import Packages from '../subComponents/Packages';

function Explore() {
  return (
    <div className="explore">
      <div className="banner">
        <div class="packages">
             <div class="packages_child">
                <div class="package">
                   <div class="element">
                       <h2>chardham yaatra package</h2>
                       <h3>11 Nights-12 Days</h3>
                   </div>
                </div>
                <div class="package">
                   <div class="element">
                       <h2>Golden Triangle Tour</h2>
                       <h3>06 Nights-07 Days</h3>
                   </div>
                </div>
                <div class="package">
                   <div class="element">
                       <h2>adi kailash<br/> trek</h2>
                       <h3>06 Nights-07 Days</h3>
                   </div>
                </div>
                <div class="package">
                   <div class="element">
                       <h2>khajuraho orchha Tour</h2>
                       <h3>04 Nights-05 Days</h3>
                   </div>
                </div>
                <div class="package">
                   <div class="element">
                       <h2>chardham yaatra package</h2>
                       <h3>11 Nights-12 Days</h3>
                   </div>
                </div>    
             </div>
         </div>
         <div className="heading">
           <h1>Let us plan you a<br/>perfect <b className="text">India Holiday</b></h1>
           <h3>Personalised, well-crafted tour packages for best experiences</h3>
           <div className="cards_container">
             <div className="card">
               <div className="card_text">
                 <div className="c_text">
                      <h2>Wildlife</h2>
                      <h3>70+ Packages</h3>
                 </div>
                 <div className="c_icon">
                    <i class="fab fa-wolf-pack-battalion"/>
                  </div>
               </div>
               <div className="card_img"></div>
             </div>
             <div className="card">
                <div className="card_text">
                    <div className="c_text">
                      <h2>Heritage</h2>
                      <h3>25+ Packages</h3>
                    </div>
                    <div className="c_icon">
                    <i class="fas fa-gopuram"/>
                    </div>
                </div>
                <div className="card_img2"></div>
             </div>
             <div className="card">
                 <div className="card_text">
                     <div className="c_text">
                         <h2>Beach Tour</h2>
                         <h3>20+ Packages</h3>
                     </div>
                     <div className="c_icon">
                        <i class="fas fa-umbrella-beach"/>
                     </div>
                 </div>
                 <div className="card_img3"></div>
             </div>
           </div>
         </div>
        </div>
        <Packages/>
        <Footer/>
    </div>
  )
}

export default Explore
