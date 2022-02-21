import React from "react";
import ContactForm from "../components/ContactForm";
import ContactUsImage from "../components/ContactUsImage";
import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="ContactUs__container">
      <ContactForm />
      <ContactUsImage />
    </div>
  );
};

export default ContactUs;
