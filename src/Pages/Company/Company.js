import React from "react";
import frame1 from "../../assests/Frame 658.svg";
import "./Company.css";
import image122 from "../../assests/image 122 .png";

const Company = () => {
  return (
    <section>
      <div className="main">
        <img src={image122} alt="iamge122" />
        <div className="right-content">
          <h1>
            Speak with an <br />
            expert
          </h1>
          <h2> Our team can help you:</h2>
          <br />
          <p>
            <img src={frame1} alt="image" />
            Demo products of interest.
            <br />
            <img src={frame1} alt="image" />
            Design a solution to accept and optimize payments, add new revenue
            <br />
            streams and automate financial workflows.
            <br />
            <img src={frame1} alt="image" />
            Access custom pricing including cost+ pricing, volume discounts, and
            more.
            <br />
            <img src={frame1} alt="image" />
            Get started on Stripe faster with dedicated implementation and
            support services.
          </p>
        </div>
        <div class="form-container">
          <form className="form-main">
            <div class="form-group">
              <label for="fullname">Full Name:</label>
              <input type="text" id="fullname" name="fullname" required />
            </div>
            <div class="form-group">
              <label for="phonenumber">Phone Number:</label>
              <input type="tel" id="phonenumber" name="phonenumber" required />
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
              <label for="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Company;
