import React from "react";
import "./sajhaworks.css";
import Using from "../assests/Using QR 1.png";
import Waiter from "../assests/png waiter 1.png";
import Chef from "../assests/Chef png 1.png";
import Post from "../assests/POS final 1.png";

const Sajhaworks = () => {
  return (
    <section className="container">
      <div className="header">
        <h1>How Sajha Menu Works </h1>
      </div>
      <div className="work_section">
        <div className="work_content">
          <div className="work_Content_Item">
            <div className="work_Content_Item_image">
              <img src={Using} alt="using" width={150} height={300} />
            </div>
            <div className="work_Content_Item_header">
              <h1>01</h1>
            </div>
            <div className="work_Content_Item_para">
              <p>Customer will scan QR with our QR menu</p>
            </div>
          </div>
          <div className="work_Content_Item">
            <div className="work_Content_Item_image">
              <img src={Waiter} alt="using" width={150} height={400} />
            </div>
            <div className="work_Content_Item_header">
              <h1>02</h1>
            </div>
            <div className="work_Content_Item_para">
              <p>Waiter will confirm the order and place the order</p>
            </div>
          </div>
          <div className="work_Content_Item">
            <div className="work_Content_Item_image">
              <img src={Chef} alt="using" width={150} height={300} />
            </div>
            <div className="work_Content_Item_header">
              <h1>03</h1>
            </div>
            <div className="work_Content_Item_para">
              <p>KOT and BOT will be printed in the kitchens</p>
            </div>
          </div>
          <div className="work_Content_Item">
            <div className="work_Content_Item_image">
              <img src={Post} alt="using" width={150} height={300} />
            </div>
            <div className="work_Content_Item_header">
              <h1>04</h1>
            </div>
            <div className="work_Content_Item_para">
              <p>Finish your order with billing from POS.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sajhaworks;
