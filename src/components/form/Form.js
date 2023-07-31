import React from "react";
import "./Form.css";

const ContactForm = () => {
  return (
    <form className="contact_form">
      <div className="indv_form ">
        <div className="indv_label">
          <label htmlFor="full_Name">
            Full Name <span>*</span>
          </label>
        </div>
        <div className="indv_input">
          <input
            type="text"
            id="full_Name"
            name="full_Name"
            placeholder="Enter your full name"
          />
        </div>
      </div>
      <div className=" indv_form">
        <div className="indv_label ">
          <label htmlFor="phone_Number">
            Phone Number <span>*</span>
          </label>
        </div>
        <div className="indv_input ">
          <input
            type="tel"
            id="phone_Number"
            name="phone_Number"
            placeholder="Enter your phone number"
          />
        </div>
      </div>
      <div className=" indv_form">
        <div className="indv_label ">
          <label htmlFor="email">
            Email Address <span>*</span>
          </label>
        </div>
        <div className="indv_input ">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div className=" indv_form">
        <div className="indv_label ">
          <label htmlFor="message">
            Message <span>*</span>
          </label>
        </div>
        <div className="indv_input ">
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Enter your message"
          ></textarea>
        </div>
      </div>
      <div className="indv_form">
        <button type="submit">Submit </button>
      </div>
    </form>
  );
};

export default ContactForm;
