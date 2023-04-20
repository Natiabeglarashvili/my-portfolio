import { Link } from "react-router-dom"
import "./AboutContent.css"
import React from 'react'
import AB1 from "../assets/AB1.jpg"
import SK1 from "../assets/SK1.jpg"
import SK2 from "../assets/SK2.jpg"
import SK3 from "../assets/SK3.png"
import SK4 from "../assets/SK4.jpg"
import SK5 from "../assets/SK5.jpg"
import SK6 from "../assets/SK6.jpg"



const AboutContent = () => {
  return (
   <div className="about">
    <div className="aboutimg">
          <img className="into-img" 
           src={AB1} alt="Img"/>
    </div>
     <div className="aboutinfo">
      <h1>Who Am I</h1><br></br>
      <h4> Hello, <br></br>
        thank you for your interest in me!<br></br><br></br>
         I'm a React developer.  This is a job I really like  and love!<br></br>
          I am eager to gain more knowledge and experience. <br></br>I create beautiful, technically well-organized 
          and functionally interesting websites!</h4>
         </div> 
        <div className="aboutinfo-info">
      <p> when i started studying, I was very worried that something would not work out.
          When I finished my first project (Sairme Resort) I realized that if you work hard, anything is 
          possible! <br></br> <br></br>Education: since 2022 - React developer, skills: Html, CSS, JavaScript, TypeScript, React.js, Node.js <br></br>2017-2022
          European University (EU) Faculty of Business and Technology, Diploma-Bachelor <br></br> 2014-2017
          Georgian Business Academy (SBA)Specialty: Management,<br></br> <br></br>never stopped evolving
          Every day I try to read, listen, do something new and develop!<br></br>
          <br></br> With best wishes,<br></br> Natia Beglarashvili </p>
         </div>

        <Link to="/contact">
            <button className="btn">contact</button>
        </Link>
     

       
       
       
      <div className="skils">
        <h1>Skils:</h1>
      
       <img src={SK1}/>
       <img src={SK2}/>
       <img src={SK3}/>
       <img src={SK4}/>
       <img src={SK5}/>
       <img src={SK6}/>

       </div>
  </div>
  )
}

export default AboutContent