import React from "react"
import "./Footer.css"
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome  size={30} style={{ color:
                     "#fff", marginRight: "2rem" }} />
                     <div>
                        <p>Georgia,</p>
                        <p>The capital is Tbilisi</p>
                     </div>
                </div>
                     <div className="phone">
                     <h4><FaPhone  size={25} style={{ color:
                     "#fff", marginRight: "2rem" }} /> +995 577 09 28 77 </h4>
                     </div>
                     <div className="email">
                     <h4><FaMailBulk  size={30} style={{ color:
                     "#fff", marginRight: "2rem",  }} /> natiabeglarashvili8@gmail.com </h4>
                     </div>
            </div>

            <div className="right">
              <h4>I am waiting for new challenges</h4>
              <p>I would love to join you
               With motivation and lots of new ideas!</p>
               <div className="social">
               
              <FaFacebook  size={40} style={{ color:
                     "#fff", marginRight: "1rem" }} /> 
             
              <FaLinkedin  size={40} style={{ color:
                     "#fff", marginRight: "1rem" }} /> 
 
               </div>
            </div>

        </div>
    </div>
  )
}


export default Footer