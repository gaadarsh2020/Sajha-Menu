import React from "react";
import "./Offering.css";
import Rectangle from "../assests/Rectangle 2.png";
import image from "../assests/image 119.png";
import Rectangle1 from "../assests/Rectangle 2 (1).png";
import tunaHms from "../assests/mockup for tuna HMS 4.png";

const Offering = () => {
  return (
    <section>
      <div className="offerings">
        <div className="heading">
          <h2>Our Offerings</h2>
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
          <button>Learn More</button>
        </div>
        <div className="left-Side-image">
          <img src={Rectangle} alt="rectangle" />
        </div>
      </div>
      <div className="frame-13">
        <div className="right-Side-Content">
          <h2>
            Order Management with <span className="span-class">POS</span> and
            Waiter App
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
          <button>Learn More</button>
        </div>
        <div className="left-Side-image">
          <img src={Rectangle1} alt="rectangle" className="timi2" />

          <div className="timi">
            <img src={tunaHms} alt="rectangle" />
          </div>
        </div>
      </div>
      <div className="frame-13">
        <div className="right-Side-Content">
          <h2>
            Get Quick Ordering with QR Menu
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
          <button>Learn More</button>
        </div>
        <div className="left-Side-image">
          <img src={image} alt="rectangle" />
        </div>
      </div>
    </section>
  );
};

export default Offering;
