import React from "react";
import Main from "../../components/shared/layouts/Main";
import Header from "../../components/shared/components/Header";

const Story = () => {
  return (
    <>
      <Header />
      <Main>
        <div className="background-photo-2"></div>
        <header>
          <h2>Our Story</h2>
        </header>
        <section class="wrapper style5">
          <div class="inner">
            <h3>origin story</h3>
            <p>
              Painted City Coffee was launched in December 2022 as a coffee
              catering service.
            </p>

            <p>
              In the years prior, PCC founder, Calvin Yoo, was introduced to
              specialty coffee business in 2018 when he opened his first shop in
              South Orange County. After establishing a community-building
              culture and acquiring experience as an owner-operator, he
              identified an opportunity to bring this created experience to his
              mobile coffee cart number one.
            </p>
            <p>
              Painted City Coffee has an opportunity to respond to the
              increasing demand for pop-up coffee cart at various events and
              gatherings with an espresso bar concept rooted in guest experience
              and brand-forward thinking. Equipped with visionary leadership,
              highly talented baristas, experienced content creators, and
              cohesive operational systems, Painted City Coffee is poised to
              carve out a significant portion of the growing coffee catering
              market in Orange County. Exceptional coffee products and service
              excellence within a positive and inspiring environment will
              provide the ultimate coffee experience for all guests of the
              event.
            </p>
            <p>
              The menu will consist of our signature cold brew and cold brew
              latte, espresso-based beverages, drip coffee, and pastries brought
              in from a third-party vendor; Painted City Coffee will rely on the
              fundamental principle of excellence in mobility. Providing a small
              yet shining presence will invite guests to view the cart as the
              go-to catering service for helping to elevate the event experience
              with creativity and festivity.
            </p>
            <p>
              Thorough brand development will complete the experience for each
              guest who encounters the space. Modern design thinking, instinct
              rooted in years of experience, and clear vision will characterize
              all efforts to develop brand recognition.
            </p>
          </div>
        </section>
      </Main>
    </>
  );
};

export default Story;
