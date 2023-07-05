import React from "react";
import "./faq.css";
import frame6 from "../../assests/Frame (6).svg";
import image2 from "../../assests/image 1.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import frame7 from "../../assests/Frame (2).png";

const FAQS = () => {
  return (
    <section>
      <div className="faq-hero">
        <h1>
          We'r always ready <br /> to <span className="span-class">help</span>
        </h1>
        <p>ERP FAQs - We’re always ready to help.</p>
        <img src={frame7} alt="image7" className="hero-image-curl" />
      </div>

      <div className="faq-question">
        <div classname="right-question">
          <h2>FAQ about Sajha Menu</h2>
          <ul>
            <li>what is Sajha Menu</li>
            <li>what is Sajha Menu</li>
            <li>what is Sajha Menu</li>
            <li>what is Sajha Menu</li>
            <li>what is Sajha Menu</li>
            <li>what is Sajha Menu</li>
            <li>what is Sajha Menu</li>
            <li>what is Sajha Menu</li>
          </ul>
        </div>
        <div className="left-question">
          <div className="faq-pos">
            <h2>FAQ about POS</h2>
            <ul>
              <li>what is Sajha Menu</li>
              <li>what is Sajha Menu</li>
              <li>what is Sajha Menu</li>
              <li>what is Sajha Menu</li>
              <li>what is Sajha Menu</li>
            </ul>
          </div>
          <div className="faq-account">
            <h2>FAQ about Accounting App</h2>
            <ul>
              <li>what is Sajha Menu</li>
              <li>what is Sajha Menu</li>
              <li>what is Sajha Menu</li>
              <li>what is Sajha Menu</li>
              <li>what is Sajha Menu</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="digitize">
        <img src={image2} className="graphic" />
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

export default FAQS;
