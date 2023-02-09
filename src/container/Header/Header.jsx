import React from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase The New Flavour" />
      <h1 className="app__header-h1">The Key To Fine Wining and Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Discover a World of Flavor at Diners Restaurant.
        <br /> Indulge in the Finest Cuisine at Diners restauant.
        <br /> Where Every Bite is a Masterpiece.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
