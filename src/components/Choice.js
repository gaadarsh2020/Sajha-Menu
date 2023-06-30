import React from "react";
import "./Choice.css";
import image2 from "../assests/image 1.png";
import image3 from "../assests/image101.png";
import Rectangle from "../assests/Rectangle 48.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Choice = () => {
  return (
    <section>
      <div className="choice-section">
        <div className="right-choice">
          <h2>Why Choose Sajha Menu </h2>
          <p>
            Our customers must have the best ordering experience in our
            restaurants. Sometimes Customers may get annoyed as they don't get
            enough time to explore the menu by the waiter. What if they scan a
            QR to explore the menu and Order at the same time. Yes! Sajha Menu
            is a QR ordering solution for restaurants, cafes, bars, hotels, and
            bakeries. View your sales stats and make strategies for your
            Business Growth
          </p>
          <button>Schedule Demo</button>
        </div>
        <div className="left-choice">
          <img src={image3} alt="image3" />
        </div>
      </div>

      <div className="client-say">
        <h2>What Our Client Say</h2>
        <p>
          We always take care of our clients by creating experiences that put
          our clients first. The vast majority of our clients continue working
          with us after the project is complete.
        </p>
      </div>
      <div className="carousel">
        <div className="user1">
          <div className="user1-image">
            <img src={Rectangle} alt="Reactangle" />
          </div>
          <div className="user1-para">
            <p>
              "Working with this company has been a game-changer for our
              marketing efforts. Their innovative strategies have helped us
              reach new heights. Highly recommended!"
              <br />
              <br />
              Krishna Prashad
              <br />
              Manger of tulip
            </p>
          </div>
        </div>
        <div className="user1">
          <div className="user1-image">
            <img src={Rectangle} alt="Reactangle" />
          </div>
          <div className="user1-para">
            <p>
              "Working with this company has been a game-changer for our
              marketing efforts. Their innovative strategies have helped us
              reach new heights. Highly recommended!"
              <br />
              <br />
              Krishna Prashad
              <br />
              Manger of tulip
            </p>
          </div>
        </div>
        <div className="user1">
          <div className="user1-image">
            <img src={Rectangle} alt="Reactangle" />
          </div>
          <div className="user1-para">
            <p>
              "Working with this company has been a game-changer for our
              marketing efforts. Their innovative strategies have helped us
              reach new heights. Highly recommended!"
              <br />
              <br />
              Krishna Prashad
              <br />
              Manger of tulip
            </p>
          </div>
        </div>
      </div>

      <div className="digitize">
        <img src={image2} className="grapahic" />
        <div className="left">
          <h1>
            Ready to digitize your <br /> business ?
          </h1>
          <p>
            Join with us and revolutionize your process and profits. Tuna ERP
            <br />
            solution connect your business and drive value.
          </p>
        </div>
        <div className="right">
          <button>
            Schedule a Demo <ArrowForwardIosIcon />
          </button>
          <h5>
            <u>Get some FAQS answer</u>
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Choice;
