import React from "react";
import "./Hero.css";
import Group529 from "../assests/Group 529.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import Gradient from "../assests/Gradient.png";
import image2 from "../assests/image 1.png";

const Hero = () => {
  return (
    <div className="Hero-container">
      <img src={image2} className="grapahic_element" />
      <div className="hero-content">
        <h1>Revolutionize your’s dining experience.</h1>
        <p>
          View your sales stats, Improve your menu and grow your business with
          our touchless QR ordering solution SAJHA MENU. Click register to get
          started
        </p>
        <div className="button">
          <button>
            Schedule a Demo
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src={Group529} alt="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
