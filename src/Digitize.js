import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import image3 from "../src/assests/image 1.png";
import "./Digitize.css";
const Digitize = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <section>
        <div className="digitize-section">
          <img
            src={image3}
            alt="image3"
            className="back-image"
            width={400}
            height={600}
          />
          <div className="digitize-right">
            <div className="digitize-head">
              <h2>
                Ready to digitize <br />
                your bussiness?
              </h2>
            </div>
            <div className="digitize-paragraph">
              <p>
                Join with us and revolutionize your process and profits. Tuna
                ERP solution <br />
                connect your business and drive value.
              </p>
            </div>
          </div>
          <div className="digitize-left">
            <button className="digitize-001">
              Schedule a Demo <ArrowForwardIosIcon className="arrow-digitize" />
            </button>
            <div className="text">
              <h4>Get some FAQS answers</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Digitize;
