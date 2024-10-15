import React from 'react'
import "./Fooer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footercontent">
            <div className="footerleft">
             <img src={assets.logo} alt=''/>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est voluptatem a nostrum sequi impedit explicabo eaque architecto natus excepturi quia.</p>
             <div className="footersocialicons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
             </div>
            </div>
            <div className="footercenter">
            <h2> Company</h2>     
                <ul>
                    <li>Home</li>
                    <li>Delivery</li>
                    <li> ABOUT US</li>
                    <li> Privacy Policy</li>
                </ul>
                </div>
            <div className="footerright">
            <h2> Get in Touch</h2>
            <ul>
                <li> +333333333</li>
                <li> contact@gmail.com</li>
            </ul>
        </div>
        </div>
        <hr/>
    </div>
  )
}

export default Footer