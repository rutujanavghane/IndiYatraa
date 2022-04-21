import React from 'react'
import Footer from '../../Footer';
import Places from '../../subComponents/Places';
import './styles.css'
import { Link } from 'react-router-dom'
import Ques from '../../subComponents/Ques';

function NorthIndia() {
    return (
        <div>
            <div className="north-india">
                <div className="overlay">
                       <h1>VISIT NORTH INDIA</h1>
                       <Link className="S_btn">KNOW MORE</Link>
                </div>
            </div>
            <div id="N-destinations" className="N-india">
              <div className="N-drap">
                <h1 className="title" data-aos="fade-right">Top Places to Visit in North India</h1>
                <div className="N-container">
                    <Places
                        src='https://d3d5bpai12ti8.cloudfront.net/wp-content/uploads/20200911134852/Rajasthan-Approves-New-Tourism-Policy-With-Focus-On-Lesser-known-Destinations.jpg'
                        title='Rajasthan'
                        path='/'
                    />
                    <Places
                        src='https://lp-cms-production.imgix.net/2019-06/GettyImages-149353949_high.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4'
                        title='Himachal'
                        path='/'
                    />
                    <Places
                        src='http://jayasreetravels.com/wp-content/uploads/2019/02/delhip.jpg'
                        title='Delhi'
                        path='/'
                    />
                    <Places
                        src='https://cdn.theculturetrip.com/wp-content/uploads/2017/11/uttarakhand-villages-1024x439.jpg'
                        title='Uttarakhand'
                        path='/'
                    />
                    <Places
                        src='https://www.registrationarena.com/wp-content/uploads/2019/05/COMPANY-REGISTRATION-IN-PUNJAB.png'
                        title='Punjab'
                        path='/'
                    />
                    <Places
                        src='https://www.indiatourism.guide/wp-content/uploads/2020/05/vrindavan-blloggg.jpg'
                        title='Uttar Pradesh'
                        path='/'
                    />
                </div>
              </div>
           </div>
           <div class="todos">
             <div class="todos_child">
                <div class="N-todo"><div class="ele">TOP THINGS TO DO IN NORTH INDIA</div></div>
                <div class="N-todo"><div class="ele">VISIT TAJ MAHAL IN AGRA</div></div>
                <div class="N-todo"><div class="ele">TIGER SAFARI IN RANTHAMBORE</div></div>
                <div class="N-todo"><div class="ele">BOAT RIDING IN VARANASI</div></div>
                <div class="N-todo"><div class="ele">TOP THINGS TO DO IN NORTH INDIA</div></div>
             </div>

            </div>
            <div className="N-ques-wrap">
                <div className="ques-container" data-aos="fade-up">
                  <Ques 
                    title="How"
                    content="North India is majorly landlocked and hence waterways are not an option. But the internal rail and road networks are praiseworthy, as are the many domestic airports and local carriers. North India boasts of 4 main International Airports."
                   />
                   <Ques 
                    title="Why"
                    content="North India is like a set of thali that has every desirable element to satisfy your taste buds. From the poetic beauty of Kashmir to the royal grandeur of Rajasthan. From the purest symbol of love, Taj Mahal to the holiest of all rivers, the Ganges."
                   />
                   <Ques 
                    title="When"
                    content="It is advised that traveling to North East regions should be avoided in the rainy season from May to September-end. Hence, the best time to visit North East India is from the months of November to April, which also happens to be the peak season for travelers."
                   />
                   <Ques 
                    title="What"
                    content=" North India belt consists of some great tourist attractions and places that must definitely be visited on your trip here, including the Golden Triangle (Delhi, Agra, Jaipur), Rajasthan, Mathura-Vrindavan, Varanasi, Jammu-Kashmir, Ladakh etc."
                   />

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default NorthIndia;
