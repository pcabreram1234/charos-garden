import React from "react";
import AboutUsImage from "../assets/images/index.png";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="AboutUs__Container">
      <div className="AboutUs_Picture">
        <img src={AboutUsImage} alt="AboutUsImage" />
      </div>

      <section className="Vision__Container">
        <header>Vision</header>
        <p>
          Propelled by our affection for flowers and energy about nature, it is
          our obsession to make creative and noteworthy plant and new flower
          courses of action. We trust that the best, freshest flowers deliver
          the most noteworthy presentations.
        </p>
      </section>

      <section className="Mision__Container">
        <header>Mision</header>
        <p>
          Chance is nowadays you will undoubtedly go over one or huge numbers of
          its conveyance vans humming around London on consistent schedule.
          Indeed, today, ‘Organization Name’ is glad to be one of driving flower
          specialists in San Jose and US with a few shops dispersed crosswise
          over San Jose just as having a sister organization similarly as
          substantial.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
