import React from 'react'
import Footer from '../../Footer';
import Places from '../../subComponents/Places';
import './styles.css'
import { Link } from 'react-router-dom'
import Ques from '../../subComponents/Ques';

function WestIndia() {
    return (
        <div>
            <div className="west-india">
                <div className="overlay">
                       <h1>VISIT WEST INDIA</h1>
                       <Link className="S_btn">KNOW MORE</Link>
                </div>
            </div>
            <div id="W-destinations" className="W-india">
              <div className="W-drap">
                <h1 className="title" data-aos="fade-right">Top Places to Visit in West India</h1>
                <div className="W-container">
                    <Places
                        src='https://www.treebo.com/blog/wp-content/uploads/2018/02/Forts-in-Maharashtra-.jpg'
                        title='Maharashtra'
                        path='/'
                    />
                    <Places
                        src='https://3.bp.blogspot.com/-QPDHWud6Tvk/UxHMN4Kpo7I/AAAAAAAAGv0/-IHaLPjG9T8/s1600/Mahabat-ka-Maqbara.jpg'
                        title='Gujrat'
                        path='/'
                    />
                    <Places
                        src='https://3.bp.blogspot.com/-GKFpSrqAu0c/VGL0pLf2RaI/AAAAAAAABNw/u4f2g0rKVlU/s1600/Miramar-Beach-Goa-India.jpg'
                        title='Goa'
                        path='/'
                    />
                    <Places
                        src='https://www.indiamagicaltrip.com/assets/locationimg/KRTEPRD34321571666884.jpg'
                        title='Daman & Diu'
                        path='/'
                    />
                    <Places
                        src='https://i.pinimg.com/originals/57/22/cc/5722cc24a89a15562984d87e2dc393e2.jpg'
                        title='Dadra & Nagar Haveli'
                        path='/'
                    />
                    <Places
                        src='https://cdn.theculturetrip.com/wp-content/uploads/2016/10/shutterstock_247414510.jpg'
                        title='Elephanta Island'
                        path='/'
                    />
                </div>
              </div>
           </div>
           <div class="todos">
             <div class="todos_child">
                <div class="W-todo"><div class="ele">TOP THINGS TO DO IN WEST INDIA</div></div>
                <div class="W-todo"><div class="ele">mumbai in a day</div></div>
                <div class="W-todo"><div class="ele">Explore beaches in goa</div></div>
                <div class="W-todo"><div class="ele">rann of kutch</div></div>
                <div class="W-todo"><div class="ele">TOP THINGS TO DO IN WEST INDIA</div></div>
             </div>

            </div>
            <div className="W-ques-wrap">
                <div className="ques-container" data-aos="fade-up">
                  <Ques 
                    title="How"
                    content="There onwards,use the wide network of trains by the Indian Railways, hire private cabs,take buses or domestic flights from once place to another. Waterways are not yet so well developed in these regions, except a few backwater routes & the jetties that operate in Goa."
                   />
                   <Ques 
                    title="Why"
                    content="The western part of India is blessed with scenic views, long coastlines, magnificent religious centres and a truck-load of hospitality, making it one of the most popular travel destinations in India."
                   />
                   <Ques 
                    title="When"
                    content="Winter months from November to February comprise the peak tourist season & the most appropriate time to explore the region.It is during this time that the climate is extremely comfy and a number of outstanding fairs & festivals are organised."
                   />
                   <Ques 
                    title="What"
                    content="From the hippie culture of Goa to the vibrant and responsible outlook of Gujarat, The hustle life of Mumbai to the laid-back journey to the  Daman & Diu and Dadra & Nagar Haveli, each day of your vacation will be like a day spent in heaven!"
                   />

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default WestIndia;
