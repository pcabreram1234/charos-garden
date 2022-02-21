import React from "react";
import InstagramIcon from "../assets/icons/instagram.png";
import FacebookIcon from "../assets/icons/facebook.png";
import WhatsAppIcon from "../assets/icons/whatsapp.png";
import MailIcon from "../assets/icons/mail.png";
import TwitterIcon from "../assets/icons/twitter.png";
import "../styles/SocialSidebar.css";

const SocialSideBar = () => {
  return (
    <div className="SocialSideBar_container">
      <ul className="SoccialSIdeBar--list">
        <li>
          <a href="https://www.instagram.com/pcabreram1234/" target={"_blank"}>
            <img src={InstagramIcon} alt="" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/phillip.cabrera.12"
            target={"_blank"}
          >
            <img src={FacebookIcon} alt="" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/pcabreram1234" target={"_blank"}>
            <img src={TwitterIcon} alt="" />
          </a>
        </li>
        <li>
          <a href="https://web.whatsapp.com/" target={"_blank"}>
            <img src={WhatsAppIcon} alt="" />
          </a>
        </li>
        <li>
          <a href="mailto:pcabreram1324@gmail.com" target={"_blank"}>
            <img src={MailIcon} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialSideBar;
