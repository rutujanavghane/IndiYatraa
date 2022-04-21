import React from 'react'
import { Button } from './Button';
import './Footer.css'
import {Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer-container">
           <section className="footer-subscription">
              <p className="footer-subscription-heading">
                  Join the Adventure newsletter to  receive our best vacation deals
              </p>
              <p className="footer-subscription-text">
                  You can unsubscribe at any time
              </p>
              <div className="input-areas">
                  <form className="i-btn">
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                        <Button buttonSize='btn--large' buttonStyle="btn--outline">Subscribe</Button>
                  </form>
              </div>
           </section>
           <div className="footer-links">
               <div className="footer-link-wrapper">
                   <div className="footer-link-items">
                       <h2>About Us</h2>
                       <Link to="/sign-up">How it works</Link>
                       <Link to="/">Testimonials</Link>
                       <Link to="/">Careers</Link>
                       <Link to="/">Investors</Link>
                       <Link to="/">Terms of Service</Link>
                   </div>
                   <div className="footer-link-items">
                       <h2>Contact Us</h2>
                       <Link to="/sign-up">How it works</Link>
                       <Link to="/">Testimonials</Link>
                       <Link to="/">Careers</Link>
                       <Link to="/">Investors</Link>
                       <Link to="/">Terms of Service</Link>
                   </div>
               </div>
               <div className="footer-link-wrapper">
                   <div className="footer-link-items">
                       <h2>Videos</h2>
                       <Link to="/sign-up">How it works</Link>
                       <Link to="/">Testimonials</Link>
                       <Link to="/">Careers</Link>
                       <Link to="/">Investors</Link>
                       <Link to="/">Terms of Service</Link>
                   </div>
                   <div className="footer-link-items">
                       <h2>Social Media</h2>
                       <Link to="/sign-up">How it works</Link>
                       <Link to="/">Testimonials</Link>
                       <Link to="/">Careers</Link>
                       <Link to="/">Investors</Link>
                       <Link to="/">Terms of Service</Link>
                   </div>
               </div>
           </div> 
           <section className="social-media">
               <div className="social-media-wrap">
                   <div className="footer-logo">
                       <Link to="/" className="social-logo">
                          <i className="fas fa-archway"/>INDYAATRA
                       </Link>
                   </div>
                   <small className="website-rights"><i className="fas fa-archway"/>INDYAATRA © 2021</small>
                   <div className="social-icons">
                       <Link className="social-icon-link facebook" to="/" target="_blank" aria-label="facebook">
                           <i className="fab fa-facebook-f"/>
                       </Link>
                       <Link className="social-icon-link instagram" to="/" target="_blank" aria-label="instagram">
                           <i className="fab fa-instagram"/>
                       </Link>
                       <Link className="social-icon-link twitter" to="/" target="_blank" aria-label="twitter">
                           <i className="fab fa-twitter"/>
                       </Link>
                       <Link className="social-icon-link linkedin" to="/" target="_blank" aria-label="linkedin">
                           <i className="fab fa-linkedin"/>
                       </Link>
                   </div>
               </div>
           </section>             
        </div>
    )
}

export default Footer
