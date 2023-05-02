import React from "react";
import "./Banner.css";
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

const Banner = ({ title }) => {
  return (
    <section id="banner">
      <div className="inner">
        <h2>painted city coffee</h2>
        <p>Don't lose your fire</p>
        <ul className="actions special">
          <li>
            <a href="#" className="button primary">
              Get a quote
            </a>
          </li>
        </ul>
      </div>
      <Link
        activeClass="activeScroll"
        to="colorChange"
        className="more scrolly"
        spy={true}
        smooth={true}
        duration={1000}
      >
        Learn More
      </Link>
    </section>
  );
};

export default Banner;
