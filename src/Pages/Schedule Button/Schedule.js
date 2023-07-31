import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import frame1 from "../../assests/Frame 658.svg";
import "./Schedule.css";
import group from "../../assests/schedule/Group 510.png";
import arrow from "../../assests/schedule/Arrow 4.svg";
import frame10 from "../../assests/schedule/Frame (10).svg";
import frame11 from "../../assests/schedule/Frame (5).png";
import frame12 from "../../assests/schedule/Frame (6).png";
import bgImg from "../../assests/image 122 .png";
import ContactForm from "../../components/form/Form";

const Company = () => {
  return (
    <>
      <section className="contact-section-demo">
        <div className="hero-content-demo">
          <img src={bgImg} className="bgImage-demo" />
          <div className="hero-content-demo-right">
            <div className="hero-title-demo">
              <h1>Speak with an Expert</h1>
            </div>
            <div className="hero-subtitle-demo">
              <p> Our team can help you:</p>
            </div>
            <div className="hero-list">
              <ul className="list">
                <li>
                  <img src={frame1} alt="image" />
                  <p>
                    Get started on Stripe faster with dedicated implementation
                    and support services.
                  </p>
                </li>

                <li>
                  <img src={frame1} alt="image" />
                  <p>
                    Access custom pricing including cost+ pricing, volume
                    discounts and more.
                  </p>
                </li>

                <li>
                  <img src={frame1} alt="image" />
                  <p>
                    Get started on Stripe faster with dedicated implementation
                    and support services.
                  </p>
                </li>
                <li>
                  <img src={frame1} alt="image" />
                  <p>
                    Get started on Stripe faster with dedicated implementation
                    and support services.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero-content-demo-left">
            <Col className="form-main col-md-14">
              <ContactForm />
            </Col>
          </div>
        </div>
      </section>

      <section className="social-media-section">
        <div className="social-media">
          <div className="email-all">
            <div className="email">
              <img src={group} alt="image" />
              <h4>Email</h4>
              <a href="mailto:info@tunatechnology.com">
                info@tunatechnology.com
              </a>
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
              <a href="https://www.facebook.com/tunatechnology/">facebook</a>
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

          <div className="map-section">
            <iframe
              className="responsive-iframe"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14134.476412625432!2d83.4646377!3d27.667254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399687bed682745d%3A0x7289bb76aea95e0f!2sTuna%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1688534866930!5m2!1sen!2snp"
              border="none"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Company;
