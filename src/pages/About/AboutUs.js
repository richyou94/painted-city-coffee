import React from "react";

import Main from "../../components/shared/layouts/Main";
import Header from "../../components/shared/components/Header";
 
const AboutUs = () => {
  return (
    <>
      <Header />
      <Main>
        <div className="background-photo-2"></div>
        <header>
          <h2>About Us</h2>
        </header>
        <section className="wrapper style5">
          <div className="inner">
            <h3>Painted City Coffee</h3>
            <p>
              Painted City Coffee brings an experience forward coffee brand in
              the Orange County market with an emphasis on service excellence,
              inspiring environment, and quality standards of products that are
              distinct in expression and form.
            </p>

            <p>
              In December 2022, Painted City Coffee was birthed inside a garage
              with the hope of being partnered with a homeless ministry serving
              coffee with the plan of bringing hope and dreams to underserved
              communities.
            </p>
          </div>
        </section>
      </Main>
    </>
  );
};

export default AboutUs;
