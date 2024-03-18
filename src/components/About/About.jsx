import "./About.css";
import React from "react" 

function About(){
    return(
     
        <div id="about-main-container">
      <div className="about-container">
        <div className="about-image">
          <img src="about2.jpg"/>
        </div>
        <div className="about-content">
          <h1>ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
            ex quam consectetur aspernatur, harum similique delectus ipsa
            pariatur fugiat id cumque ullam unde sequi nisi nulla eaque at
            alias.
          </p>
          <button className="readmore">Read more</button>
        </div>
      </div>
    </div>
    
   
        );
}
export default About;