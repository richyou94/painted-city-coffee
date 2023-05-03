import React from "react";
import Image1 from '../../../images/coffee-cart.jpg'
import Image2 from '../../../images/team.png'
import Image3 from '../../../images/kids-coffee.jpeg'

const SectionTwo = () => {
  return (
    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={Image1} alt="" />
        </div>
        <div className="content">
          <h2>
            #Compassion
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={Image2} alt="" />
        </div>
        <div className="content">
          <h2>
            #Creativity
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={Image3} alt="" />
        </div>
        <div className="content">
          <h2>
            #Commitment
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
    </section>
  );
};

export default SectionTwo;
