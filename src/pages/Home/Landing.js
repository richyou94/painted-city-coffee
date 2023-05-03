import React, { useEffect } from "react";
import Banner from "../../components/UIElements/components/Banner";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import CTA from "./components/CTA";
import Header from "../../components/shared/components/Header";
import { Element } from "react-scroll";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/all";

const Landing = () => {
  useEffect(() => {
    setTimeout(() => {
      console.log("yet..?");
      reveal();
    }, 2);
  });

  async function reveal() {
    const t1 = gsap.timeline({});
    const rule1 = CSSRulePlugin.getRule(".animate-title:before");
    const rule2 = CSSRulePlugin.getRule(".animate-title:after");
    await t1
      .to([rule1, rule2], {
        width: "100%",
        ease: "ease-in",
        duration: 0.5,
        delay: 0.2,
      })
      .to(".animate-title", {
        scale: "1",
        opacity: "1",
        ease: "ease-out",
        duration: 0.3,
      })
      .to(".fade-in", {
        opacity: "1",
        ease: "ease-in",
        duration: 2,
        delay: 1,
      })
      .to(".more", {
        y: "0",
        opacity: "1",
        ease: "ease-in",
        duration: 0.2,
      });
  }

  return (
    <>
      <Header animate={true} />
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
