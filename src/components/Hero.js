import React from "react";
import "./Hero.css";
import Group529 from "../assests/Group 529.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import Gradient from "../assests/Gradient.png";
import image2 from "../assests/image 1.png";

const Hero = () => {
  return (
    <section>
      <div className="Hero-container-1">
        <img src={image2} className="grapahic_element-1" />
        <div className="hero-content-1">
          <h1>
            Revolutionize your’s <br />
            dining experience.
          </h1>
          <p>
            View your sales stats, Improve your menu and grow your business with
            our touchless QR ordering solution SAJHA MENU. Click register to get
            <br />
            started
          </p>
          <div className="button">
            <button>
              Schedule a Demo
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
        <div className="Hero-image-1">
          <img src={Group529} alt="hero-image" className="hero-image-99" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
