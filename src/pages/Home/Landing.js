import React from "react";
import Banner from "../../components/UIElements/components/Banner";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import CTA from "./components/CTA";
import Header from "../../components/shared/components/Header";
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

const Landing = () => {
  return (
    <>
      <Header />
      <Banner />
      <Element name="colorChange">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <CTA />
      </Element>
    </>
  );
};

export default Landing;
