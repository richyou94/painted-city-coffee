import React, { useEffect } from "react";
import Banner from "../../components/UIElements/components/Banner";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import CTA from "./components/CTA";
import Header from "../../components/shared/components/Header";
import { Element } from "react-scroll";
import { gsap } from "gsap";

const Landing = () => {
  useEffect(() => {
    setTimeout(() => {
      // console.log("yet..?");
      reveal();
    }, 100);
  });

  async function reveal() {
    // gsap.registerPlugin(CSSRulePlugin);
    // const rule1 = CSSRulePlugin.getRule(".animateTitle::before");
    // const rule2 = CSSRulePlugin.getRule(".animateTitle::after");
    const t1 = gsap.timeline({});
    await t1
      // .to([rule1, rule2], {
      //   width: "100%",
      //   ease: "ease-in",
      //   duration: 0.5,
      //   delay: 0.2,
      // })
      // .to('.animate-line', {
      //   width: "100%",
      //   ease: "ease-in",
      //   duration: 0.5,
      //   delay: 0.2,
      // })
      .to(".animateTitle", {
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
