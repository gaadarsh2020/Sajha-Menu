import React from "react";
import "./ClearThings.css";
import Group from "../assests/Group 537.png";
import AddIcon from "@mui/icons-material/Add";

const ClearThings = () => {
  return (
    <>
      <div className="new-section">
        <div className="left-side">
          <h1>
            Let’s clear things <br />
            even <span class="span-class">More</span>
          </h1>
          <img src={Group} alt="" />
        </div>
        <div className="right-side">
          <ul>
            <li>
              Can Place order without waiter app ? <AddIcon className="icon" />
            </li>
            <li>Can I order directly from waiter app without QR menu.?</li>
            <li>What are the device requirements to use Sajha Menu</li>
            <li>What are the device requirements to use Sajha Menu</li>
            <li>How to create QR code menu</li>
            <li>How to create QR code menu</li>
            <li>How long will it take to set up</li>
            <li>How long will it take to set up</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ClearThings;
