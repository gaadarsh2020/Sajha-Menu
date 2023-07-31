import React from "react";
import "./ClearThings.css";
import Group from "../assests/Group 537.png";

import BsAccordian from "./Bsaccordian/Accordian";

const ClearThings = () => {
  return (
    <>
      <section className="clear-things">
        <div className="clear-things-main">
          <div className="clear-things-right">
            <h1>
              Lets Clear Things <br /> even
              <span className="span-class">More</span>
            </h1>
            <img
              src={Group}
              alt="iamge2"
              className="burger-image"
              width={200}
              height={100}
            />
          </div>
          <div className="clear-things-left">
            <BsAccordian />
          </div>
        </div>
      </section>
    </>
  );
};

export default ClearThings;
