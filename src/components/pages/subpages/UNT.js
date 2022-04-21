import React from 'react'
import Footer from '../../Footer';
import Places from '../../subComponents/Places';
import './styles.css'
import { Link } from 'react-router-dom'
import Ques from '../../subComponents/Ques';

function UNT() {
    return (
        <div>
            <div className="unt-india">
                <div className="overlay">
                       <h1>VISIT UNION TERRITORIES</h1>
                       <Link className="S_btn">KNOW MORE</Link>
                </div>
            </div>
            <div id="U-destinations" className="U-india">
              <div className="U-drap">
                <h1 className="title" data-aos="fade-right">Top Places to Visit in Union Territories</h1>
                <div className="U-container">
                    <Places
                        src='https://www.picnicwale.com/attractions/assets/sightseeing/pahalgam-in-kashmir-barnner.jpg'
                        title='Jammu & Kashmir'
                        path='/'
                    />
                    <Places
                        src='https://4.bp.blogspot.com/-M5FkZNwA87U/Wp5dHANkHTI/AAAAAAAAMpk/qQfNj53K9Q4Pr1eqXx3EmD4GnahVCUdZwCLcBGAs/w1200-h630-p-k-no-nu/Andaman%2Band%2BNicobar%2Bislands.jpg'
                        title='Andaman & Nicobar'
                        path='/'
                    />
                    <Places
                        src='https://ultimatetravel.in/images/Leh-Ladakh5.jpg'
                        title='Leh'
                        path='/'
                    />
                    <Places
                        src='https://mail.ancienttracks.com/userfiles/Indus%20Valley%20or%20Sham%20Valley%20by%20Ancient%20Tracks%20Ladakh.JPG'
                        title='Ladakh'
                        path='/'
                    />
                    <Places
                        src='https://www.adotrip.com/public/images/city/master_images/5e4a4dee3033f-Chandigarh_Attractions.jpg'
                        title='Chandigarh'
                        path='/'
                    />
                    <Places
                        src='https://indiantraveldictionary.com/assets/images/state/old-lighthouse.jpg'
                        title='Pondicherry'
                        path='/'
                    />
                </div>
              </div>
           </div>
           <div class="todos">
             <div class="todos_child">
                <div class="U-todo"><div class="ele">Todo's in Union Territories</div></div>
                <div class="U-todo"><div class="ele">Beaches in Andaman</div></div>
                <div class="U-todo"><div class="ele">SHIKARA RIDE IN SRINAGAR</div></div>
                <div class="U-todo"><div class="ele">trekking in ladakh</div></div>
                <div class="U-todo"><div class="ele">Todo's in Union Territories</div></div>
             </div>

            </div>
            <div className="U-ques-wrap">
                <div className="ques-container" data-aos="fade-up">
                  <Ques 
                    title="How"
                    content="Air connectivity to Port Blair is available from Kolkata, Chennai, Mumbai, Bhubaneshwar and Visakhapatnam. Sea connectivity to Port Blair is available from Chennai, Kolkata and Visakhapatnam."
                   />
                   <Ques 
                    title="Why"
                    content="A Place That is a Strong Blend of Nature, Spirituality, and Adventure Unmatched Beauty and Unlimited Adventure at the Land of High Passes."
                   />
                   <Ques 
                    title="When"
                    content="Planning a holiday tour to Andaman & Nicobar Islands during the months of December to February (winter season); during April to June (summer season) or May to September (monsoon season) is considered to be best."
                   />
                   <Ques 
                    title="What"
                    content=" Union territories consists of some great tourist attractions and places that must definitely be visited on your trip here, including the Pondicherry, Leh, Chandigarh, Jammu-Kashmir, Ladakh etc."
                   />

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default UNT;
