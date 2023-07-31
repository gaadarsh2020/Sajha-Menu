import React from "react";
import "./Choice.css";
import image2 from "../assests/image 1.png";
import image3 from "../assests/image101.png";
import Rectangle from "../assests/Rectangle 48.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import group136 from "../assests/Group 136.svg";

const Choice = () => {
  return (
    <section className="choice">
      <div className="choice-section">
        <div className="right-choice">
          <h2>Why Choose Sajha Menu </h2>
          <p>
            Our customers must have the best ordering experience in our
            restaurants. Sometimes Customers may get annoyed as they don't get
            enough time to explore the menu by the waiter. <br />
            What if they scan a QR to explore the menu and Order at the same
            time. Yes! Sajha Menu is a QR ordering solution for restaurants,
            cafes, bars, hotels, and bakeries. View your sales stats and make
            strategies for your Business Growth
          </p>
          <div className="button-choice">
            <button>
              Schedule Demo <ArrowForwardIosIcon className="arrow-schedule" />
            </button>
          </div>
        </div>
        <div className="left-choice">
          <img src={group136} alt="image3" />
        </div>
      </div>
    </section>
  );
};

export default Choice;
