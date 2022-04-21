import React from 'react';
import '../../App.css';
import "./Contactus.css"
import Footer from '../Footer';

export default function Contactus() {
    return(
        <div className="contact">
          <div className="contact-us">
            <div className="form">
                    <h1>GET IN TOUCH!</h1>
                    <div className="form_con">
                        <h5>First Name</h5>
                        <input type="text" id="fname" name="firstname" placeholder="First name.."/>
                        <h5>Last Name</h5>
                        <input type="text" id="lname" name="lastname" placeholder="Last name.."/>
                        <h5>Email</h5>
                        <input type="email" id="email" name="email" placeholder="Email.."/>
                        <h5>Tell me more!</h5>
                        <input type="text" id="tell" name="tell"/>
                        <button className="button">Submit</button>
                    </div>
                </div>
             
          </div>
          

            <Footer/>
        </div>
    )

}