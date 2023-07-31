import React from "react";
import "./faq.css";
import frame7 from "../../assests/Frame (2).png";
import Digitize from "../../../src/Digitize";
import Collapsable2 from "./Collapaseble-FAQ/Collapsable2";
import Collapsable3 from "./Collapaseble-FAQ/Collapsable3";
import Collapsable4 from "./Collapaseble-FAQ/Collapsable4";

const FAQS = () => {
  return (
    <>
      <section>
        <div className="faq-hero">
          <h1>
            We'r always ready <br /> to
            <span className="span-class-3">Help</span>
          </h1>
          <p>ERP FAQs - We’re always ready to help.</p>
          <img src={frame7} alt="image7" className="hero-image-curl" />
        </div>
      </section>

      <section className="faq-question-section">
        <div className="faq-question">
          <div classname="right-question">
            <div className="right-question-header">
              <h1>FAQ About Sajha Menu</h1>
            </div>
            <div className="collapsable-1">
              <Collapsable2 />
            </div>
          </div>
          <div className="left-question">
            <div className="left-question-header2">
              <div className="faq-pos">
                <h1>FAQ about POS</h1>
              </div>
              <div className="collapsable-2">
                <Collapsable3 />
              </div>
            </div>

            <div className="faq-account">
              <div className="left-question-header3">
                <h1>FAQ about Accounting App</h1>
                <div className="collapsabel-3">
                  <Collapsable4 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Digitize />
    </>
  );
};

export default FAQS;
