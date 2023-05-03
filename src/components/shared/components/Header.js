import React, { useState } from "react";
import "./Header.css";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Navbar from "../../Navbar/Navbar";

const Header = (props) => {
  return (
    <header id="header" className={props.animate ? 'fade-in' : 'header-dark'}>
      <h1>
        <Link
          activeClass="activeScroll"
          className="display-none"
          to="colorChange"
          spy={true}
          smooth={true}
          ignoreCancelEvents={true}
          duration={500}
        />
        <a href="/">painted city coffee</a>
      </h1>
      <Navbar />
    </header>
  );
};

export default Header;
