import React from "react";
import "./About.css";
import frame7 from "../../assests/About content/Frame (7).svg";
import frame66 from "../../assests/About content/Frame (1).png";
import image77 from "../../assests/About content/image 110.png";
import image88 from "../../assests/About content/Burgur and phone.png";
import image22 from "../../assests/About content/image 112 (1).png";
import image33 from "../../assests/About content/Frame 628.png";
import Digitize from "../../Digitize";
import image2 from "../../assests/image 1.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const About = () => {
  return (
    <section>
      <div className="hero-12">
        <div className="hero-12-h1">
          <h1>
            Get to <span className="span-class-3">Know</span> Us.
          </h1>
        </div>
        <div className="hero-12-p">
          <p>
            IT services from our company include technology <br />
            and business experts who manage all kinds of business processes.
          </p>
        </div>
        <img src={frame66} alt="frame123" className="auto" />
      </div>

      <div className="about-us">
        <div className="about-right">
          <h2>
            About <span className="span-class">Us</span>
          </h2>
          <p>
            Tuna Technology Pvt Ltd. is a Product-based project company
            specializing in the IT sector. Our specialties include website
            design and software development. Besides that, we also offer digital
            marketing, graphics design, and mobile app development. As your best
            IT partner, we believe website and digital marketing are the only
            ways to promote growing businesses online. <br />
            <br />
            The company is located in Butwal, Nepal, and aims to transform and
            update tech services to deliver quality results. Our team of
            brilliant team members, passionate team members, and first-class
            service delivery make Tuna Tech your preferred choice for web
            problems. In terms of time, cost, design, and performance, our
            projects are always successful.
          </p>
          <button className="spin-button">
            <span className="span55">Company</span> <img src={frame7} />
          </button>
        </div>
        <div className="image-left">
          <img src={image77} alt="iamge77" />
        </div>
      </div>

      <div className="story">
        <div className="story-right">
          <img src={image88} alt="image22" className="story-right-img" />
        </div>
        <div className="story-content-left">
          <h2>
            Story Bheind the <span className="span-class">Software</span>
          </h2>
          <p>
            Digital QR menus allow customers to access menus and other
            information about a restaurant or business through their smartphone
            or another mobile device. By scanning the QR code with their phone’s
            camera, customers can view menus, place orders, and access other
            information without the need for physical menus or contact with
            staff. View your sales stats, Improve your menu, and grow your
            business with our touchless QR ordering Menu.
          </p>
        </div>
      </div>
      <div className="section-last">
        <h2>
          Additional <span className="span-class">Software </span>Tuna
          Technology <br />
          Provides
        </h2>

        <p>
          In addition to Tuna HMS, Tuna Technology also offers a comprehensive
          range of additional software solutions. From advanced analytics tools
          to automated processes, our software suite is designed to empower
          businesses, streamline operations, and drive growth
        </p>
      </div>
      <div className="tuna-logo">
        <div className="tuna">
          <img src={image22} alt="iamge22" className="image-tuna" />
          <img src={image33} alt="image33" className="image-tuna" />
        </div>
      </div>
      <Digitize />
    </section>
  );
};

export default About;
