import React from 'react';
import "./Packages.css"

function Packages() {
    return (
      <div className="packages_page">
        <div className="packages_container">
            <h1>Trending Tour Packages</h1>
            <div className="p_card_container">
                <div className="p_card">
                    <div className="p_vid">
                       <h3>KHOW MORE</h3>
                    </div>
                    <div className="p_c_text">
                        <h4>11 Nights-12 Days</h4>
                        <h2>Classical India Tour</h2>
                    </div>
                </div>
                <div className="p_card">
                    <div className="p_vid1">
                        <h3>KHOW MORE</h3>
                    </div>
                    <div className="p_c_text">
                        <h4>8 Nights-9Days</h4>
                        <h2>Kaziranga Tour with Meghalya</h2>
                    </div>
                </div>
                <div className="p_card">
                    <div className="p_vid2">
                       <h3>KHOW MORE</h3>
                    </div>
                    <div className="p_c_text">
                        <h4>5 Nights-6 Days</h4>
                        <h2>Temple Tour of South India</h2>
                    </div>
                </div>
                <div className="p_card">
                    <div className="p_vid4">
                        <h3>KHOW MORE</h3>
                    </div>
                    <div className="p_c_text">
                        <h4>12 Nights-13 Days</h4>
                        <h2>Best of Gujrat Tour</h2>
                    </div>
                </div>
                <div className="p_card">
                    <div className="p_vid3">
                       <h3>KHOW MORE</h3>
                    </div>
                    <div className="p_c_text">
                        <h4>6 Nights-7 Days</h4>
                        <h2>Gangotri Tapovan Trek</h2>
                    </div>
                </div>
                <div className="p_card">
                    <div className="p_vid5">
                       <h3>KHOW MORE</h3>
                    </div>
                    <div className="p_c_text">
                        <h4>8 Nights-9 Days</h4>
                        <h2>Best of Kerala</h2>
                    </div>
                </div>
            </div> 
        </div>
        <div className="large_card_wrapper">
            <div className="large_card">
                <div className="large-c_container">
                    <h1>Experience the best of <br/> <span>Himalayas</span> <br/> with <span class>Experts</span></h1>
                </div>
            </div>
            
            <div className="small_card_wrapper">
                  <div className="small_card">
                       <i class="fab fa-wolf-pack-battalion"/>
                       <h4>Wildlife</h4>
                  </div>
                  <div className="small_card">
                       <i class="fab fa-fort-awesome"/>
                       <h4>Heritage</h4>
                  </div>
                  <div className="small_card">
                      <i class="fas fa-praying-hands"/>
                      <h4>Pilgrimage</h4>
                  </div>
                  <div className="small_card">
                       <i class="fas fa-mountain"/>
                       <h4>Hill Station</h4>
                  </div>
                  <div className="small_card">
                       <i class="fas fa-hiking"/>
                       <h4>Adventure</h4>
                  </div>
                  <div className="small_card">
                       <i class="fas fa-umbrella-beach"/>
                       <h4>Beach</h4>
                  </div>
            </div>
        </div>
     </div>
    )
}

export default Packages
