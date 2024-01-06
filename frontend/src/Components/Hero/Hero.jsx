import React from "react";
import handIcon from "../Assets/hand_icon.png";
import arrowIcon from "../Assets/ar.png";
import heroImage from "../Assets/hero_image.png"
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_left">
        <h2>New Arrivals</h2>
       <div>
       <div className="hand_icon">
        <p>new</p>
          <img src={handIcon} alt="" />
        </div>
        <p>Collections</p>
        <p>for everyone</p>
       </div>
        <div className="hero_lates_button">
        <div>Latest Collection</div>
        <img src={arrowIcon} alt="" />
      </div>

      </div>
      
      <div className="hero_right"></div>
      <img src={heroImage} alt="" />
    </div>
  );
};
export default Hero;
