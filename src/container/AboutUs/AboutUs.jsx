import React from "react";

import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex-center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About us</h1>
        <img src={images.spoon} alt="spoon img" />
        <p className="p__opensans">
          Welcome to Diners restaurant, where every meal is a journey of <br />
          discovery and delight. We are a family-owned restaurant that takes
          pride in our passion for food and commitment to providing an
          unforgettable dining experience.{" "}
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife img" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon img" />
        <p className="p__opensans">
          Over the years, Diners Restaurant has become a staple of the
          community,
          <br /> known for its consistent quality and attention to detail. Our
          menu has evolved to feature a wide range of dishes, inspired by
          cuisines from around the world.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
