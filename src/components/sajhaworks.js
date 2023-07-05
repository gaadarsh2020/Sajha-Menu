import React from "react";
import "./sajhaworks.css";
import Using from "../assests/Using QR 1.png";
import Waiter from "../assests/png waiter 1.png";
import Chef from "../assests/Chef png 1.png";
import Post from "../assests/POS final 1.png";
import arrow from "../assests/Frame (3).svg";

const Sajhaworks = () => {
  return (
    <section className="container">
      <div className="header">
        <h2>How Sajha Menu Works </h2>
      </div>
      <div className="work_section">
        <div className="work_content">
          <div className="work_Content_Item">
            <img src={Using} alt="using" />
            <h1>O1</h1>
            <p>Customer will scan QR with our QR menu</p>
          </div>
          <img src={arrow} alt="arrow" className="arrow1" />
          <div className="work_Content_Item">
            <img src={Waiter} alt="using" />
            <h1>O2</h1>
            <p>Waiter will confirm the order and place the order</p>
          </div>
          <img src={arrow} alt="arrow" />
          <div className="work_Content_Item">
            <img src={Chef} alt="using" />
            <h1>O3</h1>
            <p>
              KOT and BOT will be <br />
              printed in the kitchens
            </p>
          </div>
          <img src={arrow} alt="arrow" className="arrow1" />
          <div className="work_Content_Item">
            <img src={Post} alt="using" />
            <h1>O4</h1>
            <p>
              Finish your order with <br />
              billing from POS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sajhaworks;
