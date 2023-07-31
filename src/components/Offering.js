import React from "react";
import "./Offering.css";
import Rectangle from "../assests/Rectangle 2.png";
import image from "../assests/image 119.png";

import frame from "../assests/Frame 14.png";

const Offering = () => {
  return (
    <section>
      <div className="offerings">
        <div className="heading">
          <h1>Our Offerings</h1>
        </div>
        <div className="offer">
          <ul className="offer_Items">
            <li className="selected_Item">Qr Menu</li>
            <li>POS & Waiter App </li>
            <li>Accounting Software</li>
          </ul>
        </div>
      </div>
      <div className="frame-13">
        <div className="right-Side-Content">
          <h2>
            Get Quick Ordering with
            <br />
            <span class="span-class">QR Menu</span>
          </h2>
          <p>
            Digital QR menus allow customers to access menus and other
            information about a restaurant or business through their smartphone
            or another mobile device. By scanning the QR code with their phone’s
            camera, customers can view menus, place orders, and access other
            information without the need for physical menus or contact with
            staff. <br />
            <br />
            View your sales stats, Improve your menu, and grow your business
            with our touchless QR ordering Menu.
          </p>
          <div className="offering-button">
            <button className>Learn More</button>
          </div>
        </div>
        <div className="left-Side-image">
          <img
            src={Rectangle}
            alt="rectangle"
            className="left-image-offer"
            width={300}
            height={500}
          />
        </div>
      </div>
      <div className="frame-13">
        <div className="right-Side-Content">
          <h2>
            Order Managment with
            <br />
            <span className="span-class">POS</span> and
            <span className="span-class">Waiter App</span>
          </h2>
          <p>
            Digital QR menus allow customers to access menus and other
            information about a restaurant or business through their smartphone
            or another mobile device. By scanning the QR code with their phone’s
            camera, customers can view menus, place orders, and access other
            information without the need for physical menus or contact with
            staff. <br />
            <br />
            View your sales stats, Improve your menu, and grow your business
            with our touchless QR ordering Menu.
          </p>
          <div className="offering-button">
            <button className>Learn More</button>
          </div>
        </div>
        <div className="left-Side-image">
          <img
            src={image}
            alt="rectangle"
            className="left-image-offer"
            width={300}
            height={500}
          />
        </div>
      </div>
      <div className="frame-13">
        <div className="right-Side-Content">
          <h2>
            Get Quick Ordering with
            <br />
            <span class="span-class">QR Menu</span>
          </h2>
          <p>
            Digital QR menus allow customers to access menus and other
            information about a restaurant or business through their smartphone
            or another mobile device. By scanning the QR code with their phone’s
            camera, customers can view menus, place orders, and access other
            information without the need for physical menus or contact with
            staff. <br />
            <br />
            View your sales stats, Improve your menu, and grow your business
            with our touchless QR ordering Menu.
          </p>
          <div className="offering-button">
            <button className>Learn More</button>
          </div>
        </div>
        <div className="left-Side-image">
          <img
            src={frame}
            alt="rectangle"
            className="left-image-offer"
            width={300}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Offering;
