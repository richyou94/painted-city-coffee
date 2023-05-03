import React from "react";
import "./Banner.css";
import { Link } from "react-scroll";

const Banner = ({ title }) => {
  return (
    <>
      <div className="background-photo-test fade-in"></div>
      <section id="banner">
        <div className="inner">
          <h2 className="animate-title new-font"><span className="font-skorzhen">painted city</span><br /><span className="font-bebasneue">coffee</span></h2>
          {/* <p className="fade-in">Don't lose your fire</p> */}
          <ul className="fade-in actions special">
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
          className="more"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Learn More
        </Link>
      </section>
    </>
  );
};

export default Banner;
