import React from "react"
import "./Heroimg.css"
import IntroImg from "../assets/img1.jpg"
import { Link } from "react-router-dom"


const HeroImg  = () => {
   return <div className="hero">
       <div className="mask">
           <img className="into-img" 
           src={IntroImg} alt="IntroImg"/>
       </div>
       <div className="content">
           <p>HI, I'M NATIA BEGLARASHVILI</p>
            <h1>React Developer</h1>
            <div> 
                <Link to="/project" className="btn">PROJECTS</Link>
                <Link to="/contact" className="btn btn-light">CONTAQT</Link>
            </div>
        </div>
   </div>
  
}

export default  HeroImg