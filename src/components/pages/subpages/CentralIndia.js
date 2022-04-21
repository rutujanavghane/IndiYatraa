import React from 'react'
import Footer from '../../Footer';
import Places from '../../subComponents/Places';
import './styles.css'
import { Link } from 'react-router-dom'
import Ques from '../../subComponents/Ques';

function CentralIndia() {
    return (
        <div>
            <div className="central-india">
                <div className="overlay">
                       <h1>VISIT CENTRAL INDIA</h1>
                       <Link className="S_btn">KNOW MORE</Link>
                </div>
            </div>
            <div id="C-destinations" className="C-india">
              <div className="C-drap">
                <h1 className="title" data-aos="fade-right">Top Places to Visit in Central India</h1>
                <div className="C-container">
                    <Places
                        src='https://www.holidify.com/images/tooltipImages/SANCHI.jpg'
                        title='Madhya Pradesh'
                        path='/'
                    />
                    <Places
                        src='https://www.holidify.com/images/cmsuploads/compressed/1_20190313124535.jpg'
                        title='Chhattisghar'
                        path='/'
                    />
                    <Places
                        src='https://images.thrillophilia.com/image/upload/s--ByvYF1eD--/c_fill,f_auto,fl_strip_profile,h_600,q_auto,w_975/v1/images/photos/000/130/309/original/1536580315_shutterstock_295945166.jpg.jpg?1536580315'
                        title='Bhopal'
                        path='/'
                    />
                    <Places
                        src='https://www.indiaimagine.com/wp-content/uploads/2020/06/featured-khajuraho-madhyapradesh-india.jpg'
                        title='Khajuraho'
                        path='/'
                    />
                    <Places
                        src='https://i.pinimg.com/originals/0b/df/b2/0bdfb2cfbba8c7202a567b7ac29453b1.jpg'
                        title='Panna'
                        path='/'
                    />
                    <Places
                        src='https://images.thrillophilia.com/image/upload/s--f5S7m7t5--/c_fill,f_auto,fl_strip_profile,g_center,h_450,q_auto,w_752/v1/images/photos/000/131/441/original/1535105665_shutterstock_772830631.jpg.jpg'
                        title='Ujjain'
                        path='/'
                    />
                </div>
              </div>
           </div>
           <div class="todos">
             <div class="todos_child">
                <div class="C-todo"><div class="ele">THINGS TO DO IN Central INDIA</div></div>
                <div class="C-todo"><div class="ele">Explore Khajuraho</div></div>
                <div class="C-todo"><div class="ele">Discover Gwalior Fort</div></div>
                <div class="C-todo"><div class="ele">Cool Down at Chirmiri</div></div>
                <div class="C-todo"><div class="ele">THINGS TO DO IN Central INDIA</div></div>
             </div>
            </div>
            <div className="C-ques-wrap">
                <div className="ques-container" data-aos="fade-up">
                  <Ques 
                    title="How"
                    content="Central India is majorly landlocked and hence waterways are not an option. But the internal rail and road networks are praiseworthy, as are the many domestic airports and local carriers. North India boasts of 4 main International Airports."
                   />
                   <Ques 
                    title="Why"
                    content="Welcome to the heart of India, which exudes timelessness in every way. The exotic land is an intoxicating mixture of rich history, vibrant sights, awe inspiring art and shrines"
                   />
                   <Ques 
                    title="When"
                    content="Winter months from November to February comprise the peak tourist season & the most appropriate time to explore the region.It is during this time that the climate is extremely comfy and a number of outstanding fairs & festivals are organised."
                   />
                   <Ques 
                    title="What"
                    content="Two of India's most famous wildlife sanctuaries- Kanha & Bandhavgarh are embracing the state's area.Towards the southwest are the Buddhist stupas of Sanchi & 15th-century citadels of Mandu. It offers you a wonderful mix of nature, heritage, wildlife."
                   />

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CentralIndia;
