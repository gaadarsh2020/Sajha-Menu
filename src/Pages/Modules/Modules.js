import React from "react";
import "./module.css";
import star from "../../assests/Star 1 (2).png";
import Group from "../../assests/Group 537.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Rectangle from "../../assests/Rectangle 2.png";
import Rectangle2 from "../../assests/Rectangle 150994.png";
import frame3 from "../../assests/Frame (5).svg";
import frame4 from "../../assests/Frame (4).svg";
import frame5 from "../../assests/Rectangle 15.png";
import image5 from "../../assests/isolated_tablet_laptop_and_smartphone_composition 1.png";
import imagemac from "../../assests/iMac.png";
import vector from "../../assests/Vector.svg";
import image2 from "../../assests/image 1.png";

const modules = () => {
  return (
    <section class="hero">
      <div className="Hero-container-2">
        <div className="hero-content-2">
          <h1>
            Get Quick Ordering
            <br /> with <span className="span-class">QR Menu.</span>
          </h1>
          <p>
            View your sales stats, Improve your menu and grow your business
            <br /> with our touchless QR ordering solution SAJHA MENU. Click
            register to get started
          </p>
          <div className="button">
            <button>
              Schedule a Demo
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
        <div className="hero-image-2">
          <img src={star} alt="images" className="image1" />
          <img src={Group} alt="hero-image" className="image2" />
        </div>
      </div>

      <div className="frame">
        <div className="right-Side-Content">
          <h2>
            What is Sajha Menu’s
            <br />
            <span class="span-class">QR Menu</span>
          </h2>
          <p>
            Digital QR menus allow customers to access menus and other
            information about a restaurant or business through their smartphone
            or another mobile device. By scanning the QR code with their phone’s
            camera, customers can view menus, place orders, and access other
            information without the need for physical menus or contact with
            staff.
            <br />
            <br /> View your sales stats, Improve your menu, and grow your
            business with our touchless QR ordering Menu.
          </p>
          <button>
            Schedule a Demo
            <ArrowForwardIosIcon />
          </button>
        </div>
        <div className="left-Side-image">
          <img src={Rectangle} alt="rectangle" />
        </div>
      </div>

      <div className="step1">
        <h2>How can you use Sajha Menu</h2>
      </div>

      <div className="frame12">
        <div className="right-Side-Content">
          <h2>1. Just show the menu</h2>
          <p>
            You can just simply show your menu digitally in the best possible
            way, by showcasing your food and beverages with beautiful photos and
            videos. Take advantage of our other features that will guarantee an
            increase in sales and guest satisfaction while being more
            personalized with your guests by still providing physical table
            service.
          </p>
          <div>
            <img src={frame3} /> <img src={frame4} />
          </div>
          <div>
            <img src={frame5} />
          </div>
        </div>
        <div className="left-Side-image">
          <img src={Rectangle2} alt="rectangle" />
        </div>
      </div>

      <div className="other-modules">
        <h2>Our Other Modules</h2>
        <p>
          Given is the image description of the whole food ordering process.
          <br />
          You can click the respective product to know more about them.
        </p>
      </div>
      <div className="HMS-Accounting">
        <div className="right-image-1">
          <img src={image5} alt="image1" />
          <h3>POS & Waiter App</h3>
          <p>
            lorem lorem loremdfasdfasdf sdfsdfsdf
            <br />
            dfsdfsdfasdf
          </p>
          <div className="vector">
            <p> Learn More </p>
            <img src={vector} />
          </div>
        </div>
        <div className="left-image-2">
          <img src={imagemac} alt="image2" />
          <h3> Accounting</h3>
          <p>
            lorem lorem lorem lorem
            <br /> lorem lorem lorem
          </p>
          <div className="vector">
            <p>Learn More</p>
            <img src={vector} />
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

export default modules;
