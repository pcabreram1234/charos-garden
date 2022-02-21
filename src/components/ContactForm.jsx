import React from "react";
import SocialSideBar from "../components/SocialSideBar";
import "../styles/ContactUs.css";

const ContactForm = () => {
  return (
    <div className="ContacUs--form">
      <span>It is a pleasure to serve</span>
      <form action="?">
        <div className="Contactus--Form_row">
          <label htmlFor="name"></label>
          <input
            type="text"
            className="ContactUs--input"
            id="name"
            placeholder="Name..."
            required
          />
        </div>
        <div className="Contactus--Form_row">
          <label htmlFor="subject"></label>
          <input
            type="text"
            className="ContactUs--input"
            id="subject"
            placeholder="Subject..."
            required
          />
        </div>

        <div className="Contactus--Form_row">
          <label htmlFor="message"></label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Write here you email..."
            required
          ></textarea>
        </div>

        <div className="Contactus--Form_row">
          <button className="button" type="submit">
            Send
          </button>
          <button className="button" type="button">
            Reset
          </button>
        </div>
      </form>
      <SocialSideBar />
    </div>
  );
};

export default ContactForm;
