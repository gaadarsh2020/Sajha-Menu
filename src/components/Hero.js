import React from "react";
import "./Hero.css";
import Group529 from "../assests/Group 529.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import Gradient from "../assests/Gradient.png";
import image2 from "../assests/image 1.png";

const Hero = () => {
  return (
    <section className="hero-section-1">
      <div className="hero-content">
        <img src={image2} className="graphic-element" />
        <div className="hero-content-right">
          <div className="hero-content-text">
            <h1>Revolutionize your’s dining experience.</h1>
            <p>
              View your sales stats, Improve your menu and grow your business
              with our touchless QR ordering solution SAJHA MENU. Click register
              to get started
            </p>
          </div>
          <div className="button-hero">
            <button>
              Schedule a Demo <ArrowForwardIosIcon className="forward-Icon" />
            </button>
          </div>
        </div>
        <div className="hero-content-left">
          <img src={Group529} alt="left" className="image1" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
