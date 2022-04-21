import React from 'react'
import Footer from '../../Footer';
import Places from '../../subComponents/Places';
import './styles.css'
import { Link } from 'react-router-dom'
import Ques from '../../subComponents/Ques';

function EastIndia() {
    return (
        <div>
            <div className="east-india">
                <div className="overlay">
                       <h1>VISIT EAST INDIA</h1>
                       <Link className="S_btn">KNOW MORE</Link>
                </div>
            </div>
            <div className="E-india">
              <div className="E-drap">
                <h1 className="title" data-aos="fade-right">Top Places to Visit in East India</h1>
                <div className="E-container">
                    <Places
                        src='https://liamtra.com/blog/wp-content/uploads/2020/07/slider-1-4.jpg'
                        title='Assam'
                        path='/'
                    />
                    <Places
                        src='https://www.cntravellerme.com/2021/05/fG1hIK9L-West-bengal-1200x709.jpg'
                        title='West Bengal'
                        path='/'
                    />
                    <Places
                        src='https://www.shikhar.com/images/gallery/tours/170/darjeeling%20hill%20station.jpg'
                        title='Sikkim'
                        path='/'
                    />
                    <Places
                        src='https://fthmb.tqn.com/NhLFK3_Tz5gIBys0Aozz6ymNt7c=/960x0/filters:no_upscale()/GettyImages-168923748-574bdc6b3df78ccee1fd5e8c.jpg'
                        title='Bihar'
                        path='/'
                    />
                    <Places
                        src='https://www.holidify.com/images/cmsuploads/compressed/shutterstock_716702755_20190702181117.jpg'
                        title='Arunachal Pradesh'
                        path='/'
                    />
                    <Places
                        src='https://static.toiimg.com/photo/68332245/meghalaya-tourism.jpg?width=748&resize=4'
                        title='Meghalya'
                        path='/'
                    />
                </div>
              </div>
           </div>
           <div class="todos">
             <div class="todos_child">
                <div class="E-todo"><div class="ele">TOP THINGS TO DO IN EAST INDIA</div></div>
                <div class="E-todo"><div class="ele">Visit largest river Island</div></div>
                <div class="E-todo"><div class="ele">enjoy the Bihu Festival</div></div>
                <div class="E-todo"><div class="ele">River Rafting in Subansiri</div></div>
                <div class="E-todo"><div class="ele">TOP THINGS TO DO IN EAST INDIA</div></div>
             </div>

            </div>
            <div className="E-ques-wrap">
                <div className="ques-container" data-aos="fade-up">
                  <Ques 
                    title="How"
                    content="The gateway to North East India is Guwahati, the largest city of Assam and the most developed and ‘Indian’ city in the region. Furthermore, it has rail connections to the rest of India.Regular flights offer their services to and from Delhi, Kolkata and Mumbai and the rest of India."
                   />
                   <Ques 
                    title="Why"
                    content="Eastern Zone of India is rich in Cultural Heritage.Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland and Tripura are the original Seven Sisters. Each state has its own unique history and culture, and for a traveller, the region is a repository of rare experiences. "
                   />
                   <Ques 
                    title="When"
                    content=" Winter is perhaps the best season to visit East India in, if you’re looking to navigate the national parks & wildlife sanctuaries. In fact, the world famous Kaziranga National Park is especially thrilling during this time. Imagine spotting the one-horned rhinoceroses & Ganges River Dolphin"
                   />
                   <Ques 
                    title="What"
                    content="Most Popular tourist destinations for this region are, Calcutta, Former Captal of India, Puri & Bhubaneshwar, Buddhist Circuit in Bihar, Monastries in Sikkim, Kanchenjunga Range of Mountains in Darjeeling etc."
                   />

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default EastIndia;
