import React from "react";
import frame1 from "../../assests/Frame 658.svg";
import "./Schedule.css";
import group from "../../assests/schedule/Group 510.png";
import arrow from "../../assests/schedule/Arrow 4.svg";
import frame673 from "../../assests/schedule/Rectangle 46.png";
import frame10 from "../../assests/schedule/Frame (10).svg";
import frame11 from "../../assests/schedule/Frame (5).png";
import frame12 from "../../assests/schedule/Frame (6).png";

const Company = () => {
  return (
    <section className="last-section">
      <div className="hero-main">
        {/* <img src={image122} alt="iamge122" /> */}
        <div className="right-content-last">
          <h1>
            Speak with an <br />
            expert
          </h1>
          <p> Our team can help you:</p>

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
            Access custom pricing including cost+ pricing, volume discounts and
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

      <div className="social-media">
        <div className="email-all">
          <div className="email">
            <img src={group} alt="image" />

            <h4>Email</h4>

            <a href="mailto:info@tunatechnology.com">info@tunatechnology.com</a>
          </div>
          <div className="email">
            <img src={group} alt="image" />
            <h4>Phone</h4>
            <a href="tel:+977-71-438471">071-438471</a>,
            <a href="tel:+977-985-7043291"> 9857043895</a>,
            <a href="tel:+977-985-7043291"> 9857043891</a>
          </div>
          <div className="email">
            <img src={group} alt="image" />
            <h4>Location</h4>
            <a
              href="https://goo.gl/maps/ZtXthD9fvUP2hh749"
              target="_blank"
              rel="noreferrer"
            >
              Yogikuti-3, Rupandehi, Nepal
            </a>
          </div>
        </div>
        <div className="social-link">
          <h4>Socials</h4>
          <div className="content-11">
            <img src={frame10} alt="image" />
            <p>facebook</p>
            <img src={arrow} alt="image" />
          </div>
          <div className="content-11">
            <img src={frame11} alt="image" />
            <a href="">LinkedIn</a>
            <img src={arrow} alt="image" />
          </div>
          <div className="content-11">
            <img src={frame12} alt="image" />
            <a href="https://twitter.com/tuna_technology">Twitter</a>
            <img src={arrow} alt="image" />
          </div>
        </div>
        <div className="map-image">
          <img src={frame673} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default Company;
