import React from 'react'
import Footer from '../../Footer';
import Places from '../../subComponents/Places';
import './styles.css'
import { Link } from 'react-router-dom'
import Ques from '../../subComponents/Ques';

function SouthIndia() {
    return (
        <div>
            <div className="south-india">
                <div className="overlay">
                       <h1>VISIT South INDIA</h1>
                       <Link className="S_btn">KNOW MORE</Link>
                </div>
            </div>
            <div className="S-india">
              <div className="S-drap">
                <h1 className="title" data-aos="fade-right">Top Places to Visit in South India</h1>
                <div className="S-container">
                    <Places
                        src='https://holidaybays.com/wp-content/uploads/2015/09/mysore-palace-night-places-to-visit-in-karnataka.jpg'
                        title='Karnataka'
                        path='/'
                    />
                    <Places
                        src='https://www.educationworld.in/wp-content/uploads/2020/10/Sri-Ranganathaswamy-Temple.jpg'
                        title='Tamil Nadu'
                        path='/'
                    />
                    <Places
                        src='https://static.toiimg.com/photo/68007534/backwaters-kerala.jpg?width=748&resize=4'
                        title='Kerala'
                        path='/'
                    />
                    <Places
                        src='https://www.transindiatravels.com/wp-content/uploads/charminar-2.jpg'
                        title='Telangana'
                        path='/'
                    />
                    <Places
                        src='https://www.planjourney.in/wp-content/uploads/2020/01/Andhra-Pradesh-1200x675.jpg'
                        title='Andra Pradesh'
                        path='/'
                    />
                    <Places
                        src='https://www.karnatakatourism.org/wp-content/uploads/2020/10/hampi-stone-chariot.jpg'
                        title='Hampi'
                        path='/'
                    />
                </div>
              </div>
           </div>
           <div class="todos">
             <div class="todos_child">
                <div class="S-todo"><div class="ele">TOP THINGS TO DO IN SOUTH INDIA</div></div>
                <div class="S-todo"><div class="ele">BACKWATERS IN KERALA</div></div>
                <div class="S-todo"><div class="ele">EXPLORE TEMPLES OF MADURAI</div></div>
                <div class="S-todo"><div class="ele">RUINS OF HAMPI & BADAMI</div></div>
                <div class="S-todo"><div class="ele">TOP THINGS TO DO IN SOUTH INDIA</div></div>
             </div>

            </div>
            <div className="S-ques-wrap">
                <div className="ques-container" data-aos="fade-up">
                  <Ques 
                    title="How"
                    content="There onwards,use the wide network of trains by the Indian Railways, hire private cabs,take buses or domestic flights from once place to another. Waterways are not yet so well developed in these regions, except a few backwater routes in the state of Kerala & the jetties that operate in Goa. "
                   />
                   <Ques 
                    title="Why"
                    content="Lush green tea & coffee plantations on the slopes & not to forget the magnificent examples of Dravidian style architecture such as the temples of Mahabalipuram, Hampi and Chola Temple among many others. South India is a treasure trove of peace, views,ancient history of India’s glory. "
                   />
                   <Ques 
                    title="When"
                    content="The major Indian festival of Diwali falls in this season, during October-November, and is celebrated with great enthusiasm down south. For all these reasons, Winter becomes the most ideal time to visit South India."
                   />
                   <Ques 
                    title="What"
                    content="We take you through some of the most trending tourist places to visit when in South India, including some gems like Kerala, Pondicherry, Hampi, Goa, Mysore etc, with hill stations like Coorg and Ooty for some cool time."
                   />

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SouthIndia;
